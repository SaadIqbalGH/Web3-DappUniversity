var Tx     = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/0536225934d042fcb9b18eabb7637974')

const account1 = '0x23D1e2A5c5CcaCa5294E9A8fBEAaBA1D1e21C1E5'
const account2 = '0x30AE3fEa29dc2F15174FAa937E3F4B8F6A4F60Cd' 

const privateKey1 = Buffer.from('ab0d097b06f0f85daf4f385fea588a60c28baa2159f231102d3399818e9f0b46', 'hex')
//const privateKey2 = Buffer.from('ef71e5f1d213f4c3eea97ef4dc943cd66cda34b5bd0d9f59bf711972f6faa649', 'hex')
//const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  let txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  const tx = new Tx(txObject,{ chain: 'ropsten', hardfork: 'petersburg' })
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log('txHash:', txHash) // >>>> 0x8f5236931ca977924ddf557dc971f74e60d38e7c272266f5f88e52f6847bf108  : TxHash on Ropsten Etherscan

  })
})