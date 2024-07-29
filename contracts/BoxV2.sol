// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

//Upgrade : add increment function

contract BoxV2 {
   uint256 private value;

   //emitted when the stored value changes
   event ValueChanged(uint256 newValue);

   function store(uint256 newValue) public{
    value = newValue;
    emit ValueChanged(value);
   }

   //read last stored value
   function retrieve() public view returns(uint256){
    return value;
   }

   function increment() public {
    value =value+1;
    emit ValueChanged(value);
   }
}
