import React from 'react'
import Layout from './Layout'
// icons
import { IoMdWallet } from 'react-icons/io'
import { BsDiscord } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
import { colorPalette } from '../constants/palette'
import { NewsSlider } from '../componenets'

const HomeView = () => {
  return (
    <Layout>
      <div className="bg-slate-300 h-full">
        <div className="flex h-2/3">
          <div className="w-2/3">x</div>
          <div className="w-1/3">y</div>
        </div>
        <div className="flex h-1/3">
          <div className="w-2/3">x</div>
          <div className="w-1/3">y</div>
        </div>
      </div>
      <NewsSlider />
    </Layout>
  )
}

export default HomeView
