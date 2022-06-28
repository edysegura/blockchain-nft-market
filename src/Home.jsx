import Nullstack from 'nullstack';

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Welcome to Nullstack!`;
    page.description = `${project.name} was made with Nullstack`;
  }

  render({ project }) {
    return (
      <section>
       <h1>Onboard NFT #1</h1>
      </section>
    )
  }

}

export default Home;