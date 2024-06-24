const { expect } = require("chai");
const { ethers } = require("hardhat");

let Box;
let box;

describe("Box contract testing V1", function () {
  beforeEach(async function(){
    Box = await ethers.getContractFactory("Box");
    box = await Box.deploy();
  });
  it("retrieve function returns a value previously stored",async function(){
    await box.store(10);
    
    expect((await box.retrieve()).toString()).to.equal('10');
  })
  
});
