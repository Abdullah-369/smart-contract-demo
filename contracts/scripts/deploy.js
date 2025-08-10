const { ethers } = require("hardhat");

async function main() {
  const Verifier = await ethers.getContractFactory("Verifier");
  const verifier = await Verifier.deploy();
  await verifier.deployed();
  console.log("Verifier deployed to:", verifier.address);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
