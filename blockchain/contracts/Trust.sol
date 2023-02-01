// find out what this is
// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

// Basic karma system. The 2(3?) ways to change trust
// are up/downvotes and satisfactory transactions for
// goods. 
contract Trust {
    uint constant THRESHOLD = 1000;

    mapping (address => int) public trust;

    function changeTrust(address user, int c) internal {
        trust[user] += c;
    }

    // transactions should almost always be satisfactory
    function transaction(address user,
                      uint payment,
                      bool fulfilled) public {
        if (payment >= THRESHOLD) {
            changeTrust(user, fulfilled ? int(5) : -40);
        } else {
            changeTrust(user, fulfilled ? int(1) : -20);
        }        
    }

    // upvotes should be twice as common as downvotes
    function interaction(address user, bool up) public {
        changeTrust(user, up ? int(1) : -2);
    }
}
