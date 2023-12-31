'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('BlogPosts', {
			id: {
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			content: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			userId: {
				allowNull: false,
				type: Sequelize.INTEGER,
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
				references: {
					model: 'Users',
					key: 'id',
				},
			},
			published: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
			updated: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.NOW,
			},
		});
	},

	down: async (queryInterface, _Sequelize) => {
		return queryInterface.dropTable('BlogPosts');
	},
};
