module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('Subcategory', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
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

  /* eslint func-names: ["error", "never"] */
  Subcategory.associate = function (models) {
    models.Subcategory.hasMany(models.Specification);
    models.Subcategory.hasMany(models.Product);
    models.Subcategory.belongsTo(models.Category, {
      foreignKey: { allowNull: false },
    });
  };

  return Subcategory;
};
