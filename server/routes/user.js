const router = require("express").Router();
const jsonParser = require("body-parser").json();
const userService = require("../services/Factory").user();

//return logged in user's info
router.get("/", async (req, res, next) => {
  let id = 1;
  const user = await userService.getOne(id);
  return res.json({
    status: "success",
    statuscode: 200,
    data: { result: "user info found", user: user },
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
