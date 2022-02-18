const Web3 = require('web3')

const { NETWORK, getProvider } = require('./const')
const eacAggregatorProxy = require('../artifacts/contracts/chainLink/EACAggregatorProxy.sol/EACAggregatorProxy.json')


// set aggregators
const aggs = {
    ['GOERLI']: {
        // MANA: { aggregator: '0x600E32Eef6a93f092ffCb010aE372689032dAbF8', },
        // YFI: { aggregator: '0x0a4614dc0C19C3C77414F7a88Bb2EFA4E09526a0', },
        // USD: { aggregator: '0x7037083dD156cf5C2EF4a768b9A8f42288A5b86a', }
    },
    ['WATERFALL']: {
        USD: { aggregator: '0x2a980a1c74Efc0e12A47f9B1D587eE06cE5Dd891', },
        ALEX: { aggregator: '0xc691338629933adECD3A456683b00b75B095C6C8', },
        SERG: { aggregator: '0xd7f1507F912ddF098476632cb05c79ecbE8aDc19', },
        WWAT: { aggregator: '0x902560d8c6bd421fF70b6c069d43bED4C05509F2', },
        NEHEMIA: { aggregator: '0x0f5AB95fe6D9348656c84417243FBFE0e4367BD0', },
        RICHARD: { aggregator: '0x0F60e7de5DD3693EeC7e62C1EF9fb26232332337', },
        LUKE: { aggregator: '0x1eb7E62a5abF34413b9b578002C65CEB0b65909b', },
        PEDRO: { aggregator: '0x4797B1ae5826f74afE557e6aB096a43ae2d27375', },
        ROBERT: { aggregator: '0x663bcC8E1Bc033cB4c570C5935274dcF8bf02426', },
        GEOFF: { aggregator: '0x60f4CC31dCe407c61F16a31f5AF697795a4A95B0', },
    },
}

const aggregators = {...aggs[NETWORK]}

const accessController = '0x0000000000000000000000000000000000000000';

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)

const deployEACAggregatorProxy = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy EACAggregatorProxy from the account', accounts[0])

        if (aggregators?.USD?.aggregator) {
            const chainlinkUSD = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                      aggregators.USD.aggregator,
                      accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with USD aggregator, deployed to', chainlinkUSD.options.address);
        }

        if (aggregators?.ALEX?.aggregator) {
            const chainlinkALEX = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.ALEX.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with ALEX aggregator, deployed to', chainlinkALEX.options.address);
        }

        if (aggregators?.SERG?.aggregator) {
            const chainlinkSERG = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.SERG.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with SERG aggregator, deployed to', chainlinkSERG.options.address);
        }

        if (aggregators?.WWAT?.aggregator) {
            const chainlinkWWAT = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.WWAT.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with WWAT aggregator, deployed to', chainlinkWWAT.options.address);
        }

        if (aggregators?.NEHEMIA?.aggregator) {
            const chainlinkNEHEMIA = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.NEHEMIA.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with NEHEMIA aggregator, deployed to', chainlinkNEHEMIA.options.address);
        }

        if (aggregators?.RICHARD?.aggregator) {
            const chainlinkRICHARD = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.RICHARD.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with RICHARD aggregator, deployed to', chainlinkRICHARD.options.address);
        }

        if (aggregators?.LUKE?.aggregator) {
            const chainlinkLUKE = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.LUKE.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with LUKE aggregator, deployed to', chainlinkLUKE.options.address);
        }

        if (aggregators?.PEDRO?.aggregator) {
            const chainlinkPEDRO = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.PEDRO.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with PEDRO aggregator, deployed to', chainlinkPEDRO.options.address);
        }

        if (aggregators?.ROBERT?.aggregator) {
            const chainlinkROBERT = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.ROBERT.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with ROBERT aggregator, deployed to', chainlinkROBERT.options.address);
        }

        if (aggregators?.GEOFF?.aggregator) {
            const chainlinkGEOFF = await new web3.eth.Contract(eacAggregatorProxy.abi)
                .deploy({
                    data: eacAggregatorProxy.bytecode,
                    arguments: [
                        aggregators.GEOFF.aggregator,
                        accessController
                    ]
                })
                .send({
                    from: accounts[0]
                })
            console.log('chainLink with GEOFF aggregator, deployed to', chainlinkGEOFF.options.address);
        }

        console.log('deploy finished...');

    } catch (error) {
        console.error('An error occurred in EACAggregatorProxy():\n', error)
    }
}

deployEACAggregatorProxy()
