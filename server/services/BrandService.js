class BrandService {
  constructor(db) {
    this.client = db.sequelize;
    this.Brand = db.Brand;
  }

  async create(brand) {
    return this.Brand.create({
      brand: brand,
    });
  }
}

module.exports = BrandService;
