const { User } = require('../database/models/user');

const createUser = async (displayName, email, password, image) => {
  const createdUser = await User.create(displayName, email, password, image);

  if (!createdUser) {
    return {
      error: { message: '' },
    };
  }
};

module.exports = { createUser };
