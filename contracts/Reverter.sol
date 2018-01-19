pragma solidity ^0.4.11;

contract Reverter  {
  uint public foo;
  function crapout() public {
    require(false);
    foo++;
  }
}
