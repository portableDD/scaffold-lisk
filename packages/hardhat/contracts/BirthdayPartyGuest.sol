// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract BirthdayPartyGuest{
    struct Entry {
        address signer;
        string name;
        string message;
        uint256 timestamp;
    }

    Entry[] public entries;

    event NewEntry(address indexed signer, string name, string message, uint256 timestamp);

    // Add a new brithday Guest entry
    function addGuest(string memory _name, string memory _message) public {
        entries.push(Entry(msg.sender, _name, _message, block.timestamp));
        emit NewEntry(msg.sender, _name, _message, block.timestamp);
    }

    // Get all entries
    function getAllGuests() public view returns (Entry[] memory) {
        return entries;
    }

    // Get number of entries
    function getEntryCount() public view returns (uint256) {
        return entries.length;
    }
}