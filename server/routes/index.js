const router = require("express").Router();

router.get("/", async (req, res, next) => {
  return res.send("Hello from Express");
  return res.render("index", { title: "myApp" });
});

module.exports = router;
