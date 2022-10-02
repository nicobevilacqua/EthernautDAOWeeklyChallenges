import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

describe('CarMarket', () => {
  let token: Contract;
  let market: Contract;
  let factory: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  before(async () => {
    [attacker, deployer] = await ethers.getSigners();

    token = await (await ethers.getContractFactory('CarToken', deployer)).deploy();

    await token.deployed();

    market = await (await ethers.getContractFactory('CarMarket', deployer)).deploy(token.address);

    await market.deployed();

    factory = await (
      await ethers.getContractFactory('CarFactory', deployer)
    ).deploy(market.address, token.address);

    await factory.deployed();

    await (await token.priviledgedMint(market.address, ethers.utils.parseEther('100000'))).wait();

    await (await token.priviledgedMint(factory.address, ethers.utils.parseEther('100000'))).wait();

    token = token.connect(attacker);
    market = market.connect(attacker);
    factory = factory.connect(attacker);
  });

  it('attack', async () => {
    /**
     * YOUR CODE HERE
     */
    expect((await market.getCarCount(attacker.address)).gt(2)).to.be.true;
  });
});
