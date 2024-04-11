const auth = {
  isAdmin: (req, res, next) => {
    req.headers.authorization = req.headers.authorization
      ? req.headers.authorization
      : "Bearer " + req.cookies.jwt;
    let token = req.headers.authorization?.split(" ")[1];
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
      decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
      return res.json({
        statuscode: 401,
        status: "fail",
        data: {
          result: "Authentication failed: Invalid json web token provided",
        },
      });
    }
    if (decodedToken.roleId !== 1) {
      return res.json({
        statuscode: 401,
        status: "fail",
        data: {
          result: "Authentication failed: Access restricted to admin users",
        },
      });
    }
    next();
  },
  isUser: (req, res, next) => {
    req.headers.authorization = req.headers.authorization
      ? req.headers.authorization
      : "Bearer " + req.cookies.jwt;
    let token = req.headers.authorization?.split(" ")[1];
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
      jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (error) {
      return res.json({
        statuscode: 401,
        status: "fail",
        data: {
          result: "Authentication failed: Invalid json web token provided",
        },
      });
    }
    next();
  },
};

module.exports = auth;
