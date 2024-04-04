class PetService {
  constructor(db) {
    this.client = db.sequelize;
    this.Pet = db.Pet;
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
}

module.exports = PetService;
