const HDWalletProvider = require('@truffle/hdwallet-provider')

const NETWORK = {
    ETHMAINET: 'ETHMAINET',
    GOERLI: 'GOERLI',
    WATERFALL: 'WATERFALL',
}

const CHAIN_IDS = {
    GOERLI: 5,
    WATERFALL: 333777333,
}

const PROVIDER = {
    ['ETHMAINET']: '',
    ['GOERLI']: 'https://goerli.infura.io/v3/35bd3a0275804f1bb6ba57ebcd3dfaa4',
    ['WATERFALL']: 'https://rpc.waterfall.network/rpc',
}

const accs = {
    ['ETHMAINET']: '',
    ['GOERLI']: {
        accounts: ['0xe37cbd62b37b6d91b9abca4f5c0baf9ddaf31c3bc1fb24cb60caf4f002307672'],
        from: '0xa7e558Cc6efA1c41270eF4Aa227b3dd6B4a3951E',
    },
    ['WATERFALL']: {
        accounts: ['07201008f00b31de405a0af22ff04871044e027878929b7b47569ca76555ff09'],
        from: '0xa7062A2Bd7270740f1d15ab70B3Dee189A87b6DE',
    }
}

// change network
const network = NETWORK.WATERFALL;
const IS_PRODUCTION = false

const CHAIN_ID = CHAIN_IDS[network];
const acc = accs[network].from;

function getProvider() {
    return new HDWalletProvider({
        privateKeys: accs[network].accounts,
        providerOrUrl: PROVIDER[network],
    })
}

baseTokens = {
    link: {
        [NETWORK.GOERLI]: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'
    }
}

// Export
module.exports = {
    CHAIN_ID,
    IS_PRODUCTION,
    NETWORK: network,
    baseTokens,
    account: acc,
    getProvider
}
