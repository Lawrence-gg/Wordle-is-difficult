import React from 'react'
import Game from './Game'
import Header from './Header'
import History from './History'

import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </div>
  )
}

export default App
