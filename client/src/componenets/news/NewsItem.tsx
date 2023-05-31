import React from 'react'
import { INews } from '../../models/entities/news'

interface IProps {
  news: INews
}

const NewsItem: React.FC<IProps> = ({ news }) => {
  return (
    <div className="h-[100px] flex flex-col justify-between items-start border-2 border-solid border-slate-100 rounded-2xl mb-2 p-5">
      <div className="flex">
        <img src="../../../public/logo192.png" alt={news.country.country} />
        <h2 className="ml-2">{news.title}</h2>
      </div>
      <p>{news.description}</p>
    </div>
  )
}

export default NewsItem
