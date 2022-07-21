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

module.exports = { loginUser };
