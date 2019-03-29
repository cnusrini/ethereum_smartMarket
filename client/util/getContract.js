/*
const getContractInstance = async (web3, contractDefinition) => {
  // get network ID and the deployed address
  const networkId = await web3.eth.net.getId()
  const deployedAddress = contractDefinition.networks[networkId].address

  // create the instance
  const instance = new web3.eth.Contract(
    contractDefinition.abi,
    deployedAddress
  )
  return instance
  console.log('instance details', instance);
  
}

export default getContractInstance
*/

import web3 from './getWeb3';
//import poeContract from './build/contracts/ProofOfExistence.json';

const address = '0x9afdfcae4942f12ca32a105d768959ec6dc451a4' //rinkeby
//const address = '0x345ca3e014aaf5dca488057592ee47305d9b3e10' //Ganache

const abi = '[{"constant":false,"inputs":[{"name":"_snapHash","type":"string"}],"name":"setSnapDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_snap","type":"string"}],"name":"setgetsnapDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"currentUserEvent","type":"address"},{"indexed":false,"name":"snapEvent","type":"string"},{"indexed":false,"name":"timeEvent","type":"uint256"}],"name":"logNewSnapDetails","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"currentUserEvent1","type":"address"},{"indexed":false,"name":"snapEvent1","type":"string"},{"indexed":false,"name":"timeEvent1","type":"uint256"}],"name":"logsetgetDetails","type":"event"}]';

const instance = new web3.eth.Contract(JSON.parse(abi), address);


export default instance;