export default function Footer() {
  return (
    <footer class="mt-5 pt-8 pb-8 border-t border-white">
      <div class="w-11/12 flex justify-between">
        <div class="flex flex-col">
          <div class="uppercase text-white">
            <div class="text-center">
              <span class="block font-bold text-sm">NFTS For</span>
              <span class="block font-extralight text-2xl">Starving</span>
              <span class="block font-extralight text-2xl">Children</span>
            </div>
          </div>
          <p class="w-56 mt-10 ml-10 text-white">
            They may not have food, but you can help an NFT-less child with this
            buy one, give one opportunity. Every child deserves an NFT.
          </p>
        </div>
        <nav>
          <h2 class="font-bold text-lg mb-5">Marketplace</h2>
          <ul>
            <li class="mb-3">WFT?</li>
            <li class="mb-3">Explore</li>
            <li class="mb-3">TAPs</li>
            <li><a class="text-black hover:text-mustard" href="/create-nft">Create NFT</a></li>
            <li><a class="text-black hover:text-mustard" href="/my-nfts">My NFT</a></li>
            <li><a class="text-black hover:text-mustard" href="/dashboard">Dashboard</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
