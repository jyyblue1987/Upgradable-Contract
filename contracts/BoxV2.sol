// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract BoxV2 {
    uint256 public value;

    function inc() external {
        value += 2;
    }
}
