node 
const Web3 = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/21789368dc1f4df8bba7e3913ddf354a'
const web3 = new Web3(rpcURL)
const address = '0x6D7C96BA0689fe281F0EEF51a7173eC621aF2A32'
web3.eth.getBalance(address, (err, wei) => {balance = web3.utils.fromWei(wei, 'ether')})
balance
