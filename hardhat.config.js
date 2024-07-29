require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers")
require("@openzeppelin/hardhat-upgrades")
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.20",
  networks:{
    hardhat:{
      chainId:1337
    },
    'base-sepolia':{
      url:process.env.URL,
      accounts:[process.env.ACCOUNT],
      gas:1000000,
    }
  },
// Hardhat expects etherscan here, even if you're using Blockscout.
  etherscan: {
   apiKey: {
    "base-sepolia": process.env.BLOCKSCOUT_KEY
   },
   customChains: [
     {
       network: "base-sepolia",
       chainId: 84532,
       urls: {
        apiURL: "https://base-sepolia.blockscout.com/api",
        browserURL: "https://base-sepolia.blockscout.com"
       }
     }
   ]
 }
};
