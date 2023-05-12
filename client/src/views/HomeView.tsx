import React from 'react'
import Layout from './Layout'
// icons
import { IoMdWallet } from 'react-icons/io'
import { BsDiscord } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
import { colorPalette } from '../constants/palette'
import { NewsSlider } from '../componenets'
import { Map } from '../componenets'
import { News } from '../componenets/news'
import { Markets } from '../componenets/markets'
import { Orders } from '../componenets/orders'

const HomeView = () => {
  return (
    <Layout>
      

     <div className="h-full">
        <div className="flex ">
          <div className="w-2/3 p-4"><Map/></div>
          <div className="w-1/3 p-4"><Markets/></div>
        </div>
          <div className="flex">
          <div className="w-2/3 p-8"><Orders/></div>
          <div className="w-1/3 p-4"><News/></div>
        </div>
      </div>

        <div className="flex h-1/6 max-w-lg">
          <NewsSlider/> 
        </div>

     
      

    </Layout>
  )
}

export default HomeView
