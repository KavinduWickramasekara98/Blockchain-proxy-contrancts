

//make owner timelock-controller.So we can change code
//timelock powerd by gnosis safe
async function main(){
    const newOwnerOfTheProxyAdmin = "0xfC7f2b446A5FD984f84D49F85e12F08582B02C1c";

    console.log("Transferring ownership of Proxy Admin ...");
    await upgrades.admin.transferProxyAdminOwnership(newOwnerOfTheProxyAdmin);
    console.log("Transferred ownership of ProxyAdmin to :"+newOwnerOfTheProxyAdmin);
}

main()
.then(()=>process.exit(0))
.catch(error=>{
    console.error(error);
    process.exit(1);
}
)