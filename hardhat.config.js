require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers")
require("@openzeppelin/hardhat-upgrades")
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    hardhat:{
      chainId:1337
    },
    // sepolia:{
    'base-sepolia':{
      url:process.env.URL,
      accounts:[process.env.ACCOUNT]
      
    }
  }
};
