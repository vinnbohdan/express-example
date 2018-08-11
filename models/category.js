'use strict';

// Таблица категорий (На нее ссылается таблица подкатегорий и товаров)
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,       // название категории
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
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

  // Таблица категорий (Имеет много категорий и товаров)
  Category.associate = function (models) {
    models.Category.hasMany(models.Subcategory);
    models.Category.hasMany(models.Product);
  };

  return Category;
};
