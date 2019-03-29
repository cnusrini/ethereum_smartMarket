/*
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

import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined')
{
  //We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
}
else{
  //User is not on the browser (othwerise user is on the server)
  //User is not having metamask
  //const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
  const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
  web3 = new Web3(provider);

}

export default web3;