// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // for navigation
import axios from 'axios';

function Stock() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from your Express backend
    axios.get('https://vercel-bxtw.vercel.app/stock').then((response) => {
      setStocks(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Stock Dashboard</h2>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
       <th scope="col">Stock Name</th>
            <th scope="col">Stock Price</th>
    </tr>
  </thead>
  <tbody>
  {stocks.map((stock,index) => (
            <tr key={stock._id}>
                <td>{index+1}</td>
              <td>
                <Link to={`/stock/${stock._id}`}>{stock.StockName}</Link>
              </td>
              <td>{stock.StockPrice}</td>
            </tr>
          ))}
    <tr>
    
    </tr>
    
  </tbody>
</table>
     
    </div>
  );
}

export default Stock;
