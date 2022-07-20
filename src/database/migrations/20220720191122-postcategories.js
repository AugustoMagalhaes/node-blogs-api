'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('PostCategories', {
			postId: {
				primaryKey: true,
				references: {
					model: 'BlogPosts',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				type: Sequelize.INTEGER,
			},
			categoryId: {
				primaryKey: true,
				references: {
					model: 'Categories',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				type: Sequelize.INTEGER,
			},
		});
	},

	down: async (queryInterface, _Sequelize) => {
		return queryInterface.dropTable('PostCategories');
	},
};
