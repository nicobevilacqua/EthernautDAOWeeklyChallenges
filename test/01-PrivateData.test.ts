import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

describe('PrivateData', () => {
  let target: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  before(async () => {
    [attacker, deployer] = await ethers.getSigners();

    target = await (
      await ethers.getContractFactory('PrivateData', deployer)
    ).deploy(0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347);

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
