const { User } = require('../database/models/user');

const validateUserFields = (req, res, next) => {
  const standardFields = ['email, password'];
  const isMissingFields = standardFields.some((el) => !Object.keys(req.body).includes(el));
  if (isMissingFields) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateUser = async (req, res, next) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email, password });
  if (!checkUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = { validateUserFields, validateUser };
