module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    icon: {
      type: DataTypes.STRING,
      validate: { isUrl: true },
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

  Category.associate = function (models) {
    models.Category.hasMany(models.Subcategory, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.Category.hasMany(models.Product, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Category;
};
