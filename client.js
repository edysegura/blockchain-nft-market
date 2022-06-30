import Nullstack from 'nullstack'
import Application from './src/Application'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import Web3Modal from 'web3modal'

const context = Nullstack.start(Application)

context.start = async function start() {
  const { settings } = context
  context.ipfsClient = ipfsHttpClient(settings.ipfsClient)
  context.Web3Modal = Web3Modal
}

export default context
