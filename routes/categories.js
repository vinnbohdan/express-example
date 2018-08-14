const models = require('../models');
const express = require('express');

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
router.post('/', (req, res) => {
  models.Category.create({
    name: req.body.name,
    createdBy: req.body.createdBy,
    editedBy: req.body.editedBy,
  }).then((newcategory) => {
    res.status(201).json({ id: newcategory.get('id') });
  });
});

// update instance
router.put('/:id', (req, res) => {
  models.Category.update({
    name: req.body.newname,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
});

// delete instance
router.delete('/:id', (req, res) => {
  models.Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
