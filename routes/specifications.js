const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const specificationController = require('../controllers/specification');

const router = express.Router(); // eslint-disable-line new-cap

// router.route('/')
//   .get(validate(paramValidation.specification.getSpecifiedProducts))
//   .get(specificationController.getSpecifiedProducts);

router.route('/:id')
  .get(validate(paramValidation.specification.getByCategoryId))
  .get(specificationController.getBySubcategoryId);

module.exports = router;
