import Nullstack from 'nullstack'
import Cube from './layout/cube'

class Home extends Nullstack {
  render() {
    return (
      <div class="flex justify-between">
        <div class="w-96 mt-32 ml-14">
          <h2 class="font-extrabold text-xl leading-relaxed">
            <span class="drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] shadow-white">Your kindness can make the world of a difference for a{' '}</span>
            <span class="p-2 bg-mustard text-black drop-shadow-none shadow-black">
              child's crypto wallet.
            </span>
          </h2>
          <p class="mt-4">
            They may not have food, but you can help an NFT-less child with this
            buy one, give one opportunity. Every child deserves an NFT.
          </p>
          <div class="flex gap-2 mt-4 font-extrabold">
            <a href="/explore" class="w-32 p-2 bg-mustard text-black text-center">
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
}

export default Home
