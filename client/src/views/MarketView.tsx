import React from 'react'
import Layout from './Layout'
// icons
import { IoMdWallet } from 'react-icons/io'
import { BsDiscord } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
import { colorPalette } from '../constants/palette'
import { News } from '../componenets/news'

import { Markets } from '../componenets/markets'
import { FilterableDatatable } from '../componenets'

const MarketView = () => {
  return (
    <Layout>
      <div className="h-full">
        <div className="flex ">
          <div className="w-1/3 p-2">
            <Markets />
          </div>
          <div className="w-1/3 p-2">
            <Markets />
          </div>
          <div className="w-1/3 p-2">
            <News />
          </div>
        </div>
        <div className="flex ">
          <div className="w-full p-2">
            <FilterableDatatable />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MarketView
