const { Category } = require('../database/models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  if (!newCategory) {
    return {
      error: {
        message: 'Cannot create Category',
        httpStatus: 400,
      },
      httpStatus: 400,
    };
  }
  return {
    payload: newCategory,
    httpStatus: 201,
  };
};

module.exports = { createCategory };
