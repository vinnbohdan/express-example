const models = require('../models');

function getAllSubcategories(req, res) {
  models.Subcategory.findAll({
    attributes: ['id', 'name'],
  })
  .then((subcategories) => {
    res.status(200).json(subcategories);
  });
}

function getSubcategories(req, res) {
  models.Subcategory.findAll({
    attributes: ['id', 'name'],
    where: {
      CategoryId: req.params.id,
    },
  })
  .then((subcategories) => {
    res.status(200).json(subcategories);
  });
}

function postSubcategory(req, res) {
  models.Subcategory
  .create(req.body)
  .then((newsubcategory) => {
    res.status(201).json({ id: newsubcategory.get('id') });
  });
}

function putSubcategory(req, res) {
  models.Subcategory.update({
    name: req.body.name,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
}

function deleteSubcategory(req, res) {
  models.Subcategory.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  getAllSubcategories,
  getSubcategories,
  postSubcategory,
  putSubcategory,
  deleteSubcategory,
};
