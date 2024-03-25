const db = require("./models").sequelize;
const usersService = require("./services/Factory").user(db);
const roleSerivce = require("./services/Factory").role(db);
(async () => {
  await db.sync({ force: true });
  await roleSerivce.create("Admin");
  await roleSerivce.create("User");
  await usersService.create(
    process.env.ADMIN_USERNAME,
    process.env.ADMIN_EMAIL,
    process.env.ADMIN_PASSWORD,
    1
  );
})();
