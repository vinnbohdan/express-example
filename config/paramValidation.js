const Joi = require('joi');

module.exports = {
  product: {
    create: {
      body: {
        categoryid: Joi.number().integer().min(1).required(),
        subcategoryid: Joi.number().integer().min(1).required(),
        name: Joi.string().min(2).required(),
        quantity: Joi.number().integer().min(0).required(),
        cost: Joi.number().min(0).required(),
        status: Joi.string().valid('product on the road', 'not available', 'product end', 'discontinued', 'in stock').required(),
        icon: Joi.string().uri().optional(),
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
        cost: Joi.number().min(0).required(),
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
  },
  category: {
    create: {
      body: {
        name: Joi.string().min(2).required(),
        description: Joi.string().min(2).optional(),
        icon: Joi.string().uri().optional(),
        removedAt: Joi.date().optional(),
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
        name: Joi.string().min(2).required(),
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
  },
  subcategory: {
    create: {
      body: {
        name: Joi.string().min(2).required(),
        description: Joi.string().min(2).optional(),
        icon: Joi.string().uri().optional(),
        removedAt: Joi.date().optional(),
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
        name: Joi.string().min(2).required(),
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
  },
};
