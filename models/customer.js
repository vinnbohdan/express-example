module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    role: {
      type: DataTypes.STRING,
      defaultValue: 'admin',
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'admin',
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'admin',
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
  //    unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
//      validate: { isUrl: true },
    },
    removedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    editedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  /* eslint func-names: ["error", "never"] */
  Customer.associate = function (models) {
    models.Customer.hasMany(models.Order);
    models.Customer.hasMany(models.PaymentMethod);
  };

  return Customer;
};
