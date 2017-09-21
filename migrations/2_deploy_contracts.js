var Oko = artifacts.require("./Oko.sol");
var Bytes = artifacts.require("./BytesHelper.sol")

module.exports = function(deployer) {
  deployer.deploy(Bytes);
  deployer.link(Bytes, Oko);
  deployer.deploy(Oko);
};
