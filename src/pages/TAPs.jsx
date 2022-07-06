import Nullstack from 'nullstack'
import TapIcon from '../icons/tap'
import WalletIcon from '../icons/wallet'
import GreatPowerFooter from '../layout/greatPowerFooter'
import Title from '../layout/title'

class TAPs extends Nullstack {
  renderTopContent() {
    return (
      <section class="m-auto mb-48 flex w-80 flex-col justify-center text-center">
        <h2 class="text-2xl font-extrabold shadow-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
          Meet our token
        </h2>
        <p class="mb-6 mt-3 bg-mustard p-2 text-2xl font-extrabold text-black shadow-black drop-shadow-none">
          Toughts and Prayers
        </p>
        <p class="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button class="m-auto w-60 bg-mustard p-3 font-extrabold text-black">
          <div class="flex items-center justify-center">
            <WalletIcon /> <span class="ml-3">Connect your wallet</span>
          </div>
        </button>
      </section>
    )
  }

  renderBuyTap() {
    return (
      <section>
        <div class="m-auto w-[500px] text-center">
          <Title text="Buy TAPs" />
          <div class="flex flex-col gap-3 border border-gray-800 bg-black p-10">
            <div class="relative">
              <input
                class="w-full border border-white bg-black p-2 pr-20 text-2xl font-extrabold text-white"
                value="0.00"
              />
              <span class="absolute right-4 top-4 flex items-center justify-center gap-2 text-sm">
                <TapIcon /> TAPs
              </span>
            </div>
            <button class="m-auto w-60 bg-mustard p-3 font-extrabold text-black">
              <div class="flex items-center justify-center">
                <WalletIcon /> <span class="ml-3">Connect your wallet</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    )
  }

  render() {
    return (
      <>
        <TopContent />
        <BuyTap />
        <GreatPowerFooter />
      </>
    )
  }
}

export default TAPs
