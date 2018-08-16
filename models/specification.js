module.exports = (sequelize, DataTypes) => {
  const Specification = sequelize.define('Specification', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
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
  Specification.associate = function (models) {
    models.Specification.belongsTo(models.Product);
    models.Specification.belongsTo(models.Subcategory);
  };

  return Specification;
};
