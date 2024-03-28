pragma solidity ^0.8.4;

contract Box {
    uint256 public value;

    function initialize(uint256 _value) external {
        value = _value;
    }

    function inc() external {
        value += 1;
    }
}