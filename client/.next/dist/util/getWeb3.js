'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; /*
                   import Web3 from 'web3'
                   
                   const resolveWeb3 = (resolve) => {
                     let { web3 } = window
                     const alreadyInjected = typeof web3 !== 'undefined' // i.e. Mist/Metamask
                     const localProvider = `http://localhost:8545`
                   
                     if (alreadyInjected) {
                       console.log(`Injected web3 detected.`)
                       web3 = new Web3(web3.currentProvider)
                     } else {
                       console.log(`No web3 instance injected, using Local web3.`)
                       const provider = new Web3.providers.HttpProvider(localProvider)
                       web3 = new Web3(provider)
                     }
                   
                     resolve(web3)
                   }
                   
                   export default () =>
                     new Promise((resolve) => {
                       // Wait for loading completion to avoid race conditions with web3 injection timing.
                       window.addEventListener(`load`, () => {
                         resolveWeb3(resolve)
                       })
                       // If document has loaded already, try to get Web3 immediately.
                       if (document.readyState === `complete`) {
                         resolveWeb3(resolve)
                       }
                     })
                   */

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //We are in the browser and metamask is running
  web3 = new _web2.default(window.web3.currentProvider);
} else {
  //User is not on the browser (othwerise user is on the server)
  //User is not having metamask
  //const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
  var provider = new _web2.default.providers.HttpProvider("http://127.0.0.1:8545");
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxcXGdldFdlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBaUNBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQW5DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBLElBQUcsT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFsRCxBQUEyRCxhQUMzRCxBQUNFO0FBQ0E7U0FBTyxBQUFJLGtCQUFLLE9BQUEsQUFBTyxLQUF2QixBQUFPLEFBQXFCLEFBQzdCO0FBSkQsT0FLSSxBQUNGO0FBQ0E7QUFDQTtBQUNBO01BQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQWdDLEFBQ2pEO1NBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFFakI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJnZXRXZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L2hhY2thdGhvbi9ldGhlcmV1bV9zbWFydE1hcmtldC9jbGllbnQifQ==