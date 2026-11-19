const jwt = require("jsonwebtoken");

const generateToken = (user) => {

  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      rol: user.rol
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h"
    }
  );
};

module.exports = generateToken;