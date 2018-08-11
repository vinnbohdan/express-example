'use strict';
module.exports = (sequelize, DataTypes) => {
  var Order = sequelize.define('Order', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    discount: {
      type: DataTypes.INTEGER
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_with_discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'checkout', 'product end', 'on the road', 'delivered'),
      defaultValue: 'pending'
    },
    country: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    postcode: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING
    },
    track_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    removedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    editedBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  Order.associate = function (models) {
    models.Order.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false
      }
    });
    models.Order.hasMany(models.OrderDetail);
  };

  return Order;
};
