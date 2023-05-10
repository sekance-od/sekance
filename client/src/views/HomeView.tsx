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
      
        {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
         <div className="bg-gray-100">Üst Sol</div>
         <div className="bg-gray-100">Üst Sağ</div>
         <div className="bg-gray-200">Alt Sol</div>
         <div className="bg-gray-200">Alt Sağ</div>
   
        </div> */}

     <div className="bg-slate-300 h-full">
        <div className="flex h-2/3">
          <div className="w-2/3"><Map/></div>
          <div className="w-1/3"><Markets/></div>
        </div>
          <div className="flex h-1/3">
          <div className="w-2/3"><Orders/></div>
          <div className="w-1/3"><News/></div>
        </div>
      </div>

        <div className="flex h-1/6 max-w-lg">
          <NewsSlider/> 
        </div>

      {/* <div className="container mx-auto">
         <div className="grid grid-cols-9 ">
             <div className="col-span-6">
                 <Map />
             </div>
             <div className="col-span-3">
                 <Map/> 
             </div>
         </div>
         <div className="grid grid-cols-9 ">
             <div className="col-span-6">
                 <Map />
             </div>
             <div className="col-span-3">
                 <Map/> 
             </div>
         </div>
      </div> */}
      

    </Layout>
  )
}

export default HomeView
