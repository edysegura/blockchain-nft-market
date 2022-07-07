import TapIcon from '../icons/tap'

export default function NftCard({ nft }) {
  return (
    <div class="overflow-hidden border bg-black p-2">
      <img src={nft.image} alt={nft.name} draggable="false" />
      <div class="mt-4">
        <p class="text-2xl font-semibold">{nft.name}</p>
        <div class="h-6 overflow-hidden">
          <p class="text-white">{nft.description}</p>
        </div>
      </div>
      <div class="mt-4">
        <span>Price</span>
        <div class="flex items-end justify-between">
          <p class="flex text-2xl font-bold text-white">
            <span class="mt-2 mr-2">
              <TapIcon />
            </span>
            {nft.price}
          </p>
          <p class="text-mustard"> {nft.tokenId} Edition Minted</p>
        </div>
        {/* <button
              class="mt-4 w-full rounded bg-mustard py-2 px-12 font-bold text-black"
              onclick={() => this.buyNFT({ nft })}
            >
              Buy
            </button> */}
      </div>
    </div>
  )
}
