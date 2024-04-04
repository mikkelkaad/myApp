module.exports = (sequelize, Sequelize) => {
  const Pet = sequelize.define("Pet", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
    },
    birthday: {
      type: Sequelize.DataTypes.DATE,
    },
    weight: {
      type: Sequelize.DataTypes.INTEGER,
    },
  });
  Pet.associate = (models) => {
    Pet.belongsTo(models.User, { foreignKey: { allowNull: false } });
    Pet.belongsTo(models.Breed, { foreignKey: { allowNull: false } });
    Pet.belongsToMany(models.Allergy, { through: "PetAllergies" });
  };
  return Pet;
};
