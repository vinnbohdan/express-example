const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../config/paramValidation');
const categoryController = require('../controllers/category');

const router = express.Router(); // eslint-disable-line new-cap

// return list of categories
router.route('/')
.get(validate(paramValidation.category.getAll))
.get(categoryController.getAllCategories);

// create new instance and return id
router.route('/')
.post(validate(paramValidation.category.create))
.post(categoryController.postCategory);

// update instance
router.route('/:id')
.put(validate(paramValidation.category.update))
.put(categoryController.putCategory);

// delete instance
router.route('/:id')
.delete(validate(paramValidation.category.delete))
.delete(categoryController.deleteCategory);

module.exports = router;
