'use strict';
module.exports = (sequelize, DataTypes) => {
  var OrderDetail = sequelize.define('OrderDetail', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    // id_product: {
    //   type: DataTypes.INTEGER,
    //   foreignKey: true,
    //   allowNull: false,
    //   references: {
    //     model: 'product',
    //     key: 'id'
    //   }
    // },
    // id_ored: {
    //   type: DataTypes.INTEGER,
    //   foreignKey: true,
    //   allowNull: false,
    //   references: {
    //     model: 'order',
    //     key: 'id'
    //   }
    // },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  OrderDetail.associate = function (models) {
    models.OrderDetail.belongsTo(models.Order, {
      onDelete: 'CASCADE',
      foreignKey: {
        allowNull: false
      }
    });
    // models.OrderDetail.hasMany(models.Product);
  };

  return OrderDetail;
};
