import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers } from 'hardhat';

describe('Vault', () => {
  let rewardToken: Contract;
  let stakingToken: Contract;
  let target: Contract;
  let attacker: SignerWithAddress;
  let deployer: SignerWithAddress;
  let lpStaker: SignerWithAddress;
  before(async () => {
    [attacker, deployer, lpStaker] = await ethers.getSigners();

    rewardToken = await (
      await ethers.getContractFactory('RewardToken', deployer)
    ).deploy('RewardToken', 'RTK', lpStaker.address);

    await rewardToken.deployed();

    stakingToken = await (await ethers.getContractFactory('StakingToken', deployer)).deploy();

    await stakingToken.deployed();

    target = await (
      await ethers.getContractFactory('Staking', deployer)
    ).deploy(stakingToken.address);

    await (await target.addReward(rewardToken.address, deployer.address, 7257600)).wait();

    await (await rewardToken.mint(deployer.address, ethers.utils.parseEther('10000000000'))).wait();

    await (await rewardToken.approve(target.address, ethers.constants.MaxUint256)).wait();

    await (
      await target.notifyRewardAmount(rewardToken.address, ethers.utils.parseEther('1000000'))
    ).wait();

    rewardToken = target.connect(attacker);
    stakingToken = stakingToken.connect(attacker);
    target = target.connect(attacker);
  });

  it('attack', async () => {
    /**
     * YOUR CODE HERE
     */

    expect((await rewardToken.balanceOf(attacker.address)).eq(ethers.utils.parseEther('1000000')))
      .to.be.true;
  });
});
