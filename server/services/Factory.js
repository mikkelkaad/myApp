const db = require("../models");
const userService = require("./UserService");
const roleSerivce = require("./RoleSerice");

const Factory = {
  user: () => {
    return new userService(db);
  },
  role: () => {
    return new roleSerivce(db);
  },
};

module.exports = Factory;
