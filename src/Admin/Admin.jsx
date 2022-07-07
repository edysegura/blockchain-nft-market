import Nullstack from 'nullstack'
import AccountIcon from '../icons/account'
import CollectionIcon from '../icons/collection'
import CubeIcon from '../icons/cube'
import FaucetIcon from '../icons/faucet'
import TraitsIcon from '../icons/traits'
import ButtonLink from '../layout/buttonLink'
import NftSlogan from '../layout/nftSlogan'
import CreateNFT from './CreateNFT'
import Dashboard from './Dashboard'
import Faucet from './Faucet'
import MyNFTs from './MyNFTs'
import ResellNFT from './ResellNFT'

class Admin extends Nullstack {
  currentRouterStyle({ router, href }) {
    if (router.url === href) {
      return 'border-y bg-gradient-to-r border-light-mustard/50 from-light-mustard/30'
    }
    return 'border-y border-transparent'
  }

  renderLink({ href, children }) {
    return (
      <a
        href={href}
        class={`flex items-center gap-3 py-2 pl-16 ${this.currentRouterStyle({
          href,
        })}`}
      >
        {children}
      </a>
    )
  }

  renderNav() {
    return (
      <nav class="h-full min-h-screen w-1/5 bg-black">
        <div class="flex flex-col items-center gap-5">
          <NftSlogan />
          <ButtonLink clazz="w-32" href="/admin/create-nft">
            Create NFT
          </ButtonLink>
        </div>
        <div class="mt-10 flex flex-col">
          <Link href="/admin">
            <FaucetIcon color="#FFF" width="18" />
            Faucet
          </Link>
          <Link href="/admin/my-nfts">
            <CubeIcon />
            NFTs
          </Link>
          <Link href="#">
            <CollectionIcon />
            Collections
          </Link>
          <Link href="#">
            <TraitsIcon />
            Traits
          </Link>
          <Link href="#">
            <AccountIcon />
            Account
          </Link>
        </div>
      </nav>
    )
  }

  render() {
    return (
      <main class="flex min-h-screen w-full max-w-7xl 2xl:mx-auto">
        <Nav />
        <section class="w-4/5">
          <Faucet route="/admin" />
          <CreateNFT route="/admin/create-nft" />
          <MyNFTs route="/admin/my-nfts" />
          <Dashboard route="/admin/dashboard" />
          <ResellNFT route="/admin/resell-nft" />
        </section>
      </main>
    )
  }
}

export default Admin
