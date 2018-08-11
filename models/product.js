'use strict';

// Таблица товаров (Связана с категориями и подкатегориями)
module.exports = (sequelize, DataTypes) => {
  var Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,       // название товара
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,      // к-во товара на складе
      defaultValue: 0,
      validate: { isNumeric: true }
    },
    cost: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: { isNumeric: true }
    },
    status: {  // товар в наличии, заканчивается, в дороге, снят с производства, нет в наличии
      type: DataTypes.ENUM('product on the road', 'not available', 'product end', 'discontinued', 'in stock'),
      defaultValue: 'in stock'
    },
    icon: {
      type: DataTypes.STRING, // картинка товара
      validate: { isUrl: true }
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

  // Таблица товаров (Связана с категориями и подкатегориями)
  Product.associate = function (models) {
    models.Product.hasMany(models.OrderDetail);
    models.Product.hasMany(models.Specification);
    models.Product.belongsTo(models.Category, {
      foreignKey: { allowNull: false },
    });
    models.Product.belongsTo(models.Subcategory, {
      foreignKey: { allowNull: false },
    });
  };

  return Product;
};
