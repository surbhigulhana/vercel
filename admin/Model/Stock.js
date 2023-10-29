
var mongoose =require('mongoose');
const schema3 = new  mongoose.Schema({
    StockName:{
        type:String
    },
    StockPrice:{
        type:Number
    }

});
const StockPriceOne = new mongoose.model('StockPriceOne',schema3);
module.exports = StockPriceOne;
