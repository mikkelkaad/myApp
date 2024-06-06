const { QueryTypes } = require("sequelize");

class PetService {
  constructor(db) {
    this.client = db.sequelize;
    this.Pet = db.Pet;
    this.PetAllergies = db.PetAllergies;
  }

  async create(name, birthday, weight, UserId, BreedId) {
    return this.Pet.create({
      name: name,
      birthday: birthday,
      weight: weight,
      UserId: UserId,
      BreedId: BreedId,
    });
  }

  async createAllergy(PetId, AllergyId) {
    return this.PetAllergies.create({
      PetId: PetId,
      AllergyId: AllergyId,
    });
  }

  async getAll() {
    return this.Pet.findAll({ where: {} });
  }

  async getMyPets(userId) {
    const result = this.client.query(
      `
      SELECT name, weight, breeds.breed, species.species
      FROM pets
      JOIN breeds ON pets.BreedId = breeds.id
      JOIN species ON breeds.SpeciesId = species.id
      WHERE UserId = ${userId}
      `,
      { raw: true, type: QueryTypes.SELECT }
    );
    return result;
  }
}

module.exports = PetService;
