const models = require('../models');
const express = require('express');

const router = express.Router(); 


router.get('/', (req, res) => {
  models.OrderDetail.findAll({
    attributes: ['id', 'quantity', 'price'],
  }).then((orderDetails) => {
    res.status(200).json(orderDetails);
  });
});

router.post('/create', (req, res) => {
  models.OrderDetail.create({
    ProductId: req.body.ProductId,
    OrderId: req.body.OrderId,
    quantity: req.body.quantity,
    price: req.body.price,
  }).then((orderDetails) => {
    res.status(201).json({ id: orderDetails.get('id'), 
                           date: orderDetails.get('quantity'), 
                           track_number: orderDetails.get('price')});
  });
});


router.put('/:id/edit', (req, res) => {
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


router.delete('/:id/destroy', (req, res) => {
  models.OrderDetail.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
