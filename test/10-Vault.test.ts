import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

describe('Vault', () => {
  let implementation: Contract;
  let target: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  before(async () => {
    [attacker, deployer] = await ethers.getSigners();

    implementation = await (await ethers.getContractFactory('Vesting', deployer)).deploy();

    await implementation.deployed();

    target = await (
      await ethers.getContractFactory('Vault', deployer)
    ).deploy(implementation.address);

    target = target.connect(attacker);

    await (
      await deployer.sendTransaction({
        to: target.address,
        value: ethers.utils.parseEther('0.2'),
      })
    ).wait();
  });

  it('attack', async () => {
    /**
     * YOUR CODE HERE
     */

    expect((await ethers.provider.getBalance(target.address)).eq(0)).to.be.true;
  });
});
