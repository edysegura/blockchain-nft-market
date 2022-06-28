import Nullstack from 'nullstack';
import Home from './Home';
import Nav from './Nav';
import './styles.css';

class Application extends Nullstack {

  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Nav>
          <Home route="/" />
        </Nav>
      </main>
    )
  }

}

export default Application;