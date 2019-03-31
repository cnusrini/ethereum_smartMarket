import web3 from './getWeb3';

const address = '0xCC40f1cb345147aC4439db0484b80C97b3ee8fb5';
const abi = '[{"constant":true,"inputs":[],"name":"productIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc897d5a6"},{"constant":true,"inputs":[],"name":"arbiter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xfe25e00a"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_category","type":"string"},{"name":"_imageLink","type":"string"},{"name":"_descLink","type":"string"},{"name":"_startTime","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_productCondition","type":"uint256"}],"name":"addProductToStore","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x170dd160"},{"constant":true,"inputs":[{"name":"_productId","type":"uint256"}],"name":"getProduct","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb9db15b4"}]';

const instance = new web3.eth.Contract(JSON.parse(abi), address);


export default instance;
