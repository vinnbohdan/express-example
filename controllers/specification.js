const sequelize = require('sequelize');
const qs = require('qs');
const _ = require('lodash');
const async = require('async');
const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

function getSpecifiedProducts(req, res) {
  let whereObject = {};
  const page = req.query.page || 1;
  const filter = qs.parse(req.query.filter) || {};
  console.log(filter);
  if (typeof req.query.sort === 'undefined') {
    req.query.sort = 'cost=ASC';
  }
  const sort = qs.parse(req.query.sort);
  const result = [];
  _.forEach(filter, (value, name) => {
    result.push({ $and: [{ name }, { value: { $or: value } }] });
  });
  if (!_.isEmpty(result)) {
    whereObject = { $or: result };
  }
  whereObject.SubcategoryId = req.params.id;
  console.log(whereObject);

  models.Specification.findAndCountAll({
    attributes: ['Product.id'],
    offset: (page - 1) * parseInt(config.pageLimit, 10),
    limit: parseInt(config.pageLimit, 10),
    where: whereObject,
    include: {
      model: models.Product,
      attributes: ['id', 'name', 'cost'],
    },
    group: ['Specification.ProductId'],
    order: [
      [models.Product, Object.keys(sort)[0], Object.values(sort)[0]],
    ],
  })
    .then((products) => {
      res.set('x-total-count', products.count);
      res.status(200).json(_.map(products.rows, 'Product'));
    });
}

function getBySubcategoryId(req, res) {
  const arrayObj = [];
  models.Specification.findAll({
    attributes: [[sequelize.fn('DISTINCT', sequelize.col('name')), 'spec1']],
    where: {
      SubcategoryId: req.params.id,
    },
  })
    .then((specifications) => {
      async.each(specifications, (elem, callback) => {
        models.Specification.findAll({
          attributes: [[sequelize.fn('DISTINCT', sequelize.col('value')), 'spec2']],
          where: {
            name: elem.dataValues.spec1,
            SubcategoryId: req.params.id,
          },
        }).then((result) => {
          const arraySpec2 = [];
          async.each(result, (value, callback2) => {
            if (value.dataValues.spec2) {
              arraySpec2.push(value.dataValues.spec2);
            }
            callback2();
          }, () => {
            arrayObj.push({ key: elem.dataValues.spec1, value: arraySpec2 });
          });
          callback();
        });
      }, () => {
        res.status(200).json(arrayObj);
      });
    });
}
module.exports = {
  getBySubcategoryId,
  getSpecifiedProducts,
};
