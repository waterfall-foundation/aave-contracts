const Web3 = require('web3')

const { NETWORK, getProvider, account } = require('../const')
const proxy = require('../../artifacts/contracts/chainLink/EACAggregatorProxy.sol/EACAggregatorProxy.json')
const pool = require('../../side/UiPoolDataProviderV2.sol/UiPoolDataProviderV2.json')
const lendingPool = require('../../side/LendingPool.sol/LendingPool.json')
const lendingPoolProvider = require('../../side/LendingPoolAddressesProvider.sol/LendingPoolAddressesProvider.json')
const lendingPoolConfigurator = require('../../side/LendingPoolConfigurator.sol/LendingPoolConfigurator.json')
const oracle = require('../../side/AaveOracle.sol/AaveOracle.json')
const Aggregator = require('../../artifacts/contracts/aggregator/AccessControlledOffchainAggregator.sol/AccessControlledOffchainAggregator.json')
const AggregatorUsd = require('../../artifacts/contracts/aggregatorEthUsd/AccessControlledOffchainAggregator.sol/AccessControlledOffchainAggregator.json')

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

const go = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        // const zeroAddr = '0x0000000000000000000000000000000000000000';

        //goerli
        const LendingPoolAddressesProvider = '0xC1A54cb0AC7453d1b3a2f8D75E08ed47b402AE89';
        const LendingPoolConfiguratorAddress = '0xe2d87D329c49fC78c864A34982B56021f86e2c23';
        const uiPoolProvider = '0xa0Fa846a5c51026B5A31CF554543F07eB0b8e433';
        const aaveOracle = '0xBA8C96d8236E2077285c68a3Fc58af44fa41Db7f';
        const asset = '0x41D062A6AB259E07D96DB88E7BbfC0840f8584c1';
        const LendingPool = '0x32FF58e1717a580C1068f7f2C8B96957981C7f4B';

        //waterfall
        // const LendingPoolAddressesProvider = '0xC1A54cb0AC7453d1b3a2f8D75E08ed47b402AE89';
        // const LendingPoolConfiguratorAddress = '0xe2d87D329c49fC78c864A34982B56021f86e2c23';
        // const uiPoolProvider = '0xEFEc587730603D60466027bFa8e70E388A408276';
        // const aaveOracle = '0xBA8C96d8236E2077285c68a3Fc58af44fa41Db7f';
        // const asset = '0x41D062A6AB259E07D96DB88E7BbfC0840f8584c1';
        // const LendingPool = '0x424B86672460Dc8e7D9BBbf50B073A74D4fe7AC8';


        // GET LendingPoolConfigurator
        // const lpap = new web3.eth.Contract(lendingPoolProvider.abi, LendingPoolAddressesProvider);
        // await lpap.methods.getLendingPoolConfigurator().call({from: accounts[0]}).then((result) => {
        //     console.log(result);
        // });

        //
        // const lpConf = new web3.eth.Contract(lendingPoolConfigurator.abi, LendingPoolConfiguratorAddress);
        // await lpConf.methods.deactivateReserve('0x376AE187d0C6eA55fFFDD3Bc27b629b39C5e1b24').send({from: accounts[0]}).then((result) => {
        //     console.log(result);
        // });

        const uiPool = new web3.eth.Contract(pool.abi, uiPoolProvider);
        await uiPool.methods.getReservesData(LendingPoolAddressesProvider).call({from: account}).then((result) => {
            console.log(result);
        });



        // const contract = new web3.eth.Contract(oracle.abi, aaveOracle);
        // await contract.methods.getFallbackOracle().call({from: account}).then((result) => {
        //     console.log('fallback: ', result);
        // });

        //
        // const depositData = {
        //     amount: '100000',
        //     referralCode: '0',
        //     reserve: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
        //     user: "0xa7e558Cc6efA1c41270eF4Aa227b3dd6B4a3951E"
        // }
        // const value = '0x00';




        // const borrowData = {
        //     amount: "1000000000",
        //     debtTokenAddress: "0xe844dabA5A0b5930acE5256cC641734C2b4eb753",
        //     interestRateMode: 2,
        //     referralCode: "0",
        //     reserve: "0x41d062a6ab259e07d96db88e7bbfc0840f8584c1",
        //     user: "0xa7e558Cc6efA1c41270eF4Aa227b3dd6B4a3951E",
        // }
        //
        // const l1 = new web3.eth.Contract(lendingPool.abi, LendingPool);

        // await l1.methods.paused().call({from: account}).then((result) => {
        //     console.log('is paused: ', result);
        // });

        // await l1.methods.borrow(borrowData.reserve,
        //     borrowData.amount,
        //     borrowData.interestRateMode,
        //     0,
        //     borrowData.user).send({from: borrowData.user}).then((result) => {
        //     console.log(result);
        // });

        // const lpConf = new web3.eth.Contract(lendingPoolConfigurator.abi, LendingPoolConfiguratorAddress);
        // await lpConf.methods.setPoolPause(false).send({from: depositData.user}).then((result) => {
        //     console.log('setting unpause: ', result.status);
        // });


        console.log('finished...');
        return;

    } catch (error) {
        console.error('An error occurred:\n', error)
    }
}

go()
