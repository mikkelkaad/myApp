const router = require("express").Router();
const jsonParser = require("body-parser").json();
const userService = require("../services/Factory").user();

router.post("/login", jsonParser, async (req, res, next) => {
  console.log(req.body.username);
  console.log(req.body.password);
  return res.json({
    statuscode: 200,
    status: "success",
    data: {
      result: "Login succesfull",
    },
  });
});

router.post("/signup", jsonParser, async (req, res, next) => {
  const { username, password, email } = req.body;
  userService.create(username, email, password);
  return res.json({
    statuscode: 200,
    status: "success",
    data: {
      result: `New user: ${username} succesfully signed up.`,
    },
  });
});

module.exports = router;
