const router = require("express").Router();

const welcomeText = "Welcome to FeedMyPet";

router.get("/", async (req, res, next) => {
  return res.send(welcomeText);
});

module.exports = router;
