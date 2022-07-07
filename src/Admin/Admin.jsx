import Nullstack from 'nullstack'
import AccountIcon from '../icons/account'
import CollectionIcon from '../icons/collection'
import CubeIcon from '../icons/cube'
import TraitsIcon from '../icons/traits'
import ButtonLink from '../layout/buttonLink'
import NftSlogan from '../layout/nftSlogan'
import CreateNFT from './CreateNFT'
import Dashboard from './Dashboard'
import MyNFTs from './MyNFTs'
import ResellNFT from './ResellNFT'

class Admin extends Nullstack {
  renderLink({ href, children }) {
    return (
      <a
        href={href}
        class="flex items-center gap-3 border-y border-transparent bg-gradient-to-r py-2 pl-16 transition-colors duration-200 hover:border-light-mustard/50 hover:from-light-mustard/30"
      >
        {children}
      </a>
    )
  }

  render() {
    return (
      <main class="flex min-h-screen w-full max-w-7xl 2xl:mx-auto">
        <nav class="h-full min-h-screen w-1/5 bg-black">
          <div class="flex flex-col items-center gap-5">
            <NftSlogan />
            <ButtonLink clazz="w-32" href="/admin/create-nft">
              Create NFT
            </ButtonLink>
          </div>
          <div class="mt-10 flex flex-col">
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
        <section class="w-4/5">
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
