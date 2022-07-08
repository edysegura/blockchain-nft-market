import Nullstack from 'nullstack'
import Admin from './Admin/Admin'
import Explore from './pages/Explore'
import Home from './pages/Home'
import TAPs from './pages/TAPs'
import WTF from './pages/WTF'

import './application.scss'
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

  render({ walletAddress }) {
    return (
      <>
        <Head />
        <Home route="/" />
        <WTF route="/wtf" />
        <Explore route="/explore" />
        <TAPs route="/taps" />
        {walletAddress && <Admin route="/admin/*" />}
      </>
    )
  }
}

export default Application
