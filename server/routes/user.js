const router = require("express").Router();
const jsonParser = require("body-parser").json();
const jwt = require("jsonwebtoken");
const db = require("../models");
const { user } = require("../services/Factory");
const userService = require("../services/Factory").user(db);

class Credentials {
  constructor(user) {
    this.username = user.username;
    this.email = user.email;
    this.role = user.RoleId === 1 ? "Admin" : "User";
  }
}

//return logged in user's info
router.get("/", async (req, res, next) => {
  req.headers.authorization = req.headers.authorization
    ? req.headers.authorization
    : "Bearer " + req.cookies.jwt;
  let token = req.headers.authorization?.split(" ")[1];
  // let token = req.headers.authorization;
  let decodedToken;
  if (!token) {
    return res.json({
      statuscode: 401,
      status: "fail",
      data: {
        result:
          "Authentication failed: No json web token found in headers. Please login to application to use this feature",
      },
    });
  }
  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.json({
      statuscode: 401,
      status: "fail",
      data: {
        result: "Authentication failed: Invalid json web token provided",
      },
    });
  }
  const user = await userService.getOne(decodedToken.username);
  const credentials = new Credentials(user);

  return res.json({
    status: "success",
    statuscode: 200,
    data: { result: "user authenticated", user: credentials },
  });
});

//return all users' info
router.get("/all", async (req, res, next) => {
  return res.end();
});

//return one user's info
router.get("/:id", async (req, res, next) => {
  return res.end();
});

//update user's info
router.put("/", jsonParser, async (req, res, next) => {
  return res.end();
});

//Flag user as inactive/banned
router.delete("/:id", async (req, res, next) => {
  return res.end();
});

module.exports = router;
