const router = require("express").Router();
const jsonParser = require("body-parser").json();
const db = require("../models");
const sizeService = require("../services/Factory").size(db);

router.get("/", async (req, res, next) => {
  const sizes = await sizeService.getAll();
  return res.json({
    status: "success",
    statuscode: 200,
    data: { result: sizes },
  });
});

module.exports = router;
