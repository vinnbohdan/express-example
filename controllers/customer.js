const models = require('../models');   /* eslint linebreak-style: ["error", "windows"] */

function GetCustomers(req, res) {
  const limit = 2;   // number of records per page
  const page = parseInt(req.query.page, 10) || 1;      // page number
  let offset = limit * (page - 1);

  models.Customer.findAndCountAll({
    attributes: ['first_name', 'last_name', 'email'],
    limit: limit,
    offset: offset,
  }).then((customers) => {
    res.set('x-total-count', customers.count);
    res.status(200).json(customers.rows);
  });
}

function CreateCustomer(req, res) {
  models.Customer
  .create(req.body).then((customer) => {
    res.status(201).json({ id: customer.get('id'), firstName: customer.get('first_name'), lastName: customer.get('last_name') });
  });
}

function EditCustomer(req, res) {
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
}

function DeleteCustomer(req, res) {
  models.Customer.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(204).end();
  });
}

module.exports = {
  GetCustomers,
  CreateCustomer,
  EditCustomer,
  DeleteCustomer,
};
