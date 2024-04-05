const db = require("./models");
const service = require("./services/Factory");
const usersService = service.user(db);
const roleSerivce = service.role(db);
const allergySerivce = service.allergy(db);
const breedSerivce = service.breed(db);
const sizeSerivce = service.size(db);
const speciesSerivce = service.species(db);
const brandSerivce = service.brand(db);
const foodSerivce = service.food(db);
const ingredientSerivce = service.ingredient(db);

// Might not need - might want test pets
const petSerivce = service.pet(db);

(async () => {
  await db.sequelize.sync({ force: true });

  await roleSerivce.create("Admin");
  await roleSerivce.create("User");
  await usersService.create(
    process.env.ADMIN_USERNAME,
    process.env.ADMIN_EMAIL,
    process.env.ADMIN_PASSWORD,
    1
  );

  await speciesSerivce.create("Cat");
  await speciesSerivce.create("Dog");

  await sizeSerivce.create("Small");
  await sizeSerivce.create("Medium");
  await sizeSerivce.create("Large");

  await allergySerivce.create("Beef");
  await allergySerivce.create("Dairy");
  await allergySerivce.create("Chicken");
  await allergySerivce.create("Wheat");
  await allergySerivce.create("Lamb");
  await allergySerivce.create("Soy");
  await allergySerivce.create("Corn");
  await allergySerivce.create("Egg");
  await allergySerivce.create("Pork");
  await allergySerivce.create("Fish");
  await allergySerivce.create("Rice");
})();
