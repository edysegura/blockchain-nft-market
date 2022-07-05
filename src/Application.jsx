import Nullstack from 'nullstack'
import CreateNFT from './Admin/CreateNFT'
import Dashboard from './Dashboard'
import Home from './Home'
import Footer from './layout/Footer'
import MyNFTs from './Admin/MyNFTs'
import Header from './layout/Header'
import ResellNFT from './ResellNFT'
import Explore from './Explore'

import './styles.css'
import './application.scss'

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
      <>
        <div class="bg-black w-11/12 max-w-[1200px] m-auto text-white">
          <Head />
          <Header />
          <main>
            <Home route="/" />
            <Explore route="/explore" />
            <CreateNFT route="/create-nft" />
            <MyNFTs route="/my-nfts" />
            <Dashboard route="/dashboard" />
            <ResellNFT route="/resell-nft" />
          </main>
        </div>
        <Footer />
      </>
    )
  }
}

export default Application
