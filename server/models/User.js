module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.DataTypes.BLOB,
      allowNull: false,
    },
    salt: {
      type: Sequelize.DataTypes.BLOB,
      allowNull: false,
    },
    deleted: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
  User.associate = (models) => {
    User.belongsTo(models.Role, { foreignKey: { allowNull: false } });
  };
  return User;
};
