const postServices = require('../services/postServices');

const getAllPosts = async (_req, res) => {
  try {
    const categories = await postServices.getAllPosts();

    const { payload, httpStatus } = categories;

    if (!payload) {
      throw new Error('Something went wrong');
    }

    return res.status(httpStatus).json(payload);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllPosts };
