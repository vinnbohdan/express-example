const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

function getProducts(req, res) {
  const page = req.query.page || 1;
  const isHot = req.query.isHot || false;
  const search = req.query.search || '';
  let conditions;
  if (isHot) {
    conditions = {
      attributes: ['id', 'name', 'cost'],
      offset: (page - 1) * config.pageLimit,
      limit: config.pageLimit,
      where: {
        isHotprice: isHot,
      },
    };
  } else if (search) {
    conditions = {
      attributes: ['id', 'name', 'cost'],
      offset: (page - 1) * config.pageLimit,
      limit: config.pageLimit,
      where: {
        name: {
          $like: `${search}%`,
        },
      },
    };
  } else {
    conditions = {
      attributes: ['id', 'name', 'cost'],
      offset: (page - 1) * config.pageLimit,
      limit: config.pageLimit,
    };
  }
  models.Product.findAndCountAll(conditions)
    .then((products) => {
      res.set('x-total-count', products.count);
      res.status(200).json(products.rows);
    });
}

function getByProdId(req, res) {
  const page = req.query.page || 1;
  models.Product.findAndCountAll({
    attributes: ['id', 'name', 'quantity', 'cost'],
    offset: (page - 1) * config.pageLimit,
    limit: config.pageLimit,
    where: {
      SubcategoryId: req.params.id,
    },
  }).then((products) => {
    res.set('x-total-count', products.count);
    res.status(200).json(products.rows);
  });
}

function postProduct(req, res) {
  models.Product
  .create(req.body)
  .then((newproduct) => {
    res.status(201).json({ id: newproduct.get('id') });
  });
}

function putProduct(req, res) {
  models.Product.update({
    cost: req.body.cost,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
}

function deleteProduct(req, res) {
  models.Product.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  getProducts,
  getByProdId,
  postProduct,
  putProduct,
  deleteProduct,
};
