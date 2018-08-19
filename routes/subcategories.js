const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const subcategoryController = require('../controllers/subcategory');

const router = express.Router(); // eslint-disable-line new-cap

// return list of subcategories
router.route('/')
.get(subcategoryController.getAllSubcategories);

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
