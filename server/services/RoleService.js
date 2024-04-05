class RoleService {
  constructor(db) {
    this.client = db.sequelize;
    this.Role = db.Role;
  }

  async create(role) {
    return this.Role.create({
      role: role,
    });
  }
}

module.exports = RoleService;
