'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentMethod = sequelize.define('PaymentMethod', {
    cardnumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  });

  PaymentMethod.associate = function (models) {
    models.PaymentMethod.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      },
    });
  };

  return PaymentMethod;
};
