const router = require("express").Router();
const jsonParser = require("body-parser").json();
const db = require("../models");
const userService = require("../services/Factory").user(db);

router.post("/login", jsonParser, async (req, res, next) => {
  const { username, password } = req.body;
  if (username.length == 0 || password.length == 0) {
    return res.json({
      statuscode: 400,
      status: "fail",
      data: {
        result: "Username/Email and Password cannot be empty.",
      },
    });
  }
  const userExists = await userService.getOne(username);
  if (!userExists) {
    return res.json({
      status: "fail",
      statuscode: 400,
      data: {
        result: "No user with provided username/email found.",
      },
    });
  }
  const valid = await userService.validate(password, userExists);
  if (!valid) {
    return res.json({
      status: "fail",
      statuscode: 400,
      data: { result: "Username/email and password does not match." },
    });
  }
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
  if (username.length == 0 || password.length == 0 || email.length == 0) {
    return res.json({
      statuscode: 400,
      status: "fail",
      data: {
        result: "Username, Email and Password cannot be empty",
      },
    });
  }
  const userExists = await userService.getOne(email);
  if (userExists) {
    return res.json({
      status: "fail",
      statuscode: 400,
      data: {
        result: "A user with the provided email already exists.",
      },
    });
  }
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
