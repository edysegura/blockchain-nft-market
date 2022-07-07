import NftCard from './nftCard'

export default function NftGrid({ nfts }) {
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {nfts.length > 0 && nfts.map((nft) => (
        <NftCard nft={nft} />
      ))}
    </div>
  )
}
