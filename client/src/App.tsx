import React from 'react'
import { HomeView, ProfilePageView, MarketView } from './views'
import {BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeView />} />
        <Route path="/homeview" element={<HomeView />} />
        <Route path="/marketview" element={<MarketView />} />
        <Route path="profilepageview/*" element={<ProfilePageView />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
