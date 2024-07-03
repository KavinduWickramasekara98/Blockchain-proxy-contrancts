const argumentsArray = require("../../arguments.js")
async function main(){
    let delayTime = argumentsArray[0].value
    let proposerArray = argumentsArray[1].proposers
    let executorsArray = argumentsArray[2].executors;
    let admin = argumentsArray[3].admin

    const [deployer] = await ethers.getSigners();
    console.log(
        "Deploying contracts with the account :"+deployer.getAddress()
    );
    console.log("Balance :"+(await deployer.getBalance()).toString());
    const Token = await ethers.getContractFactory("TimelockController");
    const token = await Token.deploy(delayTime,proposerArray,executorsArray,admin);
    console.log("timeLock address : "+token.getAddress())

}

main()
.then(()=>process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
})