const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Verifier", function () {
  it("stores a hash and verifies secret", async function () {
    const Verifier = await ethers.getContractFactory("Verifier");
    const verifier = await Verifier.deploy();
    await verifier.deployed();

    const secret = ethers.utils.toUtf8Bytes("hello");
    const hash = ethers.utils.keccak256(secret);

    await verifier.setHash(hash);
    expect(await verifier.verify(secret)).to.equal(true);

    const wrong = ethers.utils.toUtf8Bytes("nope");
    expect(await verifier.verify(wrong)).to.equal(false);
  });
});
