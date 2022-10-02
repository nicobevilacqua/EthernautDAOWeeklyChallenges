import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

describe('VulnerableNFT', () => {
  let target: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  before(async () => {
    [attacker, deployer] = await ethers.getSigners();

    target = await (await ethers.getContractFactory('VNFT', deployer)).deploy();

    await target.deployed();

    target = target.connect(attacker);
  });

  it('attack', async () => {
    /**
     * YOUR CODE HERE
     */

    expect((await target.mintsPerWallet(attacker.address)).gt(0)).to.be.true;
  });
});
