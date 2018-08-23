const express = require('express');
const validate = require('express-validation');
const validation = require('../config/validation');
const customerController = require('../controllers/customer');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
.get(validate(validation.customerValidation.read))
.get(customerController.GetCustomers);

router.route('/create')
.post(validate(validation.customerValidation.create))
.post(customerController.CreateCustomer);

router.route('/:id(\\d+)/edit')
.put(validate(validation.customerValidation.update))
.put(customerController.EditCustomer);


router.route('/:id(\\d+)/destroy')
.delete(validate(validation.customerValidation.delete))
.delete(customerController.DeleteCustomer);

module.exports = router;
