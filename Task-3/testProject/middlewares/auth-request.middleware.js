const jwt = require("jsonwebtoken");
const AuthRequest = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization)
    return res.status(401).json({
      msg: "User Not Found",
    });
  const token = authorization.split(" ")[1];
  try {
    const userData = jwt.verify(token, "qwertyuiopasdf");
    req.user = userData;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "Invalid Token",
    });
  }
};

module.exports = { AuthRequest };