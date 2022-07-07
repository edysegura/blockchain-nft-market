import Nullstack from 'nullstack'
import MagnifierIcon from '../icons/magnifier'
import TapIcon from '../icons/tap'
import LandingPageLayout from '../layout/landingPage'
import NftGrid from '../layout/nftGrid'
import SimpleTitle from '../layout/simpleTitle'
import Title from '../layout/title'

class Explore extends Nullstack {
  nftItems = []
  loading = true
  filterValue = ''

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

  filterNFTs() {
    console.log(this.filterValue)
    this.filteredNFTsItems = this.nftItems.filter((nft) => {
      return `${nft.name.toLowerCase()} ${nft.description.toLocaleLowerCase()}`.includes(
        this.filterValue.toLocaleLowerCase(),
      )
    })
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
      <div class="mb-20 p-4 text-center">
        <SimpleTitle>Explore the starting children</SimpleTitle>
        <div class="relative m-auto w-[600px] mt-10">
          <span class="absolute top-2 left-14 z-10">
            <MagnifierIcon />
          </span>
          <input
            type="text"
            autofocus
            class="w-[500px] border-b-2 border-white bg-black py-1 pl-9 text-2xl outline-none"
            bind={this.filterValue}
            oninput={this.filterNFTs}
          />
        </div>
      </div>
    )
  }

  renderContent() {
    const nftItems = this.filterValue ? this.filteredNFTsItems : this.nftItems
    if (this.loading === false && !this.nftItems.length) return <NoContent />
    return (
      <section class="mb-32">
        <div>
          <SearchField />
          <NftGrid nfts={nftItems} />
        </div>
      </section>
    )
  }

  render() {
    return (
      <LandingPageLayout>
        <Content />
      </LandingPageLayout>
    )
  }
}

export default Explore
