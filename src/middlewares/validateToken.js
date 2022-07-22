const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../database/models');

const secret = process.env.JWT_SECRET;

const validateTokenField = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const { email, password } = decoded.data;

    const user = await User.findOne({
      where: { email, password },
    });

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateTokenField };
