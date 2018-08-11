
module.exports = (sequelize, DataTypes) => {
  let Customer = sequelize.define('Customer', {
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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
    },
    city: {
      type: DataTypes.STRING,
    },
    postcode: {
      type: DataTypes.INTEGER,
    },
    address: {
      type: DataTypes.STRING,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: { isUrl: true }
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

  Customer.associate = function (models) {
    models.Customer.hasMany(models.Order);
    models.Customer.hasMany(models.PaymentMethod);
  };

  return Customer;
};
