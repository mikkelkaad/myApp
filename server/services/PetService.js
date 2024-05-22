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
    return this.Pet.findAll({ where: { UserId: userId } });
  }
}

module.exports = PetService;
