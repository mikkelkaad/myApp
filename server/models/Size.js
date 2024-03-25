module.exports = (sequelize, Sequelize) => {
  const Size = sequelize.define("Size", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    size: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Size.associate = (models) => {
    Size.hasMany(models.Breed);
  };
  return Size;
};
