import Nullstack from 'nullstack'
import AccountIcon from '../icons/account'
import TapIcon from '../icons/tap'
import NftSlogan from './nftSlogan'

class Header extends Nullstack {
  currentRouterStyle({ router, linkHref }) {
    if (router.url === linkHref) {
      return 'border-b-2 border-mustard'
    }
  }

  renderMyAccount() {
    return (
      <div class="flex justify-end gap-4 pt-3">
        <div class="flex items-center gap-2">
          <TapIcon />
          <div>
            <div class="">
              <span class="font-extrabold">1.345</span> <span>TAP</span>
            </div>
            <span class="text-xs text-gray-300">0x5a773...6f57c0</span>
          </div>
        </div>
        <div class="flex items-center">
          <AccountIcon />{' '}
          <span class="ml-2">
            <a href="/admin">My Account</a>
          </span>
        </div>
      </div>
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
              <a
                class={`mr-6 ${this.currentRouterStyle({ linkHref: '/wtf' })}`}
                href="/wtf"
              >
                WTF?
              </a>
              <a
                class={`mr-6 ${this.currentRouterStyle({
                  linkHref: '/explore',
                })}`}
                href="/explore"
              >
                Explore
              </a>
              <a
                class={`mr-6 ${this.currentRouterStyle({ linkHref: '/taps' })}`}
                href="/taps"
              >
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
