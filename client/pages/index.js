import React, { Component } from 'react';
import moment from 'moment'
import {Button,Form,Input,Label} from 'semantic-ui-react'
import contractInstance from '../util/smartMarket.json'
import instanace from '../util/getContract'
import web3 from '../util/getWeb3';

class Products extends Component {
constructor(props){
    super(props);
    this.state = {
      name:'',
      category:'',
      ipfsImgHash:'',
      ipfsDescHash:'',
      price:'',
      condition:''
    };

  }

//getInitialProps async method fetches the accounts and allpastevents from block 0 to latest block.
//allLogs returns all the events from block 0 to latest block.
//newLogs returns all the events from block 0 to latest block for a specific filter such as address
// Note of coution : For better performance consider moving this huge logs to off chain or to any JSON data storage.
static async getInitialProps() {

    const accounts = await web3.eth.getAccounts();

    return {accounts};
}

componentDidMount = async () => {

  try {
    //const web3 = await getWeb3();// Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = contractInstance.networks[networkId];
    const smartMarketInstance = new web3.eth.Contract(contractInstance.abi, deployedNetwork.address, );

    console.log('loaded componentDidMount',smartMarketInstance);

  } catch (e) {
    console.log(e.message);
  }
};

handleChange = async (event) => {
  event.preventDefault();

  this.setState({ [event.target.name]: event.target.value });

  console.log('in nameonChange' + this.state.name);
  console.log('in categoryOnChange'+ this.state.category);
};

handleSubmit = async (event) => {
  event.preventDefault();
  console.log('in onsubmit');
  try {

    let tx = await instanace.methods.addProductToStore(
            this.state.name,
            this.state.category,
            this.state.ipfsImgHash,
            this.state.ipfsDescHash,
            this.state.price,
            this.state.condition).send({
            from: '0x3467992f9f050268902386ba5000b77C761FE7B9'
          });
          console.log('tx data', tx);
          console.log('contractInstance in submit',contractInstance);

  } catch (e) {
    console.log('error in handleSubmit method:'+ e.message);

  }
}


//Below is the page render method. Render page is divided into 4 segment.
//First segment : Login with uport identity.Will allow user to browse the snap and submit.
//Second segment : As soon as the snap is uploaded . It will be displayed here with the date and time of upload.
//Third segment : Displays all the snaps that are uploaded fromBlock 0 to latest block. With the ipfshash , date and time and the person who has uploaded.
//Fourth segment : Displays all the snaps for an individual address. Third and fourth segment will be an onLoad()
render(){
console.log('accounts',contractInstance);
console.log('new ins',instanace);

  return(

          <div className='digital-identity'>
            <p>Add Product</p>
            <Form onSubmit={this.handleSubmit}>
             <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
             <Input name='name' icon='truck' iconPosition='left' placeholder='name of the product'
             type='text' value={this.state.name} onChange={this.handleChange}
             />
             <Form.Field inline>
               <Label pointing='right'>Category</Label>
               <input name='category' type='password' placeholder='Category'
               type='text' value={this.state.category} onChange={this.handleChange}

               />
             </Form.Field>
             <Form.Field inline>
               <Label pointing='right'>Image</Label>
               <input name='ipfsImgHash' type='password' placeholder='Image'
               type='text' value={this.state.ipfsImgHash} onChange={this.handleChange}

               />
             </Form.Field>
             <Form.Field inline>
               <Label pointing='right'>Desc</Label>
               <input name='ipfsDescHash' type='password' placeholder='Desc'
               type='text' value={this.state.ipfsDescHash} onChange={this.handleChange}

               />
             </Form.Field>
             <Form.Field inline>
               <Label pointing='right'>Price</Label>
               <input name='price`' type='password' placeholder='price'
               type='text' value={this.state.price} onChange={this.handleChange}

               />
             </Form.Field>
             <Form.Field inline>
               <Label pointing='right'>Condition</Label>
               <input name='condition' type='password' placeholder='Condition'
               type='text' value={this.state.condition} onChange={this.handleChange}

               />
             </Form.Field>
             <Button color='blue' fluid-size='large' >submit</Button>

         </Form>


          </div>


  );

}
}

export default Products;
