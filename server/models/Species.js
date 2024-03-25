module.exports = (sequelize, Sequelize) => {
  const Species = sequelize.define("Species", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    species: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Species.associate = (models) => {
    Species.hasMany(models.Pet);
  };
  return Species;
};
