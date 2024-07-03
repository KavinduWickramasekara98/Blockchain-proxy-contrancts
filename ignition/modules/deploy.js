async function main(){
    const Box = await ethers.getContractFactory("Box");
    console.log("Box contract is deployed");
    const box = await upgrades.deployProxy(Box,[10],{initializer:"store"})
    console.log("proxy contract deployed address : "+await box.getAddress());
}

main()
.then(()=>process.exit(0))
.catch((e)=>{
    console.error(`error happend ${e}`);
    process.exit(1);})