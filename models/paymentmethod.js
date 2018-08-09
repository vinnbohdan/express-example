'use strict';
module.exports = (sequelize, DataTypes) => {
  var PaymentMethod = sequelize.define('PaymentMethod', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    // id_customer: {
    //   type: DataTypes.INTEGER,
    //   foreignKey: true,
    //   allowNull: false,
    //   references: {
    //     model: 'customer',
    //     key: 'id'
    //   }
    // },

    cardnumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  PaymentMethod.associate = function (models) {
    models.PaymentMethod.belongsTo(models.Customer, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PaymentMethod;
};
