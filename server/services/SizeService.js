class SizeService {
  constructor(db) {
    this.client = db.sequelize;
    this.Size = db.Size;
  }

  async getAll() {
    return this.Size.findAll({});
  }

  async create(size) {
    return this.Size.create({
      size: size,
    });
  }
}

module.exports = SizeService;
