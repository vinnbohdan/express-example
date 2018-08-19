const models = require('../models');

function getAllCategories(req, res) {
  models.Category.findAll({
    attributes: ['id', 'name'],
  }).then((categories) => {
    res.status(200).json(categories);
  });
}

function postCategory(req, res) {
  models.Category.create({
    name: req.body.name,
    createdBy: req.body.createdBy,
    editedBy: req.body.editedBy,
  }).then((newcategory) => {
    res.status(201).json({ id: newcategory.get('id') });
  });
}

function putCategory(req, res) {
  models.Category.update({
    name: req.body.name,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
}

function deleteCategory(req, res) {
  models.Category.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  getAllCategories,
  postCategory,
  putCategory,
  deleteCategory,
};
