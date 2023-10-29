// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // for navigation
import axios from 'axios';

function Stock() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    // Fetch stock data from your Express backend
    axios.get('https://vercel-beige-five.vercel.app/stock').then((response) => {
      setStocks(response.data);
    });
  }, []);

  return (

<>

<body>
  <div class="container">
  

    <section class="main">
     
   

      <section class="attendance">
        <div class="attendance-list">
          <h1>List</h1>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
              
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
            {stocks.map((stock,index) => (
            <tr key={stock._id}>
                <td>{index+1}</td>
                <td>
               {stock.StockName}
              </td>
              <td>{stock.StockPrice}</td>
              <td>
                <Link to={`/stock/${stock._id}`}>View</Link>
              </td>
             
            </tr>
          ))}
             
            </tbody>
          </table>
        </div>
      </section>
    </section>
  </div>

</body>

</>
  );
}

export default Stock;
