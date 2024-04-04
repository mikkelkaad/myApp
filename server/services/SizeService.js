class SizeService {
  constructor(db) {
    this.client = db.sequelize;
    this.Size = db.Size;
  }

  async create(size) {
    return this.Size.create({
      size: size,
    });
  }
}

module.exports = SizeService;
