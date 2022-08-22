###install
open a new tab in the terminal

```cd core_contracts```

```npm install```

## change network settings, add an account
    change in hadrdhat.config.js file
    ## change in the file /scripts/const.js

### run the script
```npx hardhat run scripts/{название скрипта}.js --network waterfall```


## STEPS

#### 1. deploy link token
    npx hardhat run scripts/deployLinkToken.js --network waterfall
get ***LinkToken*** address

### 2. deploy accessController
    npx hardhat run scripts/deployBillingAccessController.js --network waterfall
    npx hardhat run scripts/deployRequesterAccessController.js --network waterfall

get contract address ***BillingAccessController***
get contract address ***RequesterAccessController***


### 3. deploy aggregators
in scripts/deployAccessControlledOffchainAggregator.js set the received addresses ***LinkToken***, ***BillingAccessController***, ***RequesterAccessController***

also in scripts/deployAggregatorEthUsd.js set the received addresses ***LinkToken***, ***BillingAccessController***, ***RequesterAccessController***

    npx hardhat run scripts/deployAccessControlledOffchainAggregator.js --network waterfall

to get the addresses of the aggregators  

    npx hardhat run scripts/deployAggregatorEthUsd.js --network waterfall

get the usd aggregator address


### 4. deploy chainlink
in script/deployEACAggregatorProxy.js in the aggregator object for the waterfall network, set the obtained aggregator addresses

    npx hardhat run scripts/deployEACAggregatorProxy.js --networkwaterfall
 
get the addresses of the chainlink contracts

### 5. deploy other contracts
deploy other contracts

    npx hardhat run scripts/deployReserveFactorTreasuryAddress.js --network waterfall
get the address of the ReserveFactorTreasury contract

    npx hardhat run scripts/deployTokenDistributor.js --network waterfall
get the address of the TokenDistributor contract

    npx hardhat run scripts/deployAaveFallbackOracle.js --network waterfall
Get the address of the AaveFallbackOracle contract

-------
### The result should be the contract addresses:
the following contracts will be used in the aave-protocol

### 1) chainlink aggregators for:

***USD***

***ALEX***

***SERG***

***WWAT***

***NEHEMIA***

***RICHARD***

***LUKE***

***PEDRO***

***ROBERT***

***GEOFF***

### 2) ReserveFactorTreasury

### 3) TokenDistributor

### 4) AaveFallbackOracle

-------


## 6. After deploating the contracts with aave-protocol execute

in scripts/stopPause.js set the received LendingPoolConfiguratorAddress, then execute

     npx hardhat run scripts/stopPause.js --network waterfall



