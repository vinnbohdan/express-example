const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const checkOutController = require('../controllers/checkOut');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .post(validate(paramValidation.checkOut.postCheckOut))
  .post(checkOutController.postCheckOut);

module.exports = router;
