import Nullstack from 'nullstack'
import { ethers } from 'ethers'
import { marketplaceAddress } from '../config'
import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

class Home extends Nullstack {
  _Web3Modal = null
  nftItems = []

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
    console.log(Web3Modal)
    return Web3Modal
  }

  async fetchData({ uri }) {
    const response = await fetch(uri)
    const data = await response.json()
    return data
  }

  async loadNFTs() {
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
    return items
  }

  render() {
    return (
      <section>
        <h1 class="text-purple-500">Onboard NFT #1</h1>
      </section>
    )
  }
}

export default Home
