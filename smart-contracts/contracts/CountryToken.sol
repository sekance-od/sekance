// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol';

contract CountryToken is ERC20Capped {
  address payable public owner;
  uint256 public tokenValue;

  constructor(uint256 cap) ERC20('CountryToken', 'COT') ERC20Capped(cap * (10 ** decimals())) {
    owner = payable(msg.sender);
    _mint(owner, 100000000 * (10 ** decimals()));
    tokenValue = 1;
  }

  function setTokenValue(uint256 value) public onlyOwner {
    tokenValue = value;
  }

  function getTokenDetails() public view returns (string memory, string memory, uint256, uint256, uint256) {
    return (name(), symbol(), totalSupply(), cap(), tokenValue);
  }

  function destroy() public onlyOwner {
    selfdestruct(owner);
  }

  modifier onlyOwner() {
    require(msg.sender == owner, 'Only the owner can call this function');
    _;
  }
}
