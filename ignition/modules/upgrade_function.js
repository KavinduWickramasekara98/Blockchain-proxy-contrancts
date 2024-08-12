require("dotenv").config();
async function main() {
  const proxyAddress = process.env.PROXY_ADDRESS;
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("upgrade .....");

    proxyAddress.upgradeTo(addressOfNewImplementation);

  console.log("BoxV2 at : ", boxV2Address);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(`upgrade file error : ${e}`);
    process.exit(1);
  });
