import React from 'react'
import Layout from './Layout'
// icons
import { IoMdWallet } from 'react-icons/io'
import { BsDiscord } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
import { colorPalette } from '../constants/palette'
import { News } from '../componenets/news'
import { FilterableDatatable } from '../componenets/filterabledatatable'
import { Markets } from '../componenets/markets'

const MarketView = () => {
    return (
       <Layout>
            <div className="bg-slate-300 h-full">
                <div className="flex h-2/3">
                   <div className="w-1/3 p-2"><Markets/></div>
                   <div className="w-1/3 p-2"><Markets/></div>
                   <div className="w-1/3 p-2"><News/></div>
                </div>
                <div className="flex h-1/3">
                   <div className="w-full p-2"><FilterableDatatable/></div>
                </div>
            </div>
       </Layout>
    );
}

export default MarketView
