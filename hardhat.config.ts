import '@nomicfoundation/hardhat-toolbox';
import { config } from 'dotenv';
config();

import '@nomiclabs/hardhat-etherscan';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
  solidity: {
    compilers: [
      {
        version: '0.8.0',
      },
      {
        version: '0.7.0',
      },
      {
        version: '0.8.4',
      },
      {
        version: '0.8.13',
      },
    ],
  },
};
