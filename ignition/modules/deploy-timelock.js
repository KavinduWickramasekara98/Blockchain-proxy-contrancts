const argumentsArray = require("../../arguments.js")
async function main(){
    let delayTime = argumentsArray[0]
    let proposerArray = argumentsArray[1]
    let executorsArray = argumentsArray[2]
    let admin = argumentsArray[3]
    console.log("admin : "+admin)
    const [deployer] = await ethers.getSigners();

    const balance = await deployer.provider.getBalance(deployer.getAddress())
    console.log("Balance: " + balance);
    const Token = await ethers.getContractFactory("TimelockController");
    const token = await Token.deploy(delayTime,proposerArray,executorsArray,admin);

}

main()
.then(()=>process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
})