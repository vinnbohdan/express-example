const models = require('../models');
const express = require('express');

const router = express.Router(); 


router.get('/', (req, res) => {
  models.Customer.findAll({
    attributes: ['first_name', 'last_name', 'email'],
  }).then((customers) => {
    res.status(200).json(customers);
  });
});


router.post('/create', (req, res) => {
  models.Customer.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    createdBy: req.body.createdBy,
    editedBy: req.body.editedBy,
  }).then((customer) => {
    res.status(201).json({ id: customer.get('id'), firstName: customer.get('first_name')});
  });
});


router.put('/:id/edit', (req, res) => {
  models.Customer.update({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
  }, {
    where: { id: req.params.id },
  }).then(() => {
    res.status(200).end();
  });
});


router.delete('/:id/destroy', (req, res) => {
  models.Customer.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
