# smartMartket built on Ethereum
[![Build Status](https://travis-ci.com/cnusrini/ethereum_smartMarket.svg?branch=master)](https://travis-ci.com/cnusrini/ethereum_smartMarket)
* Built on the below Ethereum versions :
  * Truffle v5.0.0 (core: 5.0.0)
  * Solidity v0.5.0 (solc-js)
  * Node v9.4.0

* Unit testing using :
  * javaScript,
  * Ganache CLI v6.2.5 (ganache-core: 2.3.3)

* continuous integration using :
  * travis ci

* Steps to install smartMarket
  * clone or download the repo.
  * cd to /ethereum.
  * execute truffle compile --reset

# Migrate/deploy contract
For Ganache - in the /ethereum directory execute the below command :
  * truffle migrate --network ganache --reset
  * truffle console --network ganache
For rinkeby - in the repo directory execute the below command to deploy to rinkeby netowrk:
    * truffle migrate --reset --network rinkeby
    * truffle console --network rinkeby
# To unit test in ganache:
  * Follow migratin step as above
  * truffle console --network ganache
  * truffle(ganache)> smartMarket.deployed().then(function(instance){app=instance;})
  * truffle(ganache)> currenttime = Math.round(new Date()/1000)
  * truffle(ganache)> app.addProductToStore('iphone 6', 'Cell Phones & Accessories', 'imagelink', 'desclink', currenttime, currenttime + 200, 10, 0)
  * truffle(ganache)> app.getProduct(1)

# To test the smart contract using truffle test
  * In the project directory, execute truffle test
