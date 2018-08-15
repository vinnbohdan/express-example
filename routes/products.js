const models = require('../models');
const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap

// return list of products
router.get('/', (req, res) => {
  models.Product.findAll({
    attributes: ['name', 'quantity', 'cost'],
  }).then((products) => {
    res.status(200).json(products);
  });
});

// return list of products cheaper than 'cost'
// router.get('/:cost', (req, res) => {
//   models.Product.findAll({
//     attributes: ['name', 'quantity', 'cost'],
//     where: {
//       cost: {
//         $lte: req.params.cost,
//       },
//     },
//     include: [
//       {
//         model: models.Category,
//         attributes: ['name'],
//       },
//       {
//         model: models.Subcategory,
//         attributes: ['name'],
//       },
//     ],
//   }).then((products) => {
//     res.status(200).json(products);
//   });
// });

// create new instance and return id and name
router.post('/', (req, res) => {
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
});

// update instance
router.put('/:id', (req, res) => {
  models.Product.update({
    cost: req.body.newcost,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
});

// delete instance
router.delete('/:id', (req, res) => {
  models.Product.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
