const { User } = require('../database/models');
const userErrors = require('../helpers/userErrors');

const validateLoginFields = async (req, res, next) => {
  const { email, password } = req.body;

  const isMissingFields = !email || !password;
  if (isMissingFields) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateNewUserEmail = async (email) => {
  const hasUser = await User.count({ where: { email } });
  return hasUser !== 0;
};

const minFieldLength = (field, minLength) => field.length < minLength;

const validateUserFields = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  const emailRegex = new RegExp(/\S+@\S+\.\S+/);

  if (minFieldLength(displayName, 8)) {
    return res.status(400).json({ message: userErrors.invalidDisplayName });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: userErrors.invalidEmail });
  }

  if (minFieldLength(password, 6)) {
    return res.status(400).json({ message: userErrors.invalidPassword });
  }

  const alreadyHasUser = await validateNewUserEmail(email);

  if (alreadyHasUser) {
    return res.status(409).json({ message: userErrors.hasUser });
  }
  next();
};

module.exports = { validateLoginFields, validateUserFields };
