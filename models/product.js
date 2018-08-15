module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: { isNumeric: true },
      allowNull: false,
    },
    cost: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: { isNumeric: true },
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('product on the road', 'not available', 'product end', 'discontinued', 'in stock'), // eslint-disable-line new-cap
      allowNull: false,
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
      allowNull: false,
    },
  });

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
