const Web3 = require('web3')
const rpcURL = 'https://mainnet.infura.io/v3/21789368dc1f4df8bba7e3913ddf354a'
const web3 = new Web3(rpcURL)

// Get average gas price in wei from last few blocks median gas price
web3.eth.getGasPrice().then((result) => {console.log('average gas price: ', web3.utils.fromWei(result, 'ether'))})

// Use sha256 Hashing function
console.log('SHA256 Hash: ', web3.utils.sha3('Dapp University'))

// Use keccak256 Hashing function (alias)
console.log('keccak256 Hash: ', web3.utils.keccak256('Dapp University'))

// Get a Random Hex
console.log('Random Hex: ', web3.utils.randomHex(32))

// Get access to the underscore JS library - To install via '_' package --> npm install underscore-node

var _ = require('underscore-node');
//console.log(_)

_.each({ key1: 'value1', key2: 'value2' }, (value, key) => {
  console.log(key)
})

