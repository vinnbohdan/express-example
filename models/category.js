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
      defaultValue: 'http://localhost:3000/public/images/default.png',
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
      allowNull: false,
    },
  });

  Category.associate = function (models) {
    models.Category.hasMany(models.Subcategory);
    models.Category.hasMany(models.Product);
  };

  return Category;
};
