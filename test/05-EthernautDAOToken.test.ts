import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

const addressWithBalance = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';

describe('EthernautDaoToken', () => {
  let target: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  before(async () => {
    [, attacker, deployer] = await ethers.getSigners();

    target = await (await ethers.getContractFactory('EthernautDaoToken', deployer)).deploy();

    await target.deployed();

    await (
      await target.mint(addressWithBalance, ethers.utils.parseEther('0.000000000000000001'))
    ).wait();
    await (
      await target.mint(addressWithBalance, ethers.utils.parseEther('0.099999999999999999'))
    ).wait();
    await (
      await target.mint(addressWithBalance, ethers.utils.parseEther('0.999999999999999999'))
    ).wait();

    target = target.connect(attacker);
  });

  it('attack', async () => {
    /**
     * YOUR CODE HERE
     */

    expect(ethers.utils.formatEther(await target.balanceOf(addressWithBalance))).to.equal('0.0');
  });
});
