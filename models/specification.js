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
      allowNull: true,
    },
  });

  Specification.associate = function (models) {
    models.Specification.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false,
      },
    });
    models.Specification.belongsTo(models.Subcategory, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Specification;
};
