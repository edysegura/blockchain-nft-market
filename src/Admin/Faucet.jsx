import Nullstack from 'nullstack'
import FaucetIcon from '../icons/faucet'
import SimpleTitle from '../layout/simpleTitle'
import Title from '../layout/title'

class Faucet extends Nullstack {
  render() {
    return (
      <section class="pl-36 pt-14">
        <div class="flex items-center gap-3">
          <FaucetIcon />
          <SimpleTitle>Faucet</SimpleTitle>
        </div>
      </section>
    )
  }
}

export default Faucet
