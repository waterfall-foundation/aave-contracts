const Web3 = require('web3')

const { NETWORK, getProvider, account } = require('./const')
const Aggregator = require('../artifacts/contracts/aggregator/AccessControlledOffchainAggregator.sol/AccessControlledOffchainAggregator.json')
const AggregatorUsd = require('../artifacts/contracts/aggregatorEthUsd/AccessControlledOffchainAggregator.sol/AccessControlledOffchainAggregator.json')
const proxy = require('../artifacts/contracts/chainLink/EACAggregatorProxy.sol/EACAggregatorProxy.json')
const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const aggs = {
    ['GOERLI']: {
        MANA: '0x600E32Eef6a93f092ffCb010aE372689032dAbF8',
        YFI: '0x0a4614dc0C19C3C77414F7a88Bb2EFA4E09526a0',
        USD: '0x7037083dD156cf5C2EF4a768b9A8f42288A5b86a'
    },
    ['WATERFALL']: {
        MANA: '0xfd4a1040487128Feec851e96d453898af9B42885',
        YFI: '0x7f6239979cD0f923080C0FB7E05cBBf56D3041c3',
        USD: '0xddE06d65073c4ad14C922964EEa5EA97aB15040B'
    },
}

const aggregators = {...aggs[NETWORK]}


const changeAccess = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        //disable access

        // const contract1 = new web3.eth.Contract(Aggregator.abi, aggregators.YFI);
        // await contract1.methods.disableAccessCheck().send({from: accounts[0]}).then((result) => {
        //     console.log(`disabling for ${aggregators.YFI} `, result?.status);
        // });
        //
        // const contract2 = new web3.eth.Contract(Aggregator.abi, aggregators.MANA);
        // await contract2.methods.disableAccessCheck().send({from: accounts[0]}).then((result) => {
        //     console.log(`disabling for ${aggregators.MANA} `, result?.status);
        // });
        //
        // const contract3 = new web3.eth.Contract(AggregatorUsd.abi, aggregators.USD);
        // await contract3.methods.disableAccessCheck().send({from: accounts[0]}).then((result) => {
        //     console.log(`disabling for ${aggregators.USD} `, result?.status);
        // });

        //enableAccessCheck()

        // const contract1 = new web3.eth.Contract(Aggregator.abi, aggregators.YFI);
        // await contract1.methods.enableAccessCheck().send({from: account}).then((result) => {
        //     console.log(`enable for ${aggregators.YFI} `, result?.status);
        // });
        //
        // const contract2 = new web3.eth.Contract(Aggregator.abi, aggregators.MANA);
        // await contract2.methods.enableAccessCheck().send({from: account}).then((result) => {
        //     console.log(`enable for ${aggregators.MANA} `, result?.status);
        // });
        //
        // const contract3 = new web3.eth.Contract(AggregatorUsd.abi, aggregators.USD);
        // await contract3.methods.enableAccessCheck().send({from: account}).then((result) => {
        //     console.log(`enable for ${aggregators.USD} `, result?.status);
        // });

        // const zeroAddr = '0x0000000000000000000000000000000000000000';
        const poolPorviderAddr = '0x5285951044fe8c62dd47e7436edc93ed5d543c29';
        const uiPoolProvider = '0x77A60f692b26926785517308D865195a5dC2E461';
        const me = accounts[0];

        const contract_1 = new web3.eth.Contract(Aggregator.abi, aggregators.YFI);
        await contract_1.methods.addAccess(me).send({from: accounts[0]}).then((result) => {
            console.log(`add access to ${aggregators.YFI} for ${me} `, result?.status);
        });

        const contract_2 = new web3.eth.Contract(Aggregator.abi, aggregators.MANA);
        await contract_2.methods.addAccess(me).send({from: accounts[0]}).then((result) => {
            console.log(`add access to ${aggregators.MANA} for ${me} `, result?.status);
        });

        const contract_3 = new web3.eth.Contract(AggregatorUsd.abi, aggregators.USD);
        await contract_3.methods.addAccess(me).send({from: accounts[0]}).then((result) => {
            console.log(`add access to ${aggregators.USD} for ${me} `, result?.status);
        });

        console.log('finished...');

    } catch (error) {
        console.error('An error occurred:\n', error)
    }
}

changeAccess()
