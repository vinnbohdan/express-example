const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

function getAllCategories(req, res) {
  const page = req.query.page || 1;
  models.Category.findAndCountAll({
    attributes: ['id', 'name'],
    offset: (page - 1) * config.pageLimit,
    limit: config.pageLimit,
    include: [
      {
        model: models.Subcategory,
        attributes: ['id', 'name'],
      },
    ],
  })
  .then((categories) => {
    res.set('x-total-count', categories.count);
    res.status(200).json(categories.rows);
  });
}

function postCategory(req, res) {
  models.Category
  .create(req.body)
  .then((newcategory) => {
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
