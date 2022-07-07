import Nullstack from 'nullstack'
import Faucet from '../icons/faucet'
import Title from '../layout/title'

class Home extends Nullstack {
  render() {
    return (
      <section>
        <div>
          <Faucet />
          <Title text="Faucet" />
        </div>
      </section>
    )
  }
}

export default Home
