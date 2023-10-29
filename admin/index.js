const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const Stock = require("./Model/Stock");
require("./Model/config");



app.use(cors(
  {
    origin :["https://deploy-mern.app"],
    methods:["POST"."GET"],
             credentials:true
  }
));
app.use(express.json());
app.get("/"(req,res)=>{
  res.json("hello")
app.post("/api/Stock", async function (req, res) {
  const { StockName,StockPrice } = req.body;
  
  try {
    const result = new Stock({
  StockName:StockName,
  StockPrice:StockPrice
 });
    const data1 = await result.save();
    console.log(data1)

    res.status(200).json({ success: true, data1: result });
  } catch (err) { }

});



app.get('/api/stocks/:_id', async (req, resp) => {
  try {
    const _id = req.params._id;
    const stock = await Stock.findById(_id);
    
    if (stock) {
      // Calculate a new random price (you can customize this logic)
      const priceChange = (Math.random() - 0.5) * 5;
      stock.StockPrice = parseFloat((stock.StockPrice * (1 + priceChange / 100)).toFixed(2));

      // Save the updated stock data
      await stock.save();
      resp.status(200).send(stock);
    } else {
      resp.status(404).send({ error: 'Stock not found' });
    }
  } catch (err) {
    resp.status(500).json(err);
  }
});

app.get("/Stock", async (req, resp) => {
  let result = await Stock.find({});
  resp.send(result);
});
app.listen(4005);
console.log("server run on 4005");









