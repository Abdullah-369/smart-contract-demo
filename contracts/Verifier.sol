// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title Simple “proof-like” verifier demo (NOT real ZK)
contract Verifier {
    bytes32 public storedHash;

    function setHash(bytes32 _hash) external {
      storedHash = _hash;
    }

    function verify(bytes calldata secret) external view returns (bool) {
      return keccak256(secret) == storedHash;
    }
}
