class SpeciesService {
  constructor(db) {
    this.client = db.sequelize;
    this.Species = db.Species;
  }

  async getAll() {
    return this.Species.findAll({});
  }

  async create(species) {
    return this.Species.create({
      species: species,
    });
  }
}

module.exports = SpeciesService;
