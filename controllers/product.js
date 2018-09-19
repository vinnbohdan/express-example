const models = require('../models');
const qs = require('qs');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

function getProducts(req, res) {
  const page = req.query.page || 1;
  const isHot = req.query.isHot || false;
  if (req.query.search === '') {
    res.status(204).end();
    return;
  }
  if (typeof req.query.sort === 'undefined') {
    req.query.sort = 'cost=ASC';
  }
  const search = req.query.search;
  const sort = qs.parse(req.query.sort);

  let whereConditional;
  if (isHot) {
    whereConditional = {
      isHotprice: isHot,
    };
  } else if (search) {
    whereConditional = {
      name: {
        $like: `${search}%`,
      },
    };
  } else {
    whereConditional = {};
  }
  models.Product.findAndCountAll({
    attributes: ['id', 'name', 'cost', 'icon'],
    offset: (page - 1) * parseInt(config.pageLimit, 10),
    limit: parseInt(config.pageLimit, 10),
    where: whereConditional,
    order: [
      [Object.keys(sort)[0], Object.values(sort)[0]],
    ],
  })
    .then((products) => {
      res.set('x-total-count', products.count);
      res.status(200).json(products.rows);
    });
}

function getById(req, res) {
  models.Product.findAll({
    attributes: ['id', 'name', 'description', 'quantity', 'status', 'cost'],
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: models.Subcategory,
        attributes: ['id', 'name'],
      },
      {
        model: models.Category,
        attributes: ['id', 'name'],
      },
    ],
  }).then((product) => {
    res.status(200).json(product);
  });
}

function getBySubcategoryId(req, res) {
  const page = req.query.page || 1;
  if (typeof req.query.sort === 'undefined') {
    req.query.sort = 'cost=ASC';
  }
  const sort = qs.parse(req.query.sort);
  models.Product.findAndCountAll({
    attributes: ['id', 'name', 'quantity', 'cost'],
    offset: (page - 1) * parseInt(config.pageLimit, 10),
    limit: parseInt(config.pageLimit, 10),
    where: {
      SubcategoryId: req.params.id,
    },
    order: [
      [Object.keys(sort)[0], Object.values(sort)[0]],
    ],
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
  getById,
  getBySubcategoryId,
  postProduct,
  putProduct,
  deleteProduct,
};
