const router = require("express").Router();
const jsonParser = require("body-parser").json();
const db = require("../models");
const speciesService = require("../services/Factory").species(db);

router.get("/", async (req, res, next) => {
  const species = await speciesService.getAll();
  return res.json({
    status: "success",
    statuscode: 200,
    data: { result: species },
  });
});

module.exports = router;
