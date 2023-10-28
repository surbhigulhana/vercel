
var mongoose =require('mongoose');
const schema3 = new  mongoose.Schema({
    StockName:{
        type:String
    },
    StockPrice:{
        type:Number
    }

});
const StockPrice = new mongoose.model('StockPrice',schema3);
module.exports = StockPrice;