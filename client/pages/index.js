import React, { Component } from 'react';
import moment from 'moment'
import web3 from '../util/getWeb3';
import {Button,Card,Container,Divider,Icon,Menu,Segment,Table} from 'semantic-ui-react'
//import contractInstance1 from '../../ethereum/build/contracts/smartMarket.json';
import contractInstance1 from '../util/smartMarket.json';

class Products extends Component {
constructor(props){
    super(props);
    this.state = {
      web3: null,
      accounts: null,
      contract: null,
      buffer:null,
      ipfsHash:null,
      ipfsHash1:null,
      newdate:'',
      userName:''
    };

  }

//getInitialProps async method fetches the accounts and allpastevents from block 0 to latest block.
//allLogs returns all the events from block 0 to latest block.
//newLogs returns all the events from block 0 to latest block for a specific filter such as address
// Note of coution : For better performance consider moving this huge logs to off chain or to any JSON data storage.
static async getInitialProps() {

    const accounts = await web3.eth.getAccounts();


    return { accounts};


}

componentDidMount = async () => {

  try {
    const web3 = await getWeb3();// Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = contractInstance1.networks[networkId];
    const smartMarketInstance = new web3.eth.Contract(contractInstance1.abi, deployedNetwork.address, );
    console.log('smartMarketInstance',smartMarketInstance);

  } catch (e) {
    console.log(error);
  }



};


//Below is the page render method. Render page is divided into 4 segment.
//First segment : Login with uport identity.Will allow user to browse the snap and submit.
//Second segment : As soon as the snap is uploaded . It will be displayed here with the date and time of upload.
//Third segment : Displays all the snaps that are uploaded fromBlock 0 to latest block. With the ipfshash , date and time and the person who has uploaded.
//Fourth segment : Displays all the snaps for an individual address. Third and fourth segment will be an onLoad()
render(){

  return(

          <div className='digital-identity'>
            <p>index class</p>
          </div>


  );

}
}

export default Products;
