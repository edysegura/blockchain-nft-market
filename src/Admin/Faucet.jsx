import Nullstack from 'nullstack'
import FaucetIcon from '../icons/faucet'
import Title from '../layout/title'

class Faucet extends Nullstack {
  render() {
    return (
      <section>
        <div>
          <FaucetIcon />
          <Title text="Faucet" />
        </div>
      </section>
    )
  }
}

export default Faucet
