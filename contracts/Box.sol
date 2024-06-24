// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Box {
   uint256 private value;

   //emitted when the stored value changes
   event ValueChanged(uint256 newValue);

   function store(uint256 newValue) public{
    value = newValue;
    emit ValueChanged(newValue);
   }

   //read last stored value
   function retrieve() public view returns(uint256){
    return value;
   }
}
