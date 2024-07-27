const { expect } = require("chai");
const { ethers } = require("hardhat");

let BoxV2;
let boxV2;
 
describe("Box contract testing V2", function () {
  beforeEach(async function () {
    BoxV2 = await ethers.getContractFactory("BoxV2");
    boxV2 = await BoxV2.deploy();
    await boxV2.waitForDeployment();

    //console.log("RoboPunksNFT deployed to:", roboPunksNFT.address); changed to
    //console.log("RoboPunksNFT deployed to:",await roboPunksNFT.getAddress());
  });

  it("retrieve function returns a value previously stored", async function () {
    await boxV2.store(10);
    expect((await boxV2.retrieve()).toString()).to.equal("10");
  });

   it("retrieve increment value of previously stored ", async function () {
    await boxV2.store(10);
     await boxV2.increment();
     expect((await boxV2.retrieve()).toString()).to.equal("11");
   });

});
