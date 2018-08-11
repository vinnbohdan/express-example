'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderDetail = sequelize.define('OrderDetail', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });

  OrderDetail.associate = function (models) {
    models.OrderDetail.belongsTo(models.Order, {
      foreignKey: {
        allowNull: false
      },
    });
    models.OrderDetail.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      },
    });
  };

  return OrderDetail;
};
