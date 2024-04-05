class IngredientService {
  constructor(db) {
    this.client = db.sequelize;
    this.Ingredient = db.Ingredient;
  }

  async create(ingredient) {
    return this.Ingredient.create({
      ingredient: ingredient,
    });
  }
}

module.exports = IngredientService;
