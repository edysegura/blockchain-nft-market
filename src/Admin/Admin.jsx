import Nullstack from 'nullstack'
import Title from '../layout/title'
import CreateNFT from './CreateNFT'
import Dashboard from './Dashboard'
import MyNFTs from './MyNFTs'
import ResellNFT from './ResellNFT'

class Admin extends Nullstack {
  render() {
    return (
      <div>
        <Title text="Faucet" />
        <CreateNFT route="/admin/create-nft" />
        <MyNFTs route="/admin/my-nfts" />
        <Dashboard route="/admin/dashboard" />
        <ResellNFT route="/admin/resell-nft" />
      </div>
    )
  }
}

export default Admin
