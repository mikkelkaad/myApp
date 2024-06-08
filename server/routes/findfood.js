const router = require("express").Router();
const jsonParser = require("body-parser").json();
const db = require("../models");
const foodSerivce = require("../services/Factory").food(db);

router.post("/", jsonParser, async (req, res, next) => {
  const result = await foodSerivce.findFood(req.body);
  return res.json({
    status: "success",
    statuscode: 200,
    data: { result: result },
  });
});

module.exports = router;
