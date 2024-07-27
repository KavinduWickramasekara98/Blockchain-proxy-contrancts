const { ethers, upgrades, } = require("hardhat");
require('dotenv').config();
async function main() {

  try {

    // Transfer ownership
    //ox0000 would not work
    await upgrades.admin.transferProxyAdminOwnership(
      process.env.PROXY_IMPLEMENT_ADDRESS,
      process.env.PROXY_NEW_OWNER
    );
    
    
  } catch (error) {
    console.error("Error transferring ownership of Proxy Admin:", error);
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
