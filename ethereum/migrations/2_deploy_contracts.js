var smartMarket = artifacts.require("./smartMarket.sol");

module.exports = function(deployer) {
  deployer.deploy(smartMarket);
};
