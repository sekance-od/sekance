const Web3 = require('web3')
const privateKey = process.env.PRIVATE_KEY
const contractABI = require('../CountryToken.json').abi
const contractAddress = '0x2F574A7f847a3F7d7B7DD479756098609CED0998'
const providerUrl = process.env.INFURA_GOERLI_ENDPOINT
const Token = require('../models/token')
const countryCurencies = require('../constants/countryCurrencies')

const createToken = data => {
  // countryCurencies.forEach(country => {
  //   const token = new Token({
  //     name: country.name,
  //     symbol: country.symbol,
  //     id: country.id
  //   })
  //   token.save()
  // })

  return 'success'
  // return Token.create(data)
}

const findToken = (query, projection) => {
  return Token.find(query, projection)
}

const getTokenDetails = async () => {
  console.log('providerUrl', providerUrl)
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl))
  const account = web3.eth.accounts.privateKeyToAccount(privateKey)
  const contract = new web3.eth.Contract(contractABI, contractAddress)

  const tokenDetail = await contract.methods.getTokenDetails().call({
    from: account.address
  })

  return tokenDetail
}

const setTokenValue = async value => {
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl))
  const account = web3.eth.accounts.privateKeyToAccount(privateKey)
  const contract = new web3.eth.Contract(contractABI, contractAddress)

  const newValue = value
  const encodedABI = contract.methods.setTokenValue(newValue).encodeABI()
  const gasPrice = await web3.eth.getGasPrice()
  const gasLimit = 300000

  const transactionObject = {
    from: account.address,
    to: contractAddress,
    gas: web3.utils.toHex(gasLimit),
    gasPrice: web3.utils.toHex(gasPrice),
    data: encodedABI,
    nonce: await web3.eth.getTransactionCount(account.address)
  }

  const signedTransaction = await account.signTransaction(transactionObject)

  const result = await web3.eth
    .sendSignedTransaction(signedTransaction.rawTransaction)
    .on('transactionHash', hash => {
      console.log('Transaction hash:', hash)
    })
    .on('receipt', receipt => {
      console.log('Transaction receipt:', receipt)
      return receipt
    })
    .on('error', error => {
      console.error('Error:', error)
    })

  return result
}

module.exports = {
  createToken,
  findToken,
  getTokenDetails,
  setTokenValue
}
