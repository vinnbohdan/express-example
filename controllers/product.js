const models = require('../models');

function getAllProducts(req, res) {
  models.Product.findAll({
    attributes: ['name', 'quantity', 'cost'],
  }).then((products) => {
    res.status(200).json(products);
  });
}

function postProduct(req, res) {
  models.Product.create({
    CategoryId: req.body.categoryid,
    SubcategoryId: req.body.subcategoryid,
    name: req.body.name,
    quantity: req.body.quantity,
    cost: req.body.cost,
    status: req.body.status,
    createdBy: req.body.createdBy,
    editedBy: req.body.editedBy,
  }).then((newproduct) => {
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
