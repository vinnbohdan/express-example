const async = require('async');
const models = require('../models');

function postCheckOut(req, res) {
  async.auto({
    createCustomer(callback) {
      models.Customer
        .create({
          role: 'user',
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: '111111',
          salt: '111111',
          phone: req.body.phone,
          country: req.body.country,
          city: req.body.city,
          postcode: req.body.postcode,
          address: req.body.address,
        })
        .then((newcustomer) => {
          const result = { CustomerId: newcustomer.get('id') };
          console.log('customer was created', result);
          callback(null, result);
        });
    },
    createOrder: ['createCustomer', function (results, callback) {
      models.Order
        .create({
          CustomerId: results.createCustomer.CustomerId,
          date: new Date(),
          total: 0,
          total_with_discount: 0,
          status: 'pending',
          country: req.body.country,
          city: req.body.city,
          postcode: req.body.postcode,
          address: req.body.address,
          createdBy: results.createCustomer.CustomerId,
        })
        .then((neworder) => {
          const result = { OrderId: neworder.get('id') };
          console.log('order was created', result);
          callback(null, result);
        });
    }],
    createOrderDetail: ['createOrder', function (results, callback) {
      const promises = [];
      req.body.list.forEach((elem) => {
        const newPromise = models.OrderDetail
          .create({
            OrderId: results.createOrder.OrderId,
            ProductId: elem.id,
            quantity: elem.quantity,
            price: elem.price,
          });
        promises.push(newPromise);
      });
      return Promise.all(promises).then((promicesresults) => {
        console.log('orderDetails were created');
        let total = 0;
        promicesresults.forEach((prices) => {
          total += parseInt(prices.price, 10) * parseInt(prices.quantity, 10);
        });
        callback(null, total, results.createOrder.OrderId);
      });
    }],
    updateOrder: ['createOrderDetail', function (results, callback) {
      // console.log('---------', results.createOrderDetail[0]);
      models.Order
        .update({
          total: results.createOrderDetail[0],
          total_with_discount: results.createOrderDetail[0],
        }, {
          where: { id: results.createOrder.OrderId },
        })
        .then(() => {
          console.log('order was updated', results.createOrder.OrderId);
          callback(null, results.createOrder.OrderId);
        });
    }],
  }, (err, results) => {
    console.log('err = ', err);
    res.status(201).json({ id: results.updateOrder });
  });
}

module.exports = {
  postCheckOut,
};
