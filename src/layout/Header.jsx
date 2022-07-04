import Nullstack from 'nullstack'
import { AccountIcon } from '../icons/account'

class Header extends Nullstack {
  renderMyAccount() {
    return (
      <a href='#' class="flex justify-end items-center pt-3">
        <AccountIcon /> <span class="ml-2">My Account</span>
      </a>
    )
  }

  render() {
    return (
      <div>
        <MyAccount />
        <div class="flex items-center justify-between p-6">
          <h1 class="w-[175px] pt-5 pl-5 text-sm text-center uppercase text-white">
            <div class="font-bold">NFTS For</div>
            <div class="font-extralight text-2xl">Starving<br />Children</div>
          </h1>
          <nav>
            <div class="flex mt-4 text-white justify-end">
              <a class="mr-6 border-b-2 border-mustard" href="/">
                Home
              </a>
              <a class="mr-6" href="#">
                WFT?
              </a>
              <a class="mr-6" href="/explore">
                Explore
              </a>
              <a class="mr-6" href="#">
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
