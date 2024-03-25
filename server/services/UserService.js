const crypto = require("crypto");

class UserService {
  constructor(db) {
    this.client = db.sequelize;
    this.User = db.User;
  }

  async getOne(input) {
    let user;
    user = this.User.findOne({
      where: { email: input, deleted: 0 },
      raw: true,
    });
    if (!user) {
      user = this.User.findOne({
        where: { username: input, deleted: 0 },
        raw: true,
      });
    }
    return user;
  }

  async create(username, email, password, roleId = 2) {
    const salt = crypto.randomBytes(16).toString("hex");
    crypto.pbkdf2(password, salt, 42069, 64, "sha256", (err, hash) => {
      if (err) return console.log(err);
      return this.User.create({
        username: username,
        email: email,
        password: hash,
        salt: salt,
        RoleId: roleId,
      });
    });
  }
}

module.exports = UserService;
