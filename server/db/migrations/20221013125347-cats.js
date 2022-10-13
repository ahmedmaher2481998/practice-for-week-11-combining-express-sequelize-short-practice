"use strict";
const Sequelize = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */
		await queryInterface.createTable("users", {
			email: {
				type: Sequelize.STRING(255),
				allowNull: false,
				unique: true,
			},
			firstName: {
				type: Sequelize.STRING(20),
				allowNull: false,
			},
			lastName: {
				type: Sequelize.STRING(20),
			},
		});
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
