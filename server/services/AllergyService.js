class AllergyService {
  constructor(db) {
    this.client = db.sequelize;
    this.Allergy = db.Allergy;
  }

  async create(allergy) {
    return this.Allergy.create({
      allergy: allergy,
    });
  }
}

module.exports = AllergyService;
