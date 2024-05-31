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
const { roles, sizes, species, allergies, breeds } = rawData;
const { dogs } = breeds;

(async () => {
  await db.sequelize.sync({ force: false });

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

  let { small, medium, large } = dogs;

  for (i = 0; i < small.length; i++) {
    await breedSerivce.create(small[i].breed, 1, 2);
  }
  for (i = 0; i < medium.length; i++) {
    await breedSerivce.create(medium[i].breed, 2, 2);
  }
  for (i = 0; i < large.length; i++) {
    await breedSerivce.create(large[i].breed, 3, 2);
  }

  for (i = 0; i < allergies.length; i++) {
    await allergySerivce.create(allergies[i]);
  }
})();
