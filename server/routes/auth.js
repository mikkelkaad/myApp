const router = require("express").Router();
const jsonParser = require("body-parser").json();

router.post("/login", jsonParser, async (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.password);
});

module.exports = router;
