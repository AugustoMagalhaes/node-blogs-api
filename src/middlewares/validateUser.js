const validateUserFields = (req, res, next) => {
  const { email, password } = req.body;

  const isMissingFields = !email || !password;
  if (isMissingFields) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = { validateUserFields };
