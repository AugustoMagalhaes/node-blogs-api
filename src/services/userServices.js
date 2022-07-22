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

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return {
    httpStatus: 200,
    payload: users,
  };
};

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });

  if (!newUser) {
    return {
      error: {
        message: 'Cannot create User',
        httpStatus: 400,
      },
    };
  }
  return {
    payload: newUser,
    httpStatus: 201,
  };
};

module.exports = { loginUser, createUser, getAllUsers };
