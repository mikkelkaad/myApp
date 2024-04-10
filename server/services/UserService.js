const crypto = require("crypto");

class UserService {
  constructor(db) {
    this.client = db.sequelize;
    this.User = db.User;
  }

  async getOne(email) {
    let user;
    user = await this.User.findOne({
      where: { email: email, deleted: 0 },
      raw: true,
    });
    if (!user) {
      user = await this.User.findOne({
        where: { username: email, deleted: 0 },
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

  async validate(userPass, db) {
    return new Promise((res, rej) => {
      crypto.pbkdf2(
        userPass,
        String(db.salt),
        42069,
        64,
        "sha256",
        (err, hash) => {
          if (err) return rej(err);
          return res(crypto.timingSafeEqual(db.password, hash));
        }
      );
    });
  }
}

module.exports = UserService;
