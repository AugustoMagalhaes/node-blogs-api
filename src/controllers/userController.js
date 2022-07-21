const { generateToken } = require('../helpers/generateToken');
const userServices = require('../services/userServices');

const loginUser = async (req, res) => {
  let error;
  let httpStatus;
  let payload;
  const { email, password } = req.body;
  try {
    const user = await userServices.loginUser(email, password);

    ({ error, httpStatus, payload } = user);

    if (error) {
      throw new Error(error.message);
    }
    const token = generateToken(payload);

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(httpStatus).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  let error;
  let httpStatus;
  let payload;
  try {
    const newUser = await userServices.createUser(displayName, email, password, image);

    ({ error, httpStatus, payload } = newUser);

    if (error) {
      throw new Error(error.message);
    }

    const token = generateToken(payload);
    return res.status(httpStatus).json({ token });
  } catch (err) {
    return res.status(httpStatus).json({ message: err.message });
  }
};

module.exports = { loginUser, createUser };
