const router = require("express").Router();

router.get("/", async (req, res, next) => {
  return res.send("Hello from Express");
});

module.exports = router;
