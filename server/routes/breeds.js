const router = require("express").Router();
const db = require("../models");
const breedService = require("../services/Factory").breed(db);

router.get("/", async (req, res, next) => {
  const breeds = await breedService.getAll();
  return res.json({
    statuscode: 200,
    status: "success",
    data: {
      result: breeds,
    },
  });
});

module.exports = router;
