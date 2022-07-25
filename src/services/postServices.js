const { BlogPost, User, Category } = require('../database/models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
        model: Category,
        as: 'categories',
        through: { attributes: [] },
      },
    ],
  });

  return {
    httpStatus: 200,
    payload: posts,
  };
};

module.exports = { getAllPosts };
