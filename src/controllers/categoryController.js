const categoryServices = require('../services/categoryServices');

const getAllCategories = async (_req, res) => {
  try {
    const categories = await categoryServices.getAllCategories();

    const { payload, httpStatus } = categories;

    if (!payload) {
      throw new Error('Something went wrong');
    }

    return res.status(httpStatus).json(payload);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
const createCategory = async (req, res) => {
  const { name } = req.body;
  let error;
  let httpStatus;
  let payload;

  try {
    const newCategory = await categoryServices.createCategory(name);

    ({ error, httpStatus, payload } = newCategory);

    if (error) {
      throw new Error(error.message);
    }

    return res.status(httpStatus).json(payload);
  } catch (err) {
    return res.status(httpStatus).json({ message: err.message });
  }
};

module.exports = { createCategory, getAllCategories };
