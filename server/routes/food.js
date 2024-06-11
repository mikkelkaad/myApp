const router = require("express").Router();
const db = require("../models");
const foodService = require("../services/Factory").food(db);

router.get("/", async (req, res, next) => {
  const food = await foodService.getAll();
  console.log(food);
  return res.json({
    status: 200,
    statuscode: "success",
    data: { result: food },
  });
});

module.exports = router;
