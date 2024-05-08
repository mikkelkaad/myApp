class BreedService {
  constructor(db) {
    this.client = db.sequelize;
    this.Breed = db.Breed;
  }

  async getAll() {
    return this.Breed.findAll({});
  }

  async create(breed, SizeId, SpeciesId) {
    return this.Breed.create({
      breed: breed,
      SizeId: SizeId,
      SpeciesId: SpeciesId,
    });
  }
}

module.exports = BreedService;
