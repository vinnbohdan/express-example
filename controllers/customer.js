const models = require('../models');
const _ = require('lodash');

function getByCustomerEmail(req, res) {
  models.Customer.findAll({
    attributes: ['id'],
    where: {
      email: req.query.email,
    },
  }).then((customer) => {
    const isExist = !_.isEmpty(customer);
    res.status(200).json({ isExist });
  });
}
module.exports = {
  getByCustomerEmail,
};
