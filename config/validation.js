const Joi = require('joi');  /* eslint linebreak-style: ["error", "windows"] */

const subCategoryValidation = {
  create: {
    body: {
      CategoryId: Joi.number().integer().min(1).required(),
      name: Joi.string().min(2).required(),
      description: Joi.string().min(2).optional(),
      icon: Joi.string().uri().optional(),
      createdBy: Joi.number().min(1).required(),
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
      CategoryId: Joi.number().integer().min(1).optional(),
      name: Joi.string().min(2).optional(),
      description: Joi.string().min(2).optional(),
      icon: Joi.string().uri().optional(),
      editedBy: Joi.number().min(1).required(),
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

const categoryValidation = {
  create: {
    body: {
      name: Joi.string().min(2).required(),
      description: Joi.string().min(2).optional(),
      icon: Joi.string().uri().optional(),
      createdBy: Joi.number().min(1).required(),
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
      name: Joi.string().min(2).optional(),
      description: Joi.string().min(2).optional(),
      icon: Joi.string().uri().optional(),
      editedBy: Joi.number().min(1).required(),
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

const productValidation = {
  getPage: {
    query: {
      page: Joi.number().integer().min(1),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
  create: {
    body: {
      CategoryId: Joi.number().integer().min(1).required(),
      SubcategoryId: Joi.number().integer().min(1).required(),
      name: Joi.string().min(2).required(),
      quantity: Joi.number().integer().min(0).required(),
      cost: Joi.number().min(0).required(),
      status: Joi.string().valid('product on the road', 'not available', 'product end', 'discontinued', 'in stock').required(),
      icon: Joi.string().uri().optional(),
      createdBy: Joi.number().min(1).required(),
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
      CategoryId: Joi.number().integer().min(1).optional(),
      SubcategoryId: Joi.number().integer().min(1).optional(),
      name: Joi.string().min(2).optional(),
      quantity: Joi.number().integer().min(0).optional(),
      cost: Joi.number().min(0).optional(),
      status: Joi.string().valid('product on the road', 'not available', 'product end', 'discontinued', 'in stock').optional(),
      icon: Joi.string().uri().optional(),
      editedBy: Joi.number().min(1).required(),
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

const customerValidation = {
  read: {
    query: {
      page: Joi.number().positive().integer(),
    },
    options: {
      allowUnknownBody: false,
      allowUnknownHeaders: false,
      allowUnknownQuery: false,
      allowUnknownParams: false,
    },
  },
  create: {
    body: {
      first_name: Joi.string().alphanum().min(4).max(30),
      last_name: Joi.string().alphanum().min(4).max(30),
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/),
      // phone is required
      // and must be a string of the format XXX-XXX-XXXX
      // where X is a digit (0-9)
      phone: Joi.string().regex(/^\d{3}-\d{3}-\d{4}$/),
      createdBy: Joi.number(),
      editedBy: Joi.number(),
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
  subCategoryValidation,
  categoryValidation,
  productValidation,
  customerValidation,
  orderValidation,
  orderDetailValidation,
};
