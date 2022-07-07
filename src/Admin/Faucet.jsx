import Nullstack from 'nullstack'
import FaucetIcon from '../icons/faucet'
import TapIcon from '../icons/tap'
import ButtonLink from '../layout/buttonLink'
import Label from '../layout/label'
import SimpleTitle from '../layout/simpleTitle'
import TextControl from '../layout/textControl'
import Title from '../layout/title'

class Faucet extends Nullstack {
  render() {
    return (
      <section class="pl-36 pt-14">
        <div class="mb-10 flex items-center gap-3">
          <FaucetIcon />
          <SimpleTitle>Faucet</SimpleTitle>
        </div>
        <div class="flex w-1/2 flex-col gap-10">
          <div>
            <TextControl
              label="Address"
              placeholder="Enter your Wallet address (0x...) or ENS Domain"
            />
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col">
              <Label>Quantity</Label>
              <span class="text-gray-400">
                Put the quantity of TAPs you'll need
              </span>
            </div>
            <div>
              <TapIcon />
            </div>
          </div>
          <div>
            <ButtonLink>Mint &amp; Send</ButtonLink>
          </div>
        </div>
      </section>
    )
  }
}

export default Faucet
