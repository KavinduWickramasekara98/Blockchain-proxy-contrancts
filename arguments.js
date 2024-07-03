require('dotenv').config()
module.exports = {
    value: 150,
    proposers: [process.env.gnosisMultisigAddress], // proposers array
    executors: [process.env.gnosisMultisigAddress],  // executors array
    admin:process.env.adminAddress
};
