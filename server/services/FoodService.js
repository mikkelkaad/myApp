const { QueryTypes } = require("sequelize");

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

  async getAll() {
    const result = this.client.query(
      `
      SELECT name, size, energy, protein, fat, fibers, ash, calcium, phosphate, brands.brand
      FROM food
      JOIN brands ON food.BrandId = brands.id
      `,
      { type: QueryTypes.SELECT, raw: true }
    );
    return result;
  }

  async findFood(searchParams) {
    const result = this.client.query(
      `
      SELECT name, size
      FROM food
      WHERE
      energy >= ${searchParams.energy.min} AND energy <= ${searchParams.energy.max} AND
      protein >= ${searchParams.protein.min} AND protein <= ${searchParams.protein.max} AND
      fat >= ${searchParams.fat.min} AND fat <= ${searchParams.fat.max} AND
      fibers >= ${searchParams.fibers.min} AND fibers <= ${searchParams.fibers.max} AND
      ash >= ${searchParams.ash.min} AND ash <= ${searchParams.ash.max} AND
      calcium >= ${searchParams.calcium.min} AND calcium <= ${searchParams.calcium.max} AND
      phosphate >= ${searchParams.phosphate.min} AND phosphate <= ${searchParams.phosphate.max}
      `,
      { type: QueryTypes.SELECT, raw: true }
    );
    return result;
  }
}

module.exports = FoodService;
