module.exports = (sequelize, Sequelize) => {
  const Breed = sequelize.define("Breed", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    breed: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Breed.associate = (models) => {
    Breed.hasMany(models.Pet);
    Breed.belongsTo(models.Size, { foreignKey: { allowNull: false } });
  };
  return Breed;
};
