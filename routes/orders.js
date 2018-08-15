const models = require('../models');
const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap


router.get('/', (req, res) => {
  models.Order.findAll({
    attributes: ['id', 'date', 'total', 'track_number'],
  }).then((orders) => {
    res.status(200).json(orders);
  });
});

router.post('/create', (req, res) => {
  models.Order.create({
    CustomerId: req.body.CustomerId,
    date: req.body.date,
    total: req.body.total,
    total_with_discount: req.body.total_with_discount,
    country: req.body.country,
    city: req.body.city,
    postcode: req.body.postcode,
    address: req.body.address,
    track_number: req.body.track_number,
    createdBy: req.body.createdBy,
    editedBy: req.body.editedBy,
  }).then((order) => {
    res.status(201).json({ id: order.get('id'),
      date: order.get('date'),
      track_number: order.get('track_number') });
  });
});


router.put('/:id/edit', (req, res) => {
  models.Order.update({
    CustomerId: req.body.CustomerId,
    date: req.body.date,
    total: req.body.total,
    total_with_discount: req.body.total_with_discount,
    country: req.body.country,
    city: req.body.city,
    postcode: req.body.postcode,
    address: req.body.address,
    track_number: req.body.track_number,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
});


router.delete('/:id/destroy', (req, res) => {
  models.Order.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
