import Nullstack from 'nullstack'
import CreateNFT from './CreateNFT'
import Home from './Home'
import MyNFTs from './MyNFTs'
import Nav from './Nav'
import './styles.css'

class Application extends Nullstack {
  prepare({ page, project }) {
    page.title = `${project.name}`
    page.description = `${project.name} was made with Nullstack`
    page.locale = 'en-US'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Nav>
          <Home route="/" />
          <CreateNFT route="/create-nft" />
          <MyNFTs route="/my-nfts" />
        </Nav>
      </main>
    )
  }
}

export default Application
