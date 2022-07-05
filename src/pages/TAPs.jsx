import Nullstack from 'nullstack'
import Title from '../layout/title'

class TAPs extends Nullstack {
  renderTopContent() {
    return (
      <section>
        <Title text="Meet our token" highlightedText="Toughts and Prayers" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
    )
  }

  render() {
    return (
      <>
        <TopContent />
      </>
    )
  }
}

export default TAPs
