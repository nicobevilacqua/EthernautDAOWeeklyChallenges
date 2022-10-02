import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

describe('VendingMachine', () => {
  let target: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  before(async () => {
    [attacker, deployer] = await ethers.getSigners();

    target = await (
      await ethers.getContractFactory('VendingMachine', deployer)
    ).deploy({
      value: ethers.utils.parseEther('1'),
    });

    await target.deployed();

    target = target.connect(attacker);
  });

  it('attack', async () => {
    /**
     * YOUR CODE HERE
     */

    expect(await target.owner()).to.equal(attacker.address);
  });
});
