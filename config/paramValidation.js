const Joi = require('joi');

module.exports = {
  product: {
    getProducts: {
      query: {
        isHot: Joi.boolean(),
        page: Joi.number().integer().min(1),
        search: Joi.string().allow('').optional(),
        sort: Joi.object().optional(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    getById: {
      params: {
        id: Joi.number().integer().min(1),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    getBySubcategoryId: {
      query: {
        page: Joi.number().integer().min(1),
        sort: Joi.object().optional(),
      },
      params: {
        id: Joi.number().integer().min(1),
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
  },
  category: {
    getAllCategories: {
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
  },
  subcategory: {
    getAllSubcategories: {
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
    getByCategoryId: {
      query: {
        page: Joi.number().integer().min(1),
      },
      params: {
        id: Joi.number().integer().min(1),
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
  },
  specification: {
    getSpecifiedProducts: {
      query: {
        page: Joi.number().integer().min(1),
        filter: Joi.object().optional(),
        sort: Joi.object().optional(),
      },
      params: {
        id: Joi.number().integer().min(1),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
    getByCategoryId: {
      query: {
        page: Joi.number().integer().min(1),
      },
      params: {
        id: Joi.number().integer().min(1),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
  },
  checkOut: {
    postCheckOut: {
      body: {
        list: Joi.array().items(Joi.object()).required(),
        first_name: Joi.string().alphanum().min(2).max(20).required(), // eslint-disable-line
        last_name: Joi.string().alphanum().min(2).max(20).required(), // eslint-disable-line
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        phone: Joi.number().precision(10).required(),
        address: Joi.string().min(2).max(40).required(),
        city: Joi.string().alphanum().min(2).max(20).required(), // eslint-disable-line
        country: Joi.string().alphanum().min(2).max(20).required(), // eslint-disable-line
        postcode: Joi.number().precision(10).required(),
        cardNumber: Joi.number().precision(16).required(),
      },
      options: {
        allowUnknownBody: false,
        allowUnknownHeaders: false,
        allowUnknownQuery: false,
        allowUnknownParams: false,
      },
    },
  },
  customer: {
    getByCustomerEmail: {
      query: {
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
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
