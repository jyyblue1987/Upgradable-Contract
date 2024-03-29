// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Box is Initializable {
    uint256 public value;

    function initialize(uint256 _value) external initializer {
        value = _value;
    }

    function inc() external {
        value += 4;
    }
}
