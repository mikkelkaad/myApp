const router = require("express").Router();
const jsonParser = require("body-parser").json();
const db = require("../models");
const factory = require("../services/Factory");
const petService = factory.pet(db);
const breedService = factory.breed(db);
const userService = factory.user(db);

router.post("/", jsonParser, async (req, res, next) => {
  const { name, weight, birthday, breed, user } = req.body;
  if (!name || !weight || !breed || !user || !birthday) {
    return res.json({
      status: "fail",
      statuscode: 400,
      data: {
        result:
          "Request failed because not all required properties were found in request body.",
      },
    });
  }
  //TODO: more validation

  const getUser = await userService.getOne(user);
  const userId = getUser.id;

  const getBreed = await breedService.getOne(breed);
  const breedId = getBreed.id;
  await petService.create(name, birthday, weight, userId, breedId);

  return res.json({
    status: "success",
    statuscode: 200,
    data: {
      result: "New pet succesfully registered.",
    },
  });
});

module.exports = router;
