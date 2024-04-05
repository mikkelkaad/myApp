module.exports = (sequelize, Sequelize) => {
  const Food = sequelize.define("Food", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    energy: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
    },
    protein: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    fat: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    fibers: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    ash: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    calcium: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
    phosphate: {
      type: Sequelize.DataTypes.FLOAT,
      allowNull: false,
    },
  });

  Food.associate = (models) => {
    Food.belongsToMany(models.Ingredient, { through: "FoodIngredients" });
    Food.belongsTo(models.Brand, { foreignKey: { allowNull: false } });
  };
  return Food;
};
