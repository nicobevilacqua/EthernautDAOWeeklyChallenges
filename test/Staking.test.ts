import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { run, ethers } from 'hardhat';

describe('Staking', () => {
  let token: Contract;
  let contract: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  let someoneelse: SignerWithAddress;
  before(async () => {
    [attacker, deployer, someoneelse] = await ethers.getSigners();

    token = await (
      await ethers.getContractFactory('RewardToken', deployer)
    ).deploy('RewardToken', 'RTK', someoneelse.address);
    await token.deployed();

    contract = await (await ethers.getContractFactory('Staking', deployer)).deploy(token.address);
    await contract.deployed();

    let tx = await contract.connect(deployer).addReward(token.address, deployer.address, 7257600);
    await tx.wait();

    // MINT TOKENS
    tx = await token
      .connect(deployer)
      .mint(deployer.address, ethers.utils.parseEther('10000000000'));
    await tx.wait();

    // APPROVE
    tx = await token.connect(deployer).approve(contract.address, ethers.constants.MaxUint256);
    await tx.wait();

    tx = await contract
      .connect(deployer)
      .notifyRewardAmount(token.address, ethers.utils.parseEther('1000000'));
    await tx.wait();
  });

  it('Attack', async () => {
    expect(true).to.equal(false);
  });
});
