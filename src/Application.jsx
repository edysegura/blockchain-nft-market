import Nullstack from 'nullstack'
import CreateNFT from './CreateNFT'
import Dashboard from './Dashboard'
import Home from './Home'
import MyNFTs from './MyNFTs'
import Nav from './Nav'
import ResellNFT from './ResellNFT'
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
      <div class="bg-black w-screen h-screen">
        <div class="bg-black w-11/12 max-w-[1200px] m-auto h-screen text-white">
          <Head />
          <Nav>
            <Home route="/" />
            <CreateNFT route="/create-nft" />
            <MyNFTs route="/my-nfts" />
            <Dashboard route="/dashboard" />
            <ResellNFT route="/resell-nft" />
          </Nav>
        </div>
      </div>
    )
  }
}

export default Application
