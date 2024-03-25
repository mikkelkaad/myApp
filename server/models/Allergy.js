module.exports = (sequelize, Sequelize) => {
  const Allergy = sequelize.define("Allergy", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    allergy: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Allergy.associate = (models) => {
    Allergy.belongsToMany(models.Pet, { through: "PetAllergies" });
  };
  return Allergy;
};
