###install
   ```npm install```

###run scripts
   ```npx hardhat run scripts/{scriptname}.js --network waterfall```

## edit configuration
    change settings in hadrdhat.config.js
    change settings in /scripts/const.js

## STEPS
### scripts names

#### 1. deploy tokens
    deployLinkToken.js

### 2. deploy accessController
    deployBillingAccessController.js
    deployRequesterAccessController.js


### 3. deploy aggregators
    deployAccessControlledOffchainAggregator.js (in code set link token, BillingAccessController, RequesterAccessController)
    deployAggregatorEthUsd.js (in code set link token, BillingAccessController, RequesterAccessController)

### 4. deploy chainlink,  uncomment aggregators
    deployEACAggregatorProxy.js (in code set aggregator)

### 5. deploy other contracts
    deployReserveFactorTreasuryAddress.js
    deployTokenDistributor.js
    deployAaveFallbackOracle.js
    deployAaveToken.js //optional
    deployUniswapRouter.js //optional


## IMPORTANT
## 6. after aave-protocol deploy 
    run stopPause.js (set LendingPoolConfiguratorAddress from aave-protocol)


