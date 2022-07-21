const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

module.exports = { generateToken };