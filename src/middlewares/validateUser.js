const validateUserFields = (req, res, next) => {
  const { email, password } = req.body;
  // const isMissingFields = standardFields.some((el) => !Object.keys(req.body).includes(el));
  const isMissingFields = !email || !password;
  if (isMissingFields) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

/* const validateUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  req.user = user;
  next();
}; */

module.exports = { validateUserFields };
