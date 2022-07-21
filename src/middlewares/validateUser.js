const { User } = require('../database/models');

const validateLoginFields = (req, res, next) => {
  const { email, password } = req.body;

  const isMissingFields = !email || !password;
  if (isMissingFields) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const minFieldLength = (field, minLength) => field < minLength;

const validateUserFields = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const emailRegex = new RegExp(/\S+@\S+\.\S+/);

  if (minFieldLength(displayName, 8)) {
    return res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (!emailRegex.test(email)) {
    return res.status(409).json({ message: '"email" must be a valid email' });
  }

  if (minFieldLength(password, 6)) {
    return res
      .status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

const validateNewUserEmail = (req, res, next) => {
  const { email } = req.body;
  const hasUser = User.findOne({ where: email });
  if (hasUser) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

module.exports = { validateLoginFields, validateUserFields, validateNewUserEmail };
