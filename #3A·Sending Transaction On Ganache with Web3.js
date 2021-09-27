// Sending transaction on Ganache
// ======================================

node
const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')
const account1 = '0xfDA5218Ef00a3B46d01B615dB330E8deF293c9DD'
const account2 = '0x9eFcC8ad219a6f34Cdb97D1558446B7aFcc34C28'
web3.eth.getBalance(account1, (err, result) => {console.log(result)})
web3.eth.sendTransaction({from: account1, to: account2, value: web3.utils.toWei('1', 'ether')})

web3.eth.getBalance(account1, (err, result) => {console.log(result)})
web3.eth.getBalance(account2, (err, result) => {console.log(result)})

