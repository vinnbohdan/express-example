const Joi = require('joi');  /* eslint linebreak-style: ["error", "windows"] */

const customerValidation = {
  create: {
    body: {
      first_name: Joi.string().alphanum().min(4).max(30)
      .required(),
      last_name: Joi.string().alphanum().min(4).max(30)
      .required(),
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      // phone is required
      // and must be a string of the format XXX-XXX-XXXX
      // where X is a digit (0-9)
      phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/).required(),
      createdBy: Joi.number().required(),
      editedBy: Joi.number().required(),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
  update: {
    params: {
      id: Joi.number().min(1).required(),
    },
    body: {
      first_name: Joi.string().alphanum().min(4).max(30),
      last_name: Joi.string().alphanum().min(4).max(30),
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
      // phone is required
      // and must be a string of the format XXX-XXX-XXXX
      // where X is a digit (0-9)
      phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/),
      createdBy: Joi.number().min(1),
      editedBy: Joi.number().min(1),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
  delete: {
    params: {
      id: Joi.number().min(1).required(),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
};

const orderValidation = {
  create: {
    body: {
      CustomerId: Joi.number().integer().min(1).required(),
      date: Joi.date().iso().max('now'),
      total: Joi.number().positive().precision(2).integer()
      .required(),
      total_with_discount: Joi.number().integer().positive().precision(2)
      .required(),
      country: Joi.string().min(4).max(30)
      .required(),
      city: Joi.string().min(4).max(30)
      .required(),
      postcode: Joi.string().regex(/^[0-9]{5,80}$/).required(),
      address: Joi.string().min(5).max(70).required(),
      track_number: Joi.string().regex(/^[0-9]{14}$/).required(),
      createdBy: Joi.number().min(1).required(),
      editedBy: Joi.number().min(1).required(),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
  update: {
    params: {
      id: Joi.number().min(1).required(),
    },
    body: {
      CustomerId: Joi.number().integer().min(1),
      date: Joi.date().iso().max('now'),
      total: Joi.number().positive().precision(2).integer(),
      total_with_discount: Joi.number().integer().positive().precision(2),
      country: Joi.string().min(4).max(30),
      city: Joi.string().min(4).max(30),
      postcode: Joi.string().regex(/^[0-9]{5,80}$/),
      address: Joi.string().min(5).max(70),
      track_number: Joi.string().regex(/^[0-9]{14}$/),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
  delete: {
    params: {
      id: Joi.number().min(1).required(),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
};

const orderDetailValidation = {
  create: {
    body: {
      ProductId: Joi.number().integer().min(1).required(),
      OrderId: Joi.number().integer().min(1).required(),
      quantity: Joi.number().integer().positive().min(1)
      .required(),
      price: Joi.number().positive().precision(2).integer()
      .required(),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
  update: {
    params: {
      id: Joi.number().min(1).required(),
    },
    body: {
      ProductId: Joi.number().integer().min(1),
      OrderId: Joi.number().integer().min(1),
      quantity: Joi.number().integer().positive().min(1),
      price: Joi.number().positive().precision(2).integer(),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
  delete: {
    params: {
      id: Joi.number().min(1).required(),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
};

module.exports = {
  customerValidation,
  orderValidation,
  orderDetailValidation,
};
