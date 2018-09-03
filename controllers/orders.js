const models = require('../models');   /* eslint linebreak-style: ["error", "windows"] */

function GetOrders(req, res) {
  models.Order.findAll({
    attributes: ['id', 'date', 'total', 'track_number'],
  }).then((orders) => {
    res.status(200).json(orders);
  });
}

function CreateOrders(req, res) {
  models.Order
  .create(req.body).then((order) => {
    res.status(201).json({ id: order.get('id')});
  });
}

function EditOrders(req, res) {
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
}

function DeleteOrders(req, res) {
  models.Order.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  GetOrders,
  CreateOrders,
  EditOrders,
  DeleteOrders,
};
