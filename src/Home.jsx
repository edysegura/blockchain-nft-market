import Nullstack from 'nullstack'
import { ethers } from 'ethers'
import { marketplaceAddress } from '../config'
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

class Home extends Nullstack {
  _Web3Modal = null
  nftItems = []
  loading = true

  prepare({ project, page }) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with Nullstack`
  }

  async hydrate() {
    this.nftItems = await this.loadNFTs()
    this._Web3Modal = await this.loadWeb3Modal()
  }

  async loadWeb3Modal() {
    const Web3Modal = await import('web3modal')
    return Web3Modal
  }

  async fetchData({ uri }) {
    const response = await fetch(uri)
    const data = await response.json()
    return data
  }

  async loadNFTs() {
    this.loading = true
    /* create a generic provider and query for unsold market items */
    const provider = new ethers.providers.JsonRpcProvider()
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      provider,
    )
    const marketItems = await contract.fetchMarketItems()
    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = await Promise.all(
      marketItems.map(async (marketItem) => {
        const tokenUri = await contract.tokenURI(marketItem.tokenId)
        const meta = await this.fetchData({ uri: tokenUri })
        const price = ethers.utils.formatUnits(
          marketItem.price.toString(),
          'ether',
        )
        const item = {
          price,
          tokenId: marketItem.tokenId.toNumber(),
          seller: marketItem.seller,
          owner: marketItem.owner,
          image: meta.data.image,
          name: meta.data.name,
          description: meta.data.description,
        }
        return item
      }),
    )
    this.loading = false
    return items
  }

  async buyNFT({ nft }) {
    const web3Modal = new this._Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer,
    )
    const price = ethers.utils.parseUnits(nft.price.toString(), 'ether')
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    })
    await transaction.wait()
    this.loadNFTs()
  }

  render() {
    if (this.loading === false && !this.nftItems.length)
      return <h1 class="px-20 py-10 text-3xl">No items in marketplace</h1>
    return (
      <section class="flex justify-center">
        <div class="px-4 max-w-[1600px]">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {this.nftItems.map((nft) => (
              <div class="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} />
                <div class="p-4">
                  <p class="text-2xl h-[64px] font-semibold">{nft.name}</p>
                  <div class="h-[70px] overflow-hidden">
                    <p class="text-gray-400">{nft.description}</p>
                  </div>
                </div>
                <div class="p-4 bg-black">
                  <p class="text-2xl font-bold text-white">{nft.price} ETH</p>
                  <button
                    class="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                    onclick={() => this.buyNft(nft)}
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default Home
