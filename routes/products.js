const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const productController = require('../controllers/product');

const router = express.Router(); // eslint-disable-line new-cap

// return list of products
router.route('/')
.get(productController.getAllProducts);

// create new instance and return id and name
router.route('/')
.post(validate(paramValidation.product.create))
.post(productController.postProduct);

// update instance
router.route('/:id')
.put(validate(paramValidation.product.update))
.put(productController.putProduct);

// delete instance
router.route('/:id')
.delete(validate(paramValidation.product.delete))
.delete(productController.deleteProdutc);

module.exports = router;
