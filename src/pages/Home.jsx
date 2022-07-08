import Nullstack from 'nullstack'
import ButtonLink from '../layout/buttonLink'
import Cube from '../layout/cube'
import GreatPowerFooter from '../layout/greatPowerFooter'
import LandingPageLayout from '../layout/landingPage'
import NftCard from '../layout/nftCard'
import NftGrid from '../layout/nftGrid'
import Title from '../layout/title'

class Home extends Nullstack {
  nfts = [
    {
      tokenId: 1,
      image:
        'https://ipfs.infura.io/ipfs/QmXnjJQNBnCqKYRC6tswBCTCL3scZQpdg7iNWvvNcJfipa',
      name: 'Side A',
      description: 'Side A text description',
      price: '0.49',
    },
    {
      tokenId: 2,
      image:
        'https://ipfs.infura.io/ipfs/QmXnjJQNBnCqKYRC6tswBCTCL3scZQpdg7iNWvvNcJfipa',
      name: 'Side B',
      description: 'Side B text description',
      price: '0.49',
    },
  ]

  renderTopContent() {
    return (
      <div class="flex justify-between">
        <div class="mt-32 ml-14 w-96">
          <Title
            text="Your kindness can make the world of a difference for a"
            highlightedText="child's crypto wallet"
          />
          <p class="mt-4">
            They may not have food, but you can help an NFT-less child with this
            buy one, give one opportunity. Every child deserves an NFT.
          </p>
          <div class="mt-4 flex gap-2 font-extrabold">
            <ButtonLink clazz="w-32" href="/explore">
              Explore
            </ButtonLink>
            <ButtonLink
              href="/taps"
              clazz="w-32 border border-rose bg-transparent text-rose"
            >
              Buy TAPs
            </ButtonLink>
          </div>
        </div>
        <div>
          <div class="relative scale-75">
            <img
              class="absolute top-[2px] left-[1px] border-2 border-white"
              src="/girl-home.png"
              alt="girl"
            />
            <Cube />
          </div>
        </div>
      </div>
    )
  }

  renderMiddleContent() {
    return (
      <section class="my-32 text-center">
        <Title
          text="Don't let these weary children lose their"
          highlightedText="last shreds of hope"
        />
        <div class="mt-10 flex justify-between">
          <div class="flex w-72 flex-col items-center">
            <img src="/unimaginable-home.png" width={200} alt="" />
            <h3 class="mb-3 font-extrabold">Unimaginable poverty</h3>
            <p>
              There are children raised in unimaginable poverty. Not only are
              they deprived of clean water, nutritious food, reliable
              electricity and educational opportunities... but they also lack
              NFTs.
            </p>
          </div>
          <div class="flex w-72 flex-col items-center">
            <img src="/theyneedyou-home.png" width={'200'} alt="" />
            <h3 class="mb-3 font-extrabold">They need you</h3>
            <p>
              Please offer your support. Even if a warlord steals their family’s
              smartphone, you will have provided a “token” of non-fungible
              support.
            </p>
          </div>
          <div class="flex w-72 flex-col items-center">
            <img src="/bottleofhope-home.png" width={'200'} alt="" />
            <h3 class="mb-3 font-extrabold">A bottle of hope</h3>
            <p>
              Every dehydrated child can receive an NFT of a water bottle today,
              if only you can find it in your heart and crypto-wallet to give.
            </p>
          </div>
        </div>
      </section>
    )
  }

  renderSecondMiddleContent() {
    return (
      <section class="my-32 flex justify-between gap-5">
        <div class="flex w-1/2 flex-col justify-center gap-4 pl-40">
          <Title
            text="Buy a NFT of a dehydrated child and automatically donate a NFT of a water bottle"
            highlightedText="NFT of a water bottle"
          />
          <p class="text-gray-300">
            Treat your charity like your investments. Expect ROI.
          </p>
        </div>
        <div class="flex w-1/2 justify-center gap-4">
          <NftCard nft={this.nfts[0]} />
          <NftCard nft={this.nfts[1]} />
        </div>
      </section>
    )
  }

  render() {
    return (
      <LandingPageLayout>
        <TopContent />
        <MiddleContent />
        <SecondMiddleContent />
        <GreatPowerFooter />
      </LandingPageLayout>
    )
  }
}

export default Home
