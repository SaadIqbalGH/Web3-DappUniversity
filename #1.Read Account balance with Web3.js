require ('dotenv').config();
const Web3 = require('web3');
const rpcURL = process.env.INFURA_MAINNET_URL;
const web3 = new Web3(rpcURL);
const address = '0x6D7C96BA0689fe281F0EEF51a7173eC621aF2A32';
web3.eth.getBalance(address, (err, wei) => {
    const balance = web3.utils.fromWei(wei, 'ether'); 
    console.log(balance);} 
);
