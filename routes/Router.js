const router = require('express').Router();

const db = require('../db/database');

const faker = require('faker');

const Product = require('../models/products');


//get....

router.get('/', (req, res) => {
    res.render('product')
});



//add product...


router.get('/add-product', (req, res) => {
    res.render('products/add-product');
})


//generate fake-product....

router.get('/generate-fake-product', (req, res, next) => {
    for (let i = 0; i < 90; i++) {
        const product = new Product();
        product.category = faker.commerce.department();
        product.name = faker.commerce.productName();
        product.price = faker.commerce.price();
        product.cover = faker.image.image();
        product.save(err => {
            return next(err)
        });

    }
    res.redirect('/add-product');
})




module.exports = router;