import Web3 from 'web3'

const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545')

const getBalance = async (address: string) => {
  const balance = await web3.eth.getBalance(address)
  return balance
}

export { getBalance }
