const Web3 = require('web3')
const privateKey = '4a37d4862930eaa4b45e04b17b9cafd832962056fc87c0177ac64b37f254d5a5' // Özel anahtarınızı buraya yerleştirin
const contractABI = require('./CountryToken.json').abi // Sözleşmenizin ABI'sini buraya yerleştirin
const contractAddress = '0x629642A6556E432998F94CB1D6b5136A229125FF' // Sözleşmenizin adresini buraya yerleştirin
const providerUrl = 'https://goerli.infura.io/v3/46db2656ec1d48eab7c142e69db56b28'

async function setTokenValue() {
  // Web3 nesnesini oluşturun
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl))

  // Ethereum hesabınıza bağlanın
  const account = web3.eth.accounts.privateKeyToAccount(privateKey)

  // Sözleşme nesnesini oluşturun
  const contract = new web3.eth.Contract(contractABI, contractAddress)

  // Sözleşme fonksiyonunu çağırın
  const newValue = 200 // Yeni token değeri
  const encodedABI = contract.methods.setTokenValue(newValue).encodeABI()
  const gasPrice = await web3.eth.getGasPrice()
  const gasLimit = 300000 // İşlem limiti

  const transactionObject = {
    from: account.address,
    to: contractAddress,
    gas: web3.utils.toHex(gasLimit),
    gasPrice: web3.utils.toHex(gasPrice),
    data: encodedABI,
    nonce: await web3.eth.getTransactionCount(account.address)
  }

  const signedTransaction = await account.signTransaction(transactionObject)

  web3.eth
    .sendSignedTransaction(signedTransaction.rawTransaction)
    .on('transactionHash', hash => {
      console.log('Transaction hash:', hash)
    })
    .on('receipt', receipt => {
      console.log('Transaction receipt:', receipt)
    })
    .on('error', error => {
      console.error('Error:', error)
    })
}

const getTokenValue = async () => {
  // Web3 nesnesini oluşturun
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl))

  // Ethereum hesabınıza bağlanın
  const account = web3.eth.accounts.privateKeyToAccount(privateKey)

  // Sözleşme nesnesini oluşturun
  const contract = new web3.eth.Contract(contractABI, contractAddress)

  // Sözleşme fonksiyonunu çağırın
  const tokenValue = await contract.methods.getTokenValue().call({
    from: account.address
  })

  console.log('Token value:', tokenValue)
}

getTokenValue()
