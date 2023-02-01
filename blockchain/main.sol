// find out what this is
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

// Basic karma system. The 2(3?) ways to change trust
// are up/downvotes and satisfactory transactions for
// goods. 
contract Trust {
    uint constant THRESHOLD = 1000;

    mapping (address => bool) public users;
    int trustCount;

    // transactions should almost always be satisfactory
    function transact(uint payment, bool fulfilled) public {
        if (payment >= THRESHOLD) {
            trustCount += fulfilled ? int(5) : -40;
        } else {
            trustCount += fulfilled ? int(1) : -20;
        }

        // trustCount += payment >= THRESHOLD ?
        //     fulfilled ? int(5) : -40 :
        //     fulfilled ? int(1) : -20;
    }

    // upvotes should be twice as common as downvotes
    function interaction(bool up) public {
        trustCount += up ? int(1) : -2;
    }

    function join() public returns (bool) {
        if (users[msg.sender]) return false;
        users[msg.sender] = true;
        return true;
    }

    constructor() {
        trustCount = 0;
    }
}

// main contract, god knows what for
contract Main {
    int memberCount;

    address payable public receiver;
    address payable public sender;

    struct Order {
        address r;
        address s;
        int am;
    }

    function sendOrder() public {

    }

    constructor(int count) {
        memberCount = count;
    }
}
