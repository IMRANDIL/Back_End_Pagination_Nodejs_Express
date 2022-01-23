const mongoose = require('mongoose');

const { Schema } = mongoose;

const Product = new Schema({
    category: String,
    name: String,
    price: Number,
    cover: String

});



module.exports = mongoose.model('Product', Product);


