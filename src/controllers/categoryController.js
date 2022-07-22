const categoryServices = require('../services/categoryServices');

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

module.exports = { createCategory };
