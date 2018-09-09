const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

function getAllSubcategories(req, res) {
  const page = req.query.page || 1;
  models.Subcategory.findAndCountAll({
    attributes: ['id', 'name'],
    offset: (page - 1) * config.pageLimit,
    limit: config.pageLimit,
  })
  .then((subcategories) => {
    res.set('x-total-count', subcategories.count);
    res.status(200).json(subcategories.rows);
  });
}
function getByCategoryId(req, res) {
  const page = req.query.page || 1;
  models.Subcategory.findAndCountAll({
    attributes: ['id', 'name'],
    offset: (page - 1) * config.pageLimit,
    limit: config.pageLimit,
    where: {
      CategoryId: req.params.id,
    },
  })
  .then((subcategories) => {
    res.set('x-total-count', subcategories.count);
    res.status(200).json(subcategories.rows);
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
  getByCategoryId,
  postSubcategory,
  putSubcategory,
  deleteSubcategory,
};
