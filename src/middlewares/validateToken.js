const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../database/models/user');

const secret = process.env.JWT_SECRET;

const validateTokenField = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    const user = await User.findOne({
      where: { email: decoded.data.email, password: decoded.data.password },
    });

    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};

module.exports = { validateTokenField };
