module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    cardnumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  PaymentMethod.associate = function (models) {
    models.PaymentMethod.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return PaymentMethod;
};
