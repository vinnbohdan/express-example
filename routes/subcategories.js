const models = require('../models');
const express = require('express');
const validate = require('express-validation');
const paramValidation = require('../paramValidationSubcategory');

const router = express.Router(); // eslint-disable-line new-cap

// return list of subcategories
router.get('/', (req, res) => {
  models.Subcategory.findAll({
    attributes: ['id', 'name'],
  }).then((subcategories) => {
    res.status(200).json(subcategories);
  });
});

// create new instance and return id
router.route('/')
.post(validate(paramValidation.create))
.post((req, res) => {
  models.Subcategory.create({
    name: req.body.name,
    createdBy: req.body.createdBy,
    editedBy: req.body.editedBy,
  }).then((newsubcategory) => {
    res.status(201).json({ id: newsubcategory.get('id') });
  });
});

// update instance
router.route('/:id')
.put(validate(paramValidation.update))
.put((req, res) => {
  models.Subcategory.update({
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
  models.Subcategory.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
