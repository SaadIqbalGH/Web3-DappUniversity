var Tx = require('ethereumjs-tx').Transaction;
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/0536225934d042fcb9b18eabb7637974')

const account1 = '0x23D1e2A5c5CcaCa5294E9A8fBEAaBA1D1e21C1E5'
const account2 = '0x30AE3fEa29dc2F15174FAa937E3F4B8F6A4F60Cd'

const privateKey1 = Buffer.from('ab0d097b06f0f85daf4f385fea588a60c28baa2159f231102d3399818e9f0b46', 'hex')
const privateKey2 = Buffer.from('ef71e5f1d213f4c3eea97ef4dc943cd66cda34b5bd0d9f59bf711972f6faa649', 'hex')

const contractAddress = '0x118A3067e32565999f9f7cca234BC59c3DcC8E91'
const contractABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]

const contract = new web3.eth.Contract(contractABI, contractAddress)

// Transfer some tokens
// web3.eth.getTransactionCount(account1, (err, txCount) => {

//   let txObject = {
//     nonce:    web3.utils.toHex(txCount),
//     gasLimit: web3.utils.toHex(800000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
//     to: contractAddress,
//     data: contract.methods.transfer(account2, 1000).encodeABI()
//   }

//   const tx = new Tx(txObject, { chain: 'ropsten', hardfork: 'petersburg' })
//   tx.sign(privateKey1)

//   const serializedTx = tx.serialize()
//   const raw = '0x' + serializedTx.toString('hex')

//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log('err:', err, 'txHash:', txHash)

//   })
// })

// Tx Hash: 0xfc71198a12b79789a9c047ca50d63c5ebf0fe00d06ed5971ef853bfd8122d3f0 (of token transfer from account1 to account2)

contract.methods.balanceOf(account1).call((err, balance) => {
  console.log('balance account1: ', balance )
})  
// balance account1:  999000


contract.methods.balanceOf(account2).call((err, balance) => {
  console.log('balance account2: ', balance )
})  
//balance account2:  1000