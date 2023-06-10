const appErr = require("../utils/appError");

const protected = (req, res, next) => {
  //user session validation
  if (req.session.userAuth) {
    next();
  } else {
    next(appErr("Not authorized, login again"));
  }
};
module.exports = protected;
