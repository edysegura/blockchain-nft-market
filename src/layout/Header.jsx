import Nullstack from 'nullstack'
import AccountIcon from '../icons/account'
import NftSlogan from './nftSlogan'

class Header extends Nullstack {
  currentRouterStyle({ router, linkHref }) {
    if (router.url === linkHref) {
      return 'border-b-2 border-mustard'
    }
  }

  renderMyAccount() {
    return (
      <a href="#" class="flex items-center justify-end pt-3">
        <AccountIcon /> <span class="ml-2"><a href="/admin">My Account</a></span>
      </a>
    )
  }

  render() {
    return (
      <div>
        <MyAccount />
        <div class="flex items-center justify-between p-6">
          <NftSlogan />
          <nav>
            <div class="mt-4 flex justify-end text-white">
              <a
                class={`mr-6 ${this.currentRouterStyle({ linkHref: '/' })}`}
                href="/"
              >
                Home
              </a>
              <a class={`mr-6 ${this.currentRouterStyle({ linkHref: '/wtf' })}`} href="/wtf">
                WTF?
              </a>
              <a class={`mr-6 ${this.currentRouterStyle({ linkHref: '/explore' })}`} href="/explore">
                Explore
              </a>
              <a class={`mr-6 ${this.currentRouterStyle({ linkHref: '/taps' })}`} href="/taps">
                TAPs
              </a>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
