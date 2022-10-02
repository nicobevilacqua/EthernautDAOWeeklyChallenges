import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

describe('Wallet', () => {
  let target: Contract;
  let walletLibrary: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  let owner1: SignerWithAddress;
  let owner2: SignerWithAddress;
  let owner3: SignerWithAddress;
  before(async () => {
    [attacker, deployer, owner1, owner2, owner3] = await ethers.getSigners();

    walletLibrary = await (await ethers.getContractFactory('WalletLibrary', deployer)).deploy();

    target = await (
      await ethers.getContractFactory('Wallet', deployer)
    ).deploy(walletLibrary.address, [owner1.address, owner2.address, owner3.address], 2);

    await target.deployed();

    target = target.connect(attacker);
  });

  it('attack', async () => {
    /**
     * YOUR CODE HERE
     */

    expect(await target.isOwner(attacker.address)).to.equal(true);
  });
});
