const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");
let Box;
let box;

describe("V2 test proxy functionality", function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box");
    BoxV2 = await ethers.getContractFactory("BoxV2");
    //proxy contract create function and value
    box = await upgrades.deployProxy(Box, [10], { initializer: "store" });
await box.waitForDeployment();
const boxAddress = await box.getAddress();
    console.log("box address : " +boxAddress);
    //proxy contract create function and value
    boxV2 = await upgrades.upgradeProxy(boxAddress, BoxV2);
  });

  //test case
 
   it("V2 retrive returns a increment value previosly initialized", async function () {
    await boxV2.increment();
     expect((await boxV2.retrieve()).toString()).to.equal("1");
   });

});
