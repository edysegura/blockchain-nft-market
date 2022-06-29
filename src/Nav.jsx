import Nullstack from 'nullstack';

class Nav extends Nullstack {

  render({ children }) {
    return (
      <div>
       <nav class="border-b p-6">
        <h1 class="text-4xl font-bold">NFTS for Starving Children</h1>
        <div class="flex mt-4 text-pink-500">
          <a class="mr-6" href="/">Home</a>
          <a class="mr-6" href="/create-item">Sell Digital Asset</a>
        </div>
       </nav>
        <main>
          {children}
        </main>
      </div>
    )
  }
}

export default Nav;