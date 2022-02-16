const Web3 = require('web3')

const { NETWORK, getProvider, baseTokens } = require('./const')
const accessControlledOffchainAggregator = require('../artifacts/contracts/aggregator/AccessControlledOffchainAggregator.sol/AccessControlledOffchainAggregator.json')

const provider = getProvider(NETWORK)

const web3 = new Web3(provider)


// SET
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

const params = {
    ALEX: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'ALEX / ETH',
    },
    SERG: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'SERG / ETH',
    },
    WWAT: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'WWAT / ETH',
    },
    NEHEMIA: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'NEHEMIA / ETH',
    },
    RICHARD: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'RICHARD / ETH',
    },
    LUKE: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'LUKE / ETH',
    },
    PEDRO: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'PEDRO / ETH',
    },
    ROBERT: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'ROBERT / ETH',
    },
    GEOFF: {
        maximumGasPrice: 1000,
        reasonableGasPrice: 100,
        microLinkPerEth: 65000000,
        linkGweiPerObservation: 60000000,
        linkGweiPerTransmission: 300000000,
        link: linkToken[NETWORK], // LINK TOKEN
        validator: '0x0000000000000000000000000000000000000000' ,
        minAnswer: "1000000000000",
        maxAnswer: "100000000000000000",
        billingAccessController: billingAcc[NETWORK],
        requesterAccessController:  requesterAcc[NETWORK],
        decimals: 18,
        description: 'GEOFF / ETH',
    }
}

const toDeploy = {
    ALEX: false,
    SERG: false,
    WWAT: false,
    NEHEMIA: true,
    RICHARD: true,
    LUKE: true,
    PEDRO: true,
    ROBERT: true,
    GEOFF: true,
}

const deployAccessControlledOffchainAggregator = async () => {
    try {
        const accounts = await web3.eth.getAccounts()

        console.log('Attempting to deploy AccessControlledOffchainAggregator from the account', accounts[0])

        if(toDeploy.ALEX) {
            const deployedToken3 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.ALEX.maximumGasPrice,
                        params.ALEX.reasonableGasPrice,
                        params.ALEX.microLinkPerEth,
                        params.ALEX.linkGweiPerObservation,
                        params.ALEX.linkGweiPerTransmission,
                        params.ALEX.link,
                        params.ALEX.validator,
                        params.ALEX.minAnswer,
                        params.ALEX.maxAnswer,
                        params.ALEX.billingAccessController,
                        params.ALEX.requesterAccessController,
                        params.ALEX.decimals,
                        params.ALEX.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('ALEX aggregator deployed to', deployedToken3.options.address);

            const contract3 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken3.options.address);
            await contract3.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }

        if(toDeploy.SERG) {

            const deployedToken4 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.SERG.maximumGasPrice,
                        params.SERG.reasonableGasPrice,
                        params.SERG.microLinkPerEth,
                        params.SERG.linkGweiPerObservation,
                        params.SERG.linkGweiPerTransmission,
                        params.SERG.link,
                        params.SERG.validator,
                        params.SERG.minAnswer,
                        params.SERG.maxAnswer,
                        params.SERG.billingAccessController,
                        params.SERG.requesterAccessController,
                        params.SERG.decimals,
                        params.SERG.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('SERG aggregator deployed to', deployedToken4.options.address);

            const contract4 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken4.options.address);
            await contract4.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }
        if(toDeploy.WWAT) {

            const deployedToken5 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.WWAT.maximumGasPrice,
                        params.WWAT.reasonableGasPrice,
                        params.WWAT.microLinkPerEth,
                        params.WWAT.linkGweiPerObservation,
                        params.WWAT.linkGweiPerTransmission,
                        params.WWAT.link,
                        params.WWAT.validator,
                        params.WWAT.minAnswer,
                        params.WWAT.maxAnswer,
                        params.WWAT.billingAccessController,
                        params.WWAT.requesterAccessController,
                        params.WWAT.decimals,
                        params.WWAT.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('WWAT aggregator deployed to', deployedToken5.options.address);

            const contract5 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken5.options.address);
            await contract5.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }

        if(toDeploy.NEHEMIA) {

            const deployedToken5 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.NEHEMIA.maximumGasPrice,
                        params.NEHEMIA.reasonableGasPrice,
                        params.NEHEMIA.microLinkPerEth,
                        params.NEHEMIA.linkGweiPerObservation,
                        params.NEHEMIA.linkGweiPerTransmission,
                        params.NEHEMIA.link,
                        params.NEHEMIA.validator,
                        params.NEHEMIA.minAnswer,
                        params.NEHEMIA.maxAnswer,
                        params.NEHEMIA.billingAccessController,
                        params.NEHEMIA.requesterAccessController,
                        params.NEHEMIA.decimals,
                        params.NEHEMIA.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('NEHEMIA aggregator deployed to', deployedToken5.options.address);

            const contract5 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken5.options.address);
            await contract5.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }

        if(toDeploy.RICHARD) {

            const deployedToken5 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.RICHARD.maximumGasPrice,
                        params.RICHARD.reasonableGasPrice,
                        params.RICHARD.microLinkPerEth,
                        params.RICHARD.linkGweiPerObservation,
                        params.RICHARD.linkGweiPerTransmission,
                        params.RICHARD.link,
                        params.RICHARD.validator,
                        params.RICHARD.minAnswer,
                        params.RICHARD.maxAnswer,
                        params.RICHARD.billingAccessController,
                        params.RICHARD.requesterAccessController,
                        params.RICHARD.decimals,
                        params.RICHARD.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('RICHARD aggregator deployed to', deployedToken5.options.address);

            const contract5 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken5.options.address);
            await contract5.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }

        if(toDeploy.LUKE) {

            const deployedToken5 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.LUKE.maximumGasPrice,
                        params.LUKE.reasonableGasPrice,
                        params.LUKE.microLinkPerEth,
                        params.LUKE.linkGweiPerObservation,
                        params.LUKE.linkGweiPerTransmission,
                        params.LUKE.link,
                        params.LUKE.validator,
                        params.LUKE.minAnswer,
                        params.LUKE.maxAnswer,
                        params.LUKE.billingAccessController,
                        params.LUKE.requesterAccessController,
                        params.LUKE.decimals,
                        params.LUKE.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('LUKE aggregator deployed to', deployedToken5.options.address);

            const contract5 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken5.options.address);
            await contract5.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }

        if(toDeploy.PEDRO) {

            const deployedToken5 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.PEDRO.maximumGasPrice,
                        params.PEDRO.reasonableGasPrice,
                        params.PEDRO.microLinkPerEth,
                        params.PEDRO.linkGweiPerObservation,
                        params.PEDRO.linkGweiPerTransmission,
                        params.PEDRO.link,
                        params.PEDRO.validator,
                        params.PEDRO.minAnswer,
                        params.PEDRO.maxAnswer,
                        params.PEDRO.billingAccessController,
                        params.PEDRO.requesterAccessController,
                        params.PEDRO.decimals,
                        params.PEDRO.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('PEDRO aggregator deployed to', deployedToken5.options.address);

            const contract5 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken5.options.address);
            await contract5.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }


        if(toDeploy.ROBERT) {

            const deployedToken5 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.ROBERT.maximumGasPrice,
                        params.ROBERT.reasonableGasPrice,
                        params.ROBERT.microLinkPerEth,
                        params.ROBERT.linkGweiPerObservation,
                        params.ROBERT.linkGweiPerTransmission,
                        params.ROBERT.link,
                        params.ROBERT.validator,
                        params.ROBERT.minAnswer,
                        params.ROBERT.maxAnswer,
                        params.ROBERT.billingAccessController,
                        params.ROBERT.requesterAccessController,
                        params.ROBERT.decimals,
                        params.ROBERT.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('ROBERT aggregator deployed to', deployedToken5.options.address);

            const contract5 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken5.options.address);
            await contract5.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }

        if(toDeploy.GEOFF) {

            const deployedToken5 = await new web3.eth.Contract(accessControlledOffchainAggregator.abi)
                .deploy({
                    data: accessControlledOffchainAggregator.bytecode,
                    arguments: [
                        params.GEOFF.maximumGasPrice,
                        params.GEOFF.reasonableGasPrice,
                        params.GEOFF.microLinkPerEth,
                        params.GEOFF.linkGweiPerObservation,
                        params.GEOFF.linkGweiPerTransmission,
                        params.GEOFF.link,
                        params.GEOFF.validator,
                        params.GEOFF.minAnswer,
                        params.GEOFF.maxAnswer,
                        params.GEOFF.billingAccessController,
                        params.GEOFF.requesterAccessController,
                        params.GEOFF.decimals,
                        params.GEOFF.description,
                    ]
                })
                .send({
                    from: accounts[0]
                })

            console.log('GEOFF aggregator deployed to', deployedToken5.options.address);

            const contract5 = new web3.eth.Contract(accessControlledOffchainAggregator.abi, deployedToken5.options.address);
            await contract5.methods.disableAccessCheck().send({ from: accounts[0] }).then((result) => {
                console.log('disabling access check... ', result?.status);
            });
        }

        console.log('finished...');

    } catch (error) {
        console.error('An error occurred in deployAccessControlledOffchainAggregator():\n', error)
    }
}

deployAccessControlledOffchainAggregator()
