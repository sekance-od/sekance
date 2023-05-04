import React from 'react'
import { Header } from '../componenets'
import { Footer } from '../componenets'

interface IProps {
  children: React.ReactNode
}
const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <main className="h-[calc(100%-105px-300px)]">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
