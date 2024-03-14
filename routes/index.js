const router = require("express").Router();

router.get("/", async (req, res, next) => {
  return res.render("index", { title: "myApp" });
});

module.exports = router;
