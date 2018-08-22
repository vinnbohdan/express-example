const models = require('../models');

function getAllProducts(req, res) {
  const page = req.query.page || 1;
  models.Product.findAndCountAll({
    attributes: ['id', 'name', 'quantity', 'cost'],
    offset: (page - 1) * 2,
    limit: 2,
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

function deleteProdutc(req, res) {
  models.Product.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  getAllProducts,
  postProduct,
  putProduct,
  deleteProdutc,
};
