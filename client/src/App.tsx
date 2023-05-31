import React from 'react'
import { HomeView, ProfilePageView, MarketView } from './views'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WalletView from './views/WalletView'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/home" element={<HomeView />} />
        <Route path="/market" element={<MarketView />} />
        <Route path="/profile" element={<ProfilePageView />} />
        <Route path="wallet/*" element={<WalletView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
