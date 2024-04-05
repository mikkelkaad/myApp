module.exports = (sequelize, Sequelize) => {
  const Brand = sequelize.define("Brand", {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Brand.associate = (models) => {
    Brand.hasMany(models.Food);
  };
  return Brand;
};
