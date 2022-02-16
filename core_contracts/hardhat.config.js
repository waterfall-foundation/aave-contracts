require("@nomiclabs/hardhat-waffle");

require("solidity-coverage");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */


module.exports = {
  solidity: {
    compilers: [{
      version: "0.4.11"
    },
      {
      version: "0.4.16"
    },
      {
      version: "0.4.24"
    },
      {
      version: "0.5.0"
    },
      {
      version: "0.5.14"
    },
      {
        version: "0.5.16"
      },
      {
        version: "0.5.3"
      },
      {
        version: "0.6.4"
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      {
        version: "0.6.8"
      },
      {
        version: "0.6.10"
      },
      {
        version: "0.6.11"
      },
      {
        version: "0.6.12"
      },
      {
        version: "0.7.4"
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000
          }
        }
      },
      // {
      //   version: "0.8.0",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 1000
      //     }
      //   }
      // }
    ],
  },
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/35bd3a0275804f1bb6ba57ebcd3dfaa4",
      accounts: ['0xe37cbd62b37b6d91b9abca4f5c0baf9ddaf31c3bc1fb24cb60caf4f002307672'],
      from: '0xa7e558Cc6efA1c41270eF4Aa227b3dd6B4a3951E',
      chainId: 5,
    },
    waterfall: {
      url: "https://rpc.waterfall.network/rpc",
      chainId: 333777333,
      accounts: ['07201008f00b31de405a0af22ff04871044e027878929b7b47569ca76555ff09'],
      from: '0xa7062A2Bd7270740f1d15ab70B3Dee189A87b6DE',
      // accounts: ['0xe37cbd62b37b6d91b9abca4f5c0baf9ddaf31c3bc1fb24cb60caf4f002307672'],
      // from: '0xa7e558Cc6efA1c41270eF4Aa227b3dd6B4a3951E',
      gasPrice: 20000000000,
      gas: 3000000,
    },
  },
};
