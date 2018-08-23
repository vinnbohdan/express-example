const express = require('express');
const validate = require('express-validation');
const validation = require('../config/validation');
const subCategoryController = require('../controllers/subcategory');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(subCategoryController.getAllSubcategories);

router.route('/create')
.post(validate(validation.subCategoryValidation.create))
.post(subCategoryController.postSubcategory);

router.route('/:id(\\d+)/edit')
.put(validate(validation.subCategoryValidation.update))
.put(subCategoryController.putSubcategory);


router.route('/:id(\\d+)/destroy')
.delete(validate(validation.subCategoryValidation.delete))
.delete(subCategoryController.deleteSubcategory);


module.exports = router;
