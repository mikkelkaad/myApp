class SpeciesService {
  constructor(db) {
    this.client = db.sequelize;
    this.Species = db.Species;
  }

  async create(species) {
    return this.Species.create({
      species: species,
    });
  }
}

module.exports = SpeciesService;
