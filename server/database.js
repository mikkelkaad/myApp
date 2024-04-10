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

const fs = require("fs");
const path = require("path");
const rawData = JSON.parse(
  fs.readFileSync(path.resolve(__dirname + "/rawdata/JSONdata.json"))
);
const { roles, sizes, species, allergies } = rawData;

(async () => {
  await db.sequelize.sync({ force: true });

  for (i = 0; i < roles.length; i++) {
    await roleSerivce.create(roles[i]);
  }

  await usersService.create(
    process.env.ADMIN_USERNAME,
    process.env.ADMIN_EMAIL,
    process.env.ADMIN_PASSWORD,
    1
  );

  for (i = 0; i < species.length; i++) {
    await speciesSerivce.create(species[i]);
  }

  for (i = 0; i < sizes.length; i++) {
    await sizeSerivce.create(sizes[i]);
  }

  for (i = 0; i < allergies.length; i++) {
    await allergySerivce.create(allergies[i]);
  }
})();
