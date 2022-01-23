const router = require('express').Router();

const db = require('../db/database');

const Product = require('../models/products');


//get....

router.get('/', (req, res) => {
    res.render('product')
});



//add product...


router.get('/add-product', (req, res) => {
    res.render('products/add-product');
})







module.exports = router;