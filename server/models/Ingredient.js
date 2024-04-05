module.exports = (sequelize, Sequelize) => {
  const Ingredient = sequelize.define("Ingredient", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ingredient: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Ingredient.associate = (models) => {
    Ingredient.belongsToMany(models.Food, { through: "FoodIngredients" });
  };
  return Ingredient;
};
