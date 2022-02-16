##1. install packages
```
    npm install
```

##1. change network settings in hardhat.config.ts

##2. create env file
Create an enviroment file named `.env` and fill the next enviroment variables

```
# Mnemonic, only first address will be used
MNEMONIC=""
# Add Alchemy or Infura provider keys, alchemy takes preference at the config level
ALCHEMY_KEY=""
INFURA_KEY=""
# Optional Etherscan key, for automatize the verification of the contracts at Etherscan
ETHERSCAN_KEY=""
# Optional, if you plan to use Tenderly scripts
TENDERLY_PROJECT=""
TENDERLY_USERNAME=""
```

##3. set deployed contracts.
go to markets/aave/common.ts and markets/aave/index.ts, set contracts wich deployed in core_contracts project


##4. contracts deployments
### waterfall deployment

```
# In one terminal
docker-compose up
# Open another tab or terminal
docker-compose exec contracts-env bash
# A new Bash terminal is prompted, connected to the container
npm run aave:waterfall:full:migration
```
