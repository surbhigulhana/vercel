import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stock from './Component/SuperAdmin/Stock';
import StockPrice from './Component/SuperAdmin/StockPrice';
const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route exact path='/' element={<Stock/>}></Route>
        <Route path="/stock/:id" element={<StockPrice/>} />
      </Routes>
      </Router> 
    </div>
  )
}

export default App
