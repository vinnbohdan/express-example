const models = require('../models');
const express = require('express');  /* eslint linebreak-style: ["error", "windows"] */
const validate = require('express-validation');
const validation = require('../validation');

const router = express.Router(); /* eslint new-cap: [2, {"capIsNewExceptions": ["Router"]}] */

router.get('/', (req, res) => {
  models.OrderDetail.findAll({
    attributes: ['id', 'quantity', 'price'],
  }).then((orderDetails) => {
    res.status(200).json(orderDetails);
  });
});

router.route('/create')
.post(validate(validation.orderDetailValidation.create))
.post((req, res) => {
  models.OrderDetail.create({
    ProductId: req.body.ProductId,
    OrderId: req.body.OrderId,
    quantity: req.body.quantity,
    price: req.body.price,
  }).then((orderDetails) => {
    res.status(201).json({ id: orderDetails.get('id'), date: orderDetails.get('quantity'), price: orderDetails.get('price') });
  });
});


router.route('/:id(\\d+)/edit')
.put(validate(validation.orderDetailValidation.update))
.put((req, res) => {
  models.OrderDetail.update({
    ProductId: req.body.ProductId,
    OrderId: req.body.OrderId,
    quantity: req.body.quantity,
    price: req.body.price,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
});


router.route('/:id(\\d+)/destroy')
.delete(validate(validation.orderDetailValidation.delete))
.delete((req, res) => {
  models.OrderDetail.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
