const router = require("express").Router();
const jsonParser = require("body-parser").json();
const db = require("../models");
const factory = require("../services/Factory");
const petService = factory.pet(db);
const breedService = factory.breed(db);
const userService = factory.user(db);
const { isUser, isAdmin } = require("../middleware/auth");
const jwt = require("jsonwebtoken");

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

router.get("/all", isAdmin, async (req, res, next) => {
  const pets = await petService.getAll();

  return res.json({
    status: "success",
    statuscode: 200,
    data: { result: pets },
  });
});

router.get("/", async (req, res, next) => {
  req.headers.authorization = req.headers.authorization
    ? req.headers.authorization
    : "Bearer " + req.cookies.jwt;
  let token = req.headers.authorization?.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    const pets = await petService.getMyPets(decodedToken.id);
    return res.json({
      status: "success",
      statuscode: 200,
      data: { result: pets },
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "fail",
      statuscode: "400",
      data: { result: [] },
    });
  }
});

module.exports = router;
