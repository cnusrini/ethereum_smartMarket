'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getWeb = require('./getWeb3');

var _getWeb2 = _interopRequireDefault(_getWeb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var address = '0xCC40f1cb345147aC4439db0484b80C97b3ee8fb5';
var abi = '[{"constant":true,"inputs":[],"name":"productIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc897d5a6"},{"constant":true,"inputs":[],"name":"arbiter","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xfe25e00a"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_category","type":"string"},{"name":"_imageLink","type":"string"},{"name":"_descLink","type":"string"},{"name":"_startTime","type":"uint256"},{"name":"_price","type":"uint256"},{"name":"_productCondition","type":"uint256"}],"name":"addProductToStore","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x170dd160"},{"constant":true,"inputs":[{"name":"_productId","type":"uint256"}],"name":"getProduct","outputs":[{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint8"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb9db15b4"}]';

var instance = new _getWeb2.default.eth.Contract(JSON.parse(abi), address);

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxcXGdldENvbnRyYWN0LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJhZGRyZXNzIiwiYWJpIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7Ozs7QUFFQSxJQUFNLFVBQVUsQUFBaEI7QUFDQSxJQUFNLE1BQU0sQUFBWjs7QUFFQSxJQUFNLFdBQVcsSUFBSSxpQkFBSyxBQUFMLElBQVMsQUFBYixTQUFzQixLQUFLLEFBQUwsTUFBVyxBQUFYLEFBQXRCLE1BQXVDLEFBQXZDLEFBQWpCLEFBR0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoiZ2V0Q29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiQzovaGFja2F0aG9uL2V0aGVyZXVtX3NtYXJ0TWFya2V0L2NsaWVudCJ9