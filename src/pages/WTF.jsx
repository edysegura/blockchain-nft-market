import Nullstack from 'nullstack'
import Title from '../layout/title'

class WTF extends Nullstack {
  renderTopContent() {
    return (
      <section>
        <Title
          text="Treat your charity like your investments"
          highlightedText="- Expect ROI"
        />
        <p>
          Bringing attention to effective altruism, and reminding you that not
          all charities are created equal
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

export default WTF
