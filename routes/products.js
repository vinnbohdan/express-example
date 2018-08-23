const express = require('express');
const validate = require('express-validation');
const validation = require('../config/validation');
const productController = require('../controllers/product');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
.get(validate(validation.productValidation.getPage))
.get(productController.getAllProducts);

router.route('/create')
.post(validate(validation.productValidation.create))
.post(productController.postProduct);

router.route('/:id(\\d+)/edit')
.put(validate(validation.productValidation.update))
.put(productController.putProduct);


router.route('/:id(\\d+)/destroy')
.delete(validate(validation.productValidation.delete))
.delete(productController.deleteProduct);


module.exports = router;
