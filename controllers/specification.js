const sequelize = require('sequelize');
const async = require('async');
const models = require('../models');

// const env = process.env.NODE_ENV || 'development';
// const config = require(`${__dirname}/../config/config.js`)[env];

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
        // console.log(arrayObj);
        res.status(200).json(arrayObj);
      });
    });
}
module.exports = {
  getBySubcategoryId,
};
