const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/0536225934d042fcb9b18eabb7637974')

// DAPP Token (my Test Contract from 4A)
const abi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"},{"name":"_releaseTime","type":"uint256"}],"name":"mintTimelocked","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
const address = '0x118A3067e32565999f9f7cca234BC59c3DcC8E91'

const contract = new web3.eth.Contract(abi, address)

// Get Contract Event Stream
contract.getPastEvents(
  'AllEvents',
  {
    fromBlock: 11116189,
    toBlock: 'latest'
  },
  (err, events) => { console.log(events) }
)

// [ 1000 Token Transfer Transaction detail (so far only 1 transaction occurred): 
//     {
//       address: '0x118A3067e32565999f9f7cca234BC59c3DcC8E91',
//       blockHash: '0x86059eb6eff48d952cf01ea92c2c3454e85e3dc1be2f5a0163a404d8cbaa4840',
//       blockNumber: 11116452,
//       logIndex: 1,
//       removed: false,
//       transactionHash: '0xfc71198a12b79789a9c047ca50d63c5ebf0fe00d06ed5971ef853bfd8122d3f0',
//       transactionIndex: 2,
//       id: 'log_92727a0a',
//       returnValues: Result {
//         '0': '0x23D1e2A5c5CcaCa5294E9A8fBEAaBA1D1e21C1E5',
//         '1': '0x30AE3fEa29dc2F15174FAa937E3F4B8F6A4F60Cd',
//         '2': '1000',
//         from: '0x23D1e2A5c5CcaCa5294E9A8fBEAaBA1D1e21C1E5',
//         to: '0x30AE3fEa29dc2F15174FAa937E3F4B8F6A4F60Cd',
//         value: '1000'
//       },
//       event: 'Transfer',
//       signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
//       raw: {
//         data: '0x00000000000000000000000000000000000000000000000000000000000003e8',
//         topics: [Array]
//       }
//     }
//   ]