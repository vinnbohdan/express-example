const Joi = require('joi');

module.exports = {
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
};
