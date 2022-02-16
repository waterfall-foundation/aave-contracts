const Web3 = require('web3')

const { NETWORK, baseTokens, getProvider, account } = require('./const')
const accessControlledOffchainAggregator = require('../artifacts/contracts/aggregatorEthUsd/AccessControlledOffchainAggregator.sol/AccessControlledOffchainAggregator.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const linkToken = {
    ['WATERFALL']: '0x3D5e6D006341729641BD231D211a34f6d59ABC35',
    ['GOERLI']: baseTokens.link[NETWORK] ? baseTokens.link[NETWORK] : '0x357eEc8ce3984BF4A4a9D8140Fe0c76CeBDF1ECD',
}
const billingAcc = {
    ['WATERFALL']: '0xD57D94a55821b79cEC5408f4AdF0aAcF029739Ec',
    ['GOERLI']: '0xcC956715735ad0Ba8c40Bac5882fbAaEa2e2d36e',
}
const requesterAcc = {
    ['WATERFALL']: '0xD55ED81C8092ECD21E84B60d2705C2B22019B26D',
    ['GOERLI']: '0xC8Df5f7764cEe289AC04465533a622A932181b8B',
}
console.log('aggregator deploy');
console.log('link token: ', linkToken[NETWORK]);
console.log('billingAcc: ', billingAcc[NETWORK]);
console.log('requesterAcc: ', requesterAcc[NETWORK]);


const maximumGasPrice = 1000;
const reasonableGasPrice = 100;
const microLinkPerEth = 72200000;
const linkGweiPerObservation = 10000000;
const linkGweiPerTransmission = 60000000;
const link = linkToken[NETWORK]; // LINK TOKEN
const minAnswer = "100000000";
const maxAnswer = "1000000000000";
const billingAccessController =  billingAcc[NETWORK]
const requesterAccessController=  requesterAcc[NETWORK]
const decimals = 8;
const description = 'ETH / USD';
//-----

const deployAccessControlledOffchainAggregator = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy AccessControlledOffchainAggregator from the account', accounts[0])

        const deployedToken = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
            .deploy({
                data: accessControlledOffchainAggregator.bytecode,
                arguments: [
                    maximumGasPrice,
                    reasonableGasPrice,
                    microLinkPerEth,
                    linkGweiPerObservation,
                    linkGweiPerTransmission,
                    link,
                    minAnswer,
                    maxAnswer,
                    billingAccessController,
                    requesterAccessController,
                    decimals,
                    description,
                ]
            })
            .send({
                from: accounts[0]
            })

        console.log('Aggregator Eth Usd deployed to', deployedToken.options.address);
        console.log('waiting for disabling...');
        const contract = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken.options.address);
        await contract.methods.disableAccessCheck().send({from: accounts[0], gas: 3000000}).then((result) => {
            console.log('disabling access check... ', result?.status);
        });

        console.log('finished...');
    } catch (error) {
        console.error('An error occurred in deployAccessControlledOffchainAggregator():\n', error)
    }
}

deployAccessControlledOffchainAggregator()
