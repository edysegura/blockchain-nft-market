import Nullstack from 'nullstack'

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
    const rawNFTs = await marketplaceContract.fetchMyNFTs()

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
          tokenUri,
        }
        return item
      }),
    )
    return nfts
  }

  render() {
    if (this.loading === false && !this.nfts.length)
      return <h1 class="py-10 px-20 text-3xl">No NFTs owned</h1>
    return (
      <div class="flex justify-center">
        <div class="p-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {this.nfts.map((nft) => (
              <div class="border shadow rounded-xl overflow-hidden">
                <img src={nft.image} class="rounded" />
                <div class="p-4 bg-black">
                  <p class="text-2xl font-bold text-white">
                    Price - {nft.price} ETH
                  </p>
                  <button
                    class="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                    onclick={() => console.log({ nft })}
                  >
                    List
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MyNFTs
