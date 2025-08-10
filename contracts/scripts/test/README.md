# smart-contract-demo

Tiny Hardhat project showing a simple “verification” pattern (keccak preimage).
**Not real ZK**, but illustrates how an on-chain contract can verify an off-chain computed result.

## Quick start
1) `npm install`
2) `npx hardhat test`
3) `npx hardhat compile`
4) `npx hardhat run scripts/deploy.js --network hardhat`

Next step: swap this verifier with a real ZK proof verifier.
