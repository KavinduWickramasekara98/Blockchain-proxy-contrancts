require('dotenv').config()
module.exports = [
  150,
  [process.env.gnosisMultisigAddress], // proposers array
  [process.env.gnosisMultisigAddress], // executors array
  process.env.adminAddress,
];
