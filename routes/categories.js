const express = require('express');
const validate = require('express-validation');
const validation = require('../config/validation');
const categoryController = require('../controllers/category');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/').get(categoryController.getAllCategories);

router.route('/create')
.post(validate(validation.categoryValidation.create))
.post(categoryController.postCategory);

router.route('/:id(\\d+)/edit')
.put(validate(validation.categoryValidation.update))
.put(categoryController.putCategory);


router.route('/:id(\\d+)/destroy')
.delete(validate(validation.categoryValidation.delete))
.delete(categoryController.deleteCategory);


module.exports = router;
