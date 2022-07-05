import Nullstack from 'nullstack'
import MagnifierIcon from '../icons/magnifier'
import Title from '../layout/title'

class Explore extends Nullstack {
  nftItems = []
  loading = true

  async hydrate() {
    this.loading = true
    this.nftItems = await this.loadNFTs()
    this.loading = false
  }

  async loadNFTs({
    _ethers: ethers,
    marketplaceAddress,
    fetchJson,
    NFTMarketplace,
  }) {
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
        const meta = await fetchJson({ uri: tokenUri })
        const price = ethers.utils.formatUnits(
          marketItem.price.toString(),
          'ether',
        )
        const item = {
          price,
          tokenId: marketItem.tokenId.toNumber(),
          seller: marketItem.seller,
          owner: marketItem.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        }
        return item
      }),
    )
    return items
  }

  async buyNFT({
    _ethers: ethers,
    marketplaceAddress,
    NFTMarketplace,
    Web3Modal,
    nft,
  }) {
    const web3Modal = new Web3Modal()
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
    this.hydrate()
  }

  renderNoContent() {
    return (
      <section>
        <h1 class="py-10 text-center text-3xl">No items in marketplace!</h1>
      </section>
    )
  }

  renderSearchField() {
    return (
      <div class="p-4 text-center">
        <Title text="Explore the starving children" />
        <div class="relative m-auto w-[600px]">
          <span class="absolute z-10">
            <MagnifierIcon />
          </span>
          <input
            type="text"
            class="w-[500px] border-b-2 border-white bg-black pl-8 text-2xl outline-none"
          />
        </div>
      </div>
    )
  }

  render() {
    if (this.loading === false && !this.nftItems.length) return <NoContent />
    return (
      <section class="mb-32">
        <div>
          <SearchField />
          <div class="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            {this.nftItems.map((nft) => (
              <div class="overflow-hidden border p-2">
                <img src={nft.image} alt={nft.name} draggable="false" />
                <div class="p-4">
                  <p class="text-2xl font-semibold">{nft.name}</p>
                  <div class="h-6 overflow-hidden">
                    <p class="text-white">{nft.description}</p>
                  </div>
                </div>
                <div class="bg-black p-4">
                  <span>Price</span>
                  <p class="text-2xl font-bold text-white">{nft.price} ETH</p>
                  <button
                    class="mt-4 w-full rounded bg-mustard py-2 px-12 font-bold text-black"
                    onclick={() => this.buyNFT({ nft })}
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

export default Explore
