module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_with_discount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('pending', 'checkout', 'product end', 'on the road', 'delivered'), // eslint-disable-line new-cap
      defaultValue: 'pending',
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    track_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    removedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    editedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Order.associate = function (models) {
    models.Order.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      },
    });

    models.Order.hasMany(models.OrderDetail);
  };

  return Order;
};
