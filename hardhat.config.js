require('dotenv').config()
require('@nomiclabs/hardhat-waffle')

const privateKey = process.env.WALLET_PRIVATE_KEY
const projectId = process.env.INFURA_PROJECT_ID

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
}
