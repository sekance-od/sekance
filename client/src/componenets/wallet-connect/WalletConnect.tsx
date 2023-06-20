import React, { useEffect, useState } from 'react'
// Libs.
import { ethers } from 'ethers'
import detectEthereumProvider from '@metamask/detect-provider'
import { IoMdWallet } from 'react-icons/io'
import { colorPalette } from '../../constants'
import { getBalance } from '../../utils'

const WalletConnect = () => {
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState<boolean>(false)
  const [account, setAccount] = useState<string | null>(null)
  const [balance, setBalance] = useState<string | null>(null)

  console.log('balance', account)

  useEffect(() => {
    if ((window as any).ethereum) {
      //check if Metamask wallet is installed
      setIsMetamaskInstalled(true)
    }
  }, [])

  //Does the User have an Ethereum wallet/account?
  async function connectWallet(): Promise<void> {
    //to get around type checking
    ;(window as any).ethereum
      .request({
        method: 'eth_requestAccounts'
      })
      .then((accounts: string[]) => {
        setAccount(accounts[0])
      })
      .catch((error: any) => {
        alert(`Something went wrong: ${error}`)
      })
  }

  useEffect(() => {
    async function fetch() {
      if (account) {
        const bal = await getBalance(account)
        setBalance(bal)
      }
    }
    fetch()
  }, [account])

  return (
    <button
      className="flex bg-gray-600 w-[150px] h-full p-5 justify-center rounded-md metamask-connect"
      onClick={connectWallet}
    >
      <IoMdWallet size={25} className="mr-2" color={colorPalette.white} />
      <p style={{ color: 'white' }}>
        {isMetamaskInstalled ? (account ? `${balance} ETH` : 'Connect') : 'Please install Metamask first.'}
      </p>
    </button>
  )
}

export default WalletConnect
