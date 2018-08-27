module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  });

  OrderDetail.associate = function (models) {
    models.OrderDetail.belongsTo(models.Order, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.OrderDetail.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return OrderDetail;
};
