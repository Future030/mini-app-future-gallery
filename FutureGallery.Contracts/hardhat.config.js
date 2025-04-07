require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localTestnet: {
      url: 'http://127.0.0.1:8545',
      chainId: 4201,
      accounts: process.env.PRIVATE_KEY ? [String(process.env.PRIVATE_KEY)] : [],
    },
    luksoTestnet: {
      url: 'https://4201.rpc.thirdweb.com',
      chainId: 4201,
      accounts: process.env.PRIVATE_KEY ? [String(process.env.PRIVATE_KEY)] : [],
    },
    luksoMainnet: {
      url: 'https://42.rpc.thirdweb.com',
      chainId: 42,
      accounts: process.env.PRIVATE_KEY ? [String(process.env.PRIVATE_KEY)] : [],
    },
  }
};