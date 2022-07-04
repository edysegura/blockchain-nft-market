import Nullstack from 'nullstack'
import Cube from './layout/cube'

class Home extends Nullstack {
  renderTitle({ text, highlightedText }) {
    return (
      <h2 class="font-extrabold text-xl leading-relaxed mb-5">
        <span class="drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] shadow-white">
          {text}{' '}
        </span>
        <span class="p-2 bg-mustard text-black drop-shadow-none shadow-black">
          {highlightedText}
        </span>
      </h2>
    )
  }

  renderTopContent() {
    return (
      <div class="flex justify-between">
        <div class="w-96 mt-32 ml-14">
          <Title
            text="Your kindness can make the world of a difference for a"
            highlightedText="child's crypto wallet"
          />
          <p class="mt-4">
            They may not have food, but you can help an NFT-less child with this
            buy one, give one opportunity. Every child deserves an NFT.
          </p>
          <div class="flex gap-2 mt-4 font-extrabold">
            <a
              href="/explore"
              class="w-32 p-2 bg-mustard text-black text-center"
            >
              Explore
            </a>
            <a
              href="/buy-taps"
              class="w-32 p-2 bg-transparent text-rose text-center border border-rose"
            >
              Buy TAPs
            </a>
          </div>
        </div>
        <div>
          <div class="scale-75">
            <Cube />
          </div>
        </div>
      </div>
    )
  }

  renderMiddleContent() {
    return (
      <section class="text-center my-32">
        <Title
          text="Don't let these weary children lose their"
          highlightedText="last shreds of hope"
        />
        <div class="flex justify-between">
          <div class="w-72 flex flex-col justify-center">
            <img src="/unimaginable-home.png" height="100" alt="" />
            <h3 class="font-extrabold mb-3">Unimaginable poverty</h3>
            <p>
              There are children raised in unimaginable poverty. Not only are
              they deprived of clean water, nutritious food, reliable
              electricity and educational opportunities... but they also lack
              NFTs.
            </p>
          </div>
          <div class="w-72 flex flex-col justify-center">
            <img src="/theyneedyou-home.png" height="100" alt="" />
            <h3 class="font-extrabold mb-3">They need you</h3>
            <p>
              Please offer your support. Even if a warlord steals their family’s
              smartphone, you will have provided a “token” of non-fungible
              support.
            </p>
          </div>
          <div class="w-72 flex flex-col justify-center">
            <img src="/bottleofhope-home.png" height="100" alt="" />
            <h3 class="font-extrabold mb-3">A bottle of hope</h3>
            <p>
            Every dehydrated child can receive an NFT of a water bottle today, if only you can find it in your heart and crypto-wallet to give.
            </p>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (
      <>
        <TopContent />
        <MiddleContent />
      </>
    )
  }
}

export default Home
