import Nullstack from 'nullstack'
import WalletIcon from '../icons/wallet'
import GreatPowerFooter from '../layout/greatPowerFooter'

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

  render() {
    return (
      <>
        <TopContent />
        <GreatPowerFooter />
      </>
    )
  }
}

export default TAPs
