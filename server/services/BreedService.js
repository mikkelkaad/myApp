class BreedService {
  constructor(db) {
    this.client = db.sequelize;
    this.Breed = db.Breed;
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
