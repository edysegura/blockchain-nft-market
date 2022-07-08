import Nullstack from 'nullstack'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import Application from './src/Application'
import { marketplaceAddress } from './config'
import NFTMarketplace from './artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'

const context = Nullstack.start(Application)

async function fetchJson({ uri }) {
  const response = await fetch(uri)
  const data = await response.json()
  return data
}

context.start = async function start() {
  const { settings } = context
  context.ipfsClient = ipfsHttpClient(settings.ipfsClient)
  context.Web3Modal = Web3Modal
  context._ethers = ethers
  context.marketplaceAddress = marketplaceAddress
  context.NFTMarketplace = NFTMarketplace
  context.fetchJson = fetchJson
  context.walletAddress = window.localStorage.getItem('walletAddress') ?? null
}

export default context
