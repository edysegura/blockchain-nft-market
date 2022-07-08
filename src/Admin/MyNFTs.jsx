import Nullstack from 'nullstack'
import NftGrid from '../layout/nftGrid'
import SimpleTitle from '../layout/simpleTitle'

class MyNFTs extends Nullstack {
  nfts = []
  loading = true

  async hydrate() {
    this.loading = true
    this.nfts = await this.loadNFTs()
    this.loading = false
  }

  async loadNFTs({
    _ethers: ethers,
    marketplaceAddress,
    fetchJson,
    NFTMarketplace,
    Web3Modal,
  }) {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer,
    )
    // const rawNFTs = await marketplaceContract.fetchMyNFTs()
    const rawNFTs = await marketplaceContract.fetchItemsListed()

    const nfts = await Promise.all(
      rawNFTs.map(async (nft) => {
        const tokenUri = await marketplaceContract.tokenURI(nft.tokenId)
        const meta = await fetchJson({ uri: tokenUri })
        const price = ethers.utils.formatUnits(nft.price.toString(), 'ether')
        const item = {
          price,
          tokenId: nft.tokenId.toNumber(),
          seller: nft.seller,
          owner: nft.owner,
          image: meta.image,
          name: meta.name,
          description: meta.description,
        }
        return item
      }),
    )
    return nfts
  }

  listNFT({ router, nft }) {
    router.url = `/resell-nft?id=${nft.tokenId}&tokenUri=${nft.tokenUri}`
  }

  render() {
    return (
      <section class="pl-10 pt-14">
        <div>
          <SimpleTitle>NFTs</SimpleTitle>
          <p class="text-gray-300">Manage all your NFTs</p>
        </div>
        <div class="mt-20">
          {this.nfts?.length > 0 && <NftGrid nfts={this.nfts} />}
          {this.loading === false && !this.nfts.length && (
            <p class="text-3xl">No NFTs owned</p>
          )}
        </div>
      </section>
    )
  }
}

export default MyNFTs
