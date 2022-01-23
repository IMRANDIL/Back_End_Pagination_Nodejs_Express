const router = require('express').Router();

const db = require('../db/database');

const faker = require('faker');

const Product = require('../models/products');
const { count } = require('../models/products');


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
});



//post....

router.post('/add-product', (req, res, next) => {
    const product = new Product();
    product.category = req.body.category;
    product.name = req.body.name;
    product.price = req.body.price;
    product.cover = faker.image.image();

    product.save(err => {
        if (err) return next(err);
        res.redirect('/add-product')
    })
});

//get by page.....pagination...

router.get('/products/:page', (req, res, next) => {
    let perPage = 9;
    let page = req.params.page || 1;

    Product.find({}).skip((perPage * page) - perPage).limit(perPage).exec((err, result) => {
        Product.count((err, count) => {
            if (err) next(err);
            res.render('product', {
                result,
                current: page,
                pages: Math.ceil(count / perPage)

            })
        })
    })

})




module.exports = router;