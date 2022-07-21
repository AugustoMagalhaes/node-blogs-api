const { User } = require('../database/models');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    return {
      error: {
        message: 'Invalid fields',
      },
      httpStatus: 400,
    };
  }

  return {
    payload: user,
    httpStatus: 200,
  };
};

module.exports = { loginUser };
