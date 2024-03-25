const db = require("./models").sequelize;
const usersService = require("./services/Factory").user();
const roleSerivce = require("./services/Factory").role();
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
