

// Таблица подкатегорий (На нее ссылается таблица товаров. Она сама ссылается на таблицу категорий)
module.exports = (sequelize, DataTypes) => {
  let Subcategory = sequelize.define('Subcategory', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,       // название подкатегории
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING, // картинка подкатегории
      validate: { isUrl: true },
    },
    removedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    editedBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Таблица подкатегорий (ссылается на таблицу категорий)
  Subcategory.associate = function (models) {
    models.Subcategory.hasMany(models.Specification);
    models.Subcategory.hasMany(models.Product);
    models.Subcategory.belongsTo(models.Category, {
      foreignKey: { allowNull: false },
    });
  };

  return Subcategory;
};
