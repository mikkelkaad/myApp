module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("Role", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: Sequelize.DataTypes.STRING(8),
      allowNull: false,
      unique: true,
    },
  });
  Role.associate = (models) => {
    Role.hasMany(models.User);
  };

  return Role;
};
