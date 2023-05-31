import React from 'react'

import Layout from './Layout'
// Components
import { CurrencyChangesDT, CurrencyWorldMap, NewsActivty, PopularCurrenciesDT } from '../componenets'

const HomeView = () => {
  return (
    <Layout>
      <div className="h-full">
        <div className="flex  h-[400px]">
          <div className="w-2/3 p-4">
            <CurrencyWorldMap />
          </div>
          <div className="w-1/3 p-4">
            <PopularCurrenciesDT />
          </div>
        </div>
        <div className="flex">
          <div className="flex w-2/3 p-8">
            <CurrencyChangesDT tableTitle="Highest Currencies" currencyData={[]} />
            <CurrencyChangesDT tableTitle="Latest Currencies" currencyData={[]} />
          </div>
          <div className="w-1/3 p-4">
            <NewsActivty />
          </div>
        </div>
      </div>

      <div className="flex h-1/6 max-w-lg">{/* <NewsSlider /> */}</div>
    </Layout>
  )
}

export default HomeView
