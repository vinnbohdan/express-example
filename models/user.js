
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
  });

  /* eslint func-names: ["error", "never"] */
  User.associate = function (models) {
    models.User.hasMany(models.Task);
  };

  return User;
};
