import React from 'react'
import Layout from './Layout'
// icons
import { FilterableDatatable } from '../componenets/filterable-data-table'
import { Markets } from '../componenets/markets'
import { ProfileHeader, ProfileBody } from '../componenets/profile'

const WalletView = () => {
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-2/3 p-4  border-gray-300">
            <ul className=" justify-between  w-full ">
              <li className=" flex justify-between border border-gray-300 rounded-lg p-2 m-2 bg-slate-900 text-white text">
                <div className=" py-4 text-sm ">
                  <span className="inline-flex items-baseline">
                    <img
                      src="https://runoyazilimmedya.com/public/site/img/runo_logo3065.png"
                      alt=""
                      className="self-center w-5 h-5 rounded-full mx-1"
                    />
                    <span className="font-medium">BTC</span>
                  </span>
                </div>
                <div className=" py-4 text-sm ">
                  {' '}
                  <span className="dark-grey font-medium">USDT</span>
                  <span className="font-medium ml-2">6.8798</span>
                </div>
                <div className=" py-4 text-sm  green font-medium">+0.93%</div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <i className="fas fa-plus mr-2"></i>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  Yeni Ekle
                </button>
              </li>
              <li className=" flex justify-between   border border-gray-300 rounded-lg p-2 m-2 bg-slate-900 text-white text">
                <div className=" py-4 text-sm ">
                  <span className="inline-flex items-baseline">
                    <img
                      src="https://runoyazilimmedya.com/public/site/img/runo_logo3065.png"
                      alt=""
                      className="self-center w-5 h-5 rounded-full mx-1"
                    />
                    <span className="font-medium font">BTC</span>
                  </span>
                </div>
                <div className=" py-4 text-sm ">
                  {' '}
                  <span className="dark-grey font-medium">USDT</span>
                  <span className="font-medium ml-2">6.8798</span>
                </div>
                <div className=" py-4 text-sm  green font-medium">+0.93%</div>
              </li>
            </ul>
          </div>

          <div className="w-1/3  border-gray-300"></div>
        </div>
      </div>

      <div className=" h-full">
        <div className="flex ">
          <div className="w-1/2 p-2">
            <div className=" grid grid-cols-3 gap-4 justify-items-center">
              <div className=" p-1 text-sm  font-medium  dark-grey">Ad </div>
              <div className="p-1 text-sm font-medium dark-grey">Son Fiyat</div>
              <div className=" p-1 text-sm font-medium dark-grey">24 sa Değişim</div>
              {/* grid başlık */}

              <div className=" p-1 text-sm">
                <span className="inline-flex items-baseline">
                  <img
                    src="https://runoyazilimmedya.com/public/site/img/runo_logo3065.png"
                    alt=""
                    className="self-center w-5 h-5 rounded-full mx-1"
                  />
                  <span className="font-medium">BTC</span>
                </span>
              </div>
              <div className=" p-1 text-sm">
                {' '}
                <span className="dark-grey font-medium">USDT</span>
                <span className="font-medium ml-2">6.8798</span>
              </div>
              <div className=" p-1 text-sm green font-medium">+0.93%</div>

              {/* ilk satır liste */}
            </div>
          </div>
          <div className="flex">
            <div className="w-full p-2"></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WalletView
