import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { run, ethers } from 'hardhat';

describe('Staking', () => {
  let token: Contract;
  let contract: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  before(async () => {
    [attacker, deployer] = await ethers.getSigners();

    token = await (await ethers.getContractFactory('StakingToken', deployer)).deploy();
    await token.deployed();

    contract = await (await ethers.getContractFactory('Staking', deployer)).deploy(token.address);
    await contract.deployed();
  });

  it('Attack', async () => {
    expect(true).to.equal(false);
  });
});
