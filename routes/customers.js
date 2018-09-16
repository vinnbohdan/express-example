const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const customerController = require('../controllers/customer');

const router = express.Router();  // eslint-disable-line new-cap

router.route('/')
  .get(validate(paramValidation.customer.getByCustomerEmail))
  .get(customerController.getByCustomerEmail);

module.exports = router;
