const models = require('../models');
const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../paramValidationCategory');

const router = express.Router(); // eslint-disable-line new-cap

// return list of categories
router.get('/', (req, res) => {
  models.Category.findAll({
    attributes: ['id', 'name'],
  }).then((categories) => {
    res.status(200).json(categories);
  });
});

// create new instance and return id
router.route('/')
.post(validate(paramValidation.create))
.post((req, res) => {
  models.Category.create({
    name: req.body.name,
    createdBy: req.body.createdBy,
    editedBy: req.body.editedBy,
  }).then((newcategory) => {
    res.status(201).json({ id: newcategory.get('id') });
  });
});

// update instance
router.route('/:id')
.put(validate(paramValidation.update))
.put((req, res) => {
  models.Category.update({
    name: req.body.name,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
});

// delete instance
router.route('/:id')
.delete(validate(paramValidation.delete))
.delete((req, res) => {
  models.Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
