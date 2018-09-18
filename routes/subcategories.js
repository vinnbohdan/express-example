const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const subcategoryController = require('../controllers/subcategory');
const productController = require('../controllers/product');
const specificationController = require('../controllers/specification');

const router = express.Router(); // eslint-disable-line new-cap

// return list of subcategories
router.route('/')
.get(validate(paramValidation.subcategory.getAllSubcategories))
.get(subcategoryController.getAllSubcategories);

router.route('/:id')
.get(validate(paramValidation.subcategory.getByCategoryId))
.get(subcategoryController.getByCategoryId);

router.route('/:id/products')
  .get(validate(paramValidation.product.getBySubcategoryId))
  .get(productController.getBySubcategoryId);

router.route('/:id/specifications')
  .get(validate(paramValidation.specification.getSpecifiedProducts))
  .get(specificationController.getSpecifiedProducts);

// create new instance and return id
router.route('/')
.post(validate(paramValidation.subcategory.create))
.post(subcategoryController.postSubcategory);

// update instance
router.route('/:id')
.put(validate(paramValidation.subcategory.update))
.put(subcategoryController.putSubcategory);

// delete instance
router.route('/:id')
.delete(validate(paramValidation.subcategory.delete))
.delete(subcategoryController.deleteSubcategory);

module.exports = router;
