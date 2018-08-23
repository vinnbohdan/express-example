const express = require('express');
const validate = require('express-validation');
const validation = require('../config/validation');
const ordersController = require('../controllers/orders');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(ordersController.GetOrders);

router.route('/create')
.post(validate(validation.customerValidation.create))
.post(ordersController.CreateOrders);

router.route('/:id(\\d+)/edit')
.put(validate(validation.customerValidation.update))
.put(ordersController.EditOrders);

router.route('/:id(\\d+)/destroy')
.delete(validate(validation.customerValidation.delete))
.delete(ordersController.DeleteOrders);

module.exports = router;
