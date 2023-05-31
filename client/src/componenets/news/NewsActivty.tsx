import React from 'react'
import NewsItem from './NewsItem'
import { ECountryCurrencies, ICountryCurrency } from '../../models'
import { INews } from '../../models/entities/news'

const dummyData: INews[] = [
  {
    _id: '',
    content: 'Contet 1',
    country: {
      _id: '',
      country: ECountryCurrencies.GuineaBissau,
      dailyChange: 70,
      unitPrice: 10
    },
    description: 'Desc 1',
    title: 'Title 1'
  },
  {
    _id: '',
    content: 'Contet 2',
    country: {
      _id: '',
      country: ECountryCurrencies.CaboVerde,
      dailyChange: 40,
      unitPrice: 20
    },
    description: 'Desc 2',
    title: 'Title 2'
  },
  {
    _id: '',
    content: 'Contet 3',
    country: {
      _id: '',
      country: ECountryCurrencies.Egypt,
      dailyChange: 50,
      unitPrice: 90
    },
    description: 'Desc 3',
    title: 'Title 3'
  },
  {
    _id: '',
    content: 'Contet 4',
    country: {
      _id: '',
      country: ECountryCurrencies.Australia,
      dailyChange: -50,
      unitPrice: 900
    },
    description: 'Desc 4',
    title: 'Title 4'
  }
]
const NewsActivty = () => {
  return (
    <div className="h-full">
      <ul className="h-full overflow-y-auto">
        {dummyData.map((news, index) => {
          return <NewsItem news={news} key={index} />
        })}
      </ul>
    </div>
  )
}

export default NewsActivty
