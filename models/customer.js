module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isNumeric: true },
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

  Customer.associate = function (models) {
    models.Customer.hasMany(models.Order);
    models.Customer.hasMany(models.PaymentMethod);
  };

  return Customer;
};
