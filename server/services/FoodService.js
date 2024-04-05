class FoodService {
  constructor(db) {
    this.client = db.sequelize;
    this.Food = db.Food;
    this.FoodIngredients = db.FoodIngredients;
  }

  async create(
    name,
    size,
    energy,
    protein,
    fat,
    fibers,
    ash,
    calcium,
    phosphate,
    BrandId
  ) {
    return this.Food.create({
      name: name,
      size: size,
      energy: energy,
      protein: protein,
      fat: fat,
      fibers: fibers,
      ash: ash,
      calcium: calcium,
      phosphate: phosphate,
      BrandId: BrandId,
    });
  }

  async createIngredient(FoodId, IngredientId) {
    return this.FoodIngredients.create({
      FoodId: FoodId,
      IngredientId: IngredientId,
    });
  }
}

module.exports = FoodService;
