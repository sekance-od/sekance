import React from 'react'
// icons
import { IoMdWallet } from 'react-icons/io'
import { BsDiscord } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
// constants
import { colorPalette } from '../../constants'

const Header = () => {
  return (
    <div className="flex flex-row justify-between w-full bg-slate-800 py-5 px-10  items-center">
      <img src="data:image/png;base64,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" />
      <div className="flex">
        <p className="text-white mx-2">Home</p>
        <p className="text-white mx-2">About</p>
        <p className="text-white mx-2">Pages</p>
        <p className="text-white mx-2">Blog</p>
      </div>
      <div className="flex h-full items-center justify-center rounded-full">
        <button className="rounded-full bg-lime-400 w-[40px] h-[40px] flex  items-center justify-center">
          <HiOutlineSun size={25} />
        </button>
        <button className="flex bg-red-500 w-[150px] h-full p-5 justify-center mx-5">
          <BsDiscord size={25} className="mr-2" color={colorPalette.white} />
          <p className="text-center text-white">Discord</p>
        </button>
        <button className="flex bg-orange-500 w-[150px] h-full p-5 justify-center ">
          <IoMdWallet size={25} className="mr-2" color={colorPalette.white} />
          <p className="text-center text-white">Connect</p>
        </button>
      </div>
    </div>
  )
}

export default Header
