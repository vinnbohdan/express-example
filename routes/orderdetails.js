const express = require('express');  /* eslint linebreak-style: ["error", "windows"] */
const validate = require('express-validation');
const validation = require('../config/validation');
const orderDetailsController = require('../controllers/orderdetails');

const router = express.Router(); /* eslint new-cap: [2, {"capIsNewExceptions": ["Router"]}] */


router.route('/').get(orderDetailsController.GetOrderDetails);

router.route('/create')
.post(validate(validation.customerValidation.create))
.post(orderDetailsController.CreateOrderDetails);

router.route('/:id(\\d+)/edit')
.put(validate(validation.customerValidation.update))
.put(orderDetailsController.EditOrderDetails);


router.route('/:id(\\d+)/destroy')
.delete(validate(validation.customerValidation.delete))
.delete(orderDetailsController.DeleteOrderDetails);


module.exports = router;
