const {expect}=require('chai')
const {ethers,upgrades}=require('hardhat')
let Box;
let box;

describe("test box proxy functionality",function(){
    beforeEach(async function(){
        Box = await ethers.getContractFactory("Box");
        //proxy contract create function and value
        box  = await upgrades.deployProxy(Box,[10],{initializer:"store"})
    });

    //test case
    it("retrive returns a value previosly initialized",async function(){
        expect((await box.retrieve()).toString()).to.equal('10');
    })
})