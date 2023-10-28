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
      const response = await axios.get(`https://vercel-bxtw.vercel.app/api/stocks/${id}`);
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
      <h2>Stock Details</h2>
      <div>
        <p><strong>Stock Name:</strong> {stock.StockName}</p>
        <p><strong>Stock Price:</strong> {stock.StockPrice}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default StockPrice;
