pragma solidity ^0.5.0;

contract Token {
    mapping (address => uint256) public balanceOf;

    constructor (uint256 initialSupply) public {
        balanceOf[msg.sender] = initialSupply;
    }

    function transfer( address _to, uint256 _value) public {
        require(balanceOf[msg.sender] >= _value, "No enough money");
        require(balanceOf[_to] + _value >= balanceOf[_to], "No enough money");
        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
    }
}