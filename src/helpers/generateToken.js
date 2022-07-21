const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

console.log('secret', secret);

const generateToken = (user) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const { email, password } = user;
  const userInfo = {
    email,
    password,
  };

  const token = jwt.sign({ data: userInfo }, secret, jwtConfig);
  return token;
};

module.exports = { generateToken };
