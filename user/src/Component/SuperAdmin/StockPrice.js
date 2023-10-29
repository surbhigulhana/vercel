import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function StockPrice() {
  const { id } = useParams();
  const [stock, setStock] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchStockPrice = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:4005/api/stocks/${id}`);
      setStock(response.data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch the stock price when the component mounts
    fetchStockPrice();

    // Set up an interval to fetch the stock price every 1 minute (adjust as needed)
    const intervalId = setInterval(fetchStockPrice, 1000); // 1 minute = 60,000 milliseconds

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [id]);

  return (
    <div>
        <div class="container">
  

  <section class="main">
   
 

    <section class="attendance">
      <div class="attendance-list">
        <h1>List</h1>
        <table class="table">
          <thead>
            <tr>
            
              <th>Stock Details</th>
             
            
          
            </tr>
          </thead>
          <tbody>
          <p><strong>Stock Name:</strong> {stock.StockName}</p>
        <p><strong>Stock Price:</strong> {stock.StockPrice}</p>
          </tbody>
        </table>
      </div>
    </section>
  </section>
</div>
      
    </div>
  );
}

export default StockPrice;
