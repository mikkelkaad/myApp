const auth = {
  isAdmin: (req, res, next) => {
    //if user is admin
    next();
  },
  isUser: (req, res, next) => {
    //if user is logged in
    next();
  },
};

module.exports = auth;
