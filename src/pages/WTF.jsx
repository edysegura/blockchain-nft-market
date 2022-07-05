import Nullstack from 'nullstack'
import WalletIcon from '../icons/wallet'
import GreatPowerFooter from '../layout/greatPowerFooter'
import Title from '../layout/title'

class WTF extends Nullstack {
  renderTopContent() {
    return (
      <section class="m-auto flex w-80 flex-col justify-center text-center">
        <Title
          text="Treat your charity like your investments"
          highlightedText="- Expect ROI"
        />
        <p class="mb-10">
          Bringing attention to effective altruism, and reminding you that not
          all charities are created equal
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

export default WTF
