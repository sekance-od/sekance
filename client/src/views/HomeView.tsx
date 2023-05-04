import React from 'react'
import Layout from './Layout'
// icons
import { IoMdWallet } from 'react-icons/io'
import { BsDiscord } from 'react-icons/bs'
import { HiOutlineSun } from 'react-icons/hi'
import { colorPalette } from '../constants/palette'


const HomeView = () => {
  return <Layout>

    {/* <div className="relative h-screen bg-red-300">
      <video className="absolute inset-0 object-cover w-full h-full" autoPlay loop muted>
        <source src="https://www.youtube.com/watch?v=oaDoNRCD21U&t=2829s" type="video/mp4" />
      </video>
      <div className="relative flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-bold text-white">Watch this video</h1>
        <p className="mt-4 text-xl text-gray-200">Learn about our products and services</p>
        <button className="px-4 py-2 mt-6 text-lg font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:bg-blue-700">Play video</button>
      </div>
    </div>  */}
    {/* video */}

    <div className="  relative  bg-[url('https://res.cloudinary.com/braydoncoyer/image/upload/v1642953750/glowing_gradient_background_tailwind_banner.jpg')]">
    <div className=" p-8 flex h-full items-center justify-center rounded-full ">
        <button className="flex  h-full p-5 justify-center mx-5 tf-button">
          <p className="text-center text-white">Create Wallet</p>
        </button>
        <button className="flex  h-full p-5 justify-center tf-button" >
          <p className="text-center text-white">Whitelist Now</p>
        </button>
        
      </div> 
    </div>  

             

    <div className="relative flex overflow-x-hidden">
     <div className="py-2 animate-marquee whitespace-nowrap">
         <span className="text-4xl mx-4 font-bold text-lg">AME : 12 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">TUR : 40 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">ING : 10 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">FRA : 8 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">RUS : 20 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">AME : 12 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">TUR : 40 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">ING : 10 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">FRA : 8 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">RUS : 20 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">ING : 10 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">FRA : 8 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">RUS : 20 USDTR</span>
     </div>

     <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
         <span className="text-4xl mx-4 font-bold text-lg">AME : 12 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">TUR : 40 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">ING : 10 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">FRA : 8 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">RUS : 20 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">AME : 12 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">TUR : 40 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">ING : 10 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">FRA : 8 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">RUS : 20 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">ING : 10 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">FRA : 8 USDTR</span>
         <span className="text-4xl mx-4 font-bold text-lg">RUS : 20 USDTR</span>
     </div>
    </div>
    {/* slider */}



  </Layout>
}

export default HomeView
