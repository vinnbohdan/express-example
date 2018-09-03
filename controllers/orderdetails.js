const models = require('../models');   /* eslint linebreak-style: ["error", "windows"] */

function GetOrderDetails(req, res) {
  models.OrderDetail.findAll({
    attributes: ['id', 'quantity', 'price'],
  }).then((orderDetails) => {
    res.status(200).json(orderDetails);
  });
}

function CreateOrderDetails(req, res) {
  models.OrderDetail
  .create(req.body).then((orderDetails) => {
    res.status(201).json({ id: orderDetails.get('id')});
  });
}

function EditOrderDetails(req, res) {
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
}

function DeleteOrderDetails(req, res) {
  models.OrderDetail.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  GetOrderDetails,
  CreateOrderDetails,
  EditOrderDetails,
  DeleteOrderDetails,
};
