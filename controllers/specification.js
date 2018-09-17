const sequelize = require('sequelize');
const qs = require('qs');
const _ = require('lodash');
const async = require('async');
const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];

function getSpecifiedProducts(req, res) {
  const page = req.query.page || 1;
  const filter = qs.parse(req.query.filter) || {};
  console.log(filter);
  const result = [];
  _.forEach(filter, (value, name) => {
    result.push({ $and: [{ name }, { value: { $or: value } }] });
  });
  const whereObject = { $or: result };
  console.log(whereObject);

  models.Specification.findAndCountAll({
    attributes: ['id'],
    offset: (page - 1) * parseInt(config.pageLimit, 10),
    limit: parseInt(config.pageLimit, 10),
    where: whereObject,
    include: {
      model: models.Product,
      attributes: ['id', 'name', 'cost'],
    },
  })
    .then((products) => {
      res.set('x-total-count', products.count);
      res.status(200).json(products.rows);
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
