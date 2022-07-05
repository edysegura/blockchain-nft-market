export default function GreatPowerFooter() {
  return (
    <section class="h-[425px] bg-[url('/grid.svg')] bg-cover">
      <div class="flex flex-col items-center pt-40">
        <h2 class="mb-5 text-xl font-extrabold leading-relaxed">
          <span class="shadow-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            With{' '}
          </span>
          <span class="bg-mustard p-2 text-black shadow-black drop-shadow-none">
            great power
          </span>
          <span class="shadow-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
            {' '}
            comes non-fungibility
          </span>
        </h2>
        <p class="mb-16">
          What Uncle Ben and Uncle Satoshi mean is that you can use your “power”
          to change the world... by minting a few NFTs.
        </p>
        <a
          href="/explore"
          class="w-96 bg-rose p-2 text-center font-extrabold uppercase text-black"
        >
          Buy a NFT to a Starving Child
        </a>
      </div>
    </section>
  )
}
