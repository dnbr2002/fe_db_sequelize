'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Competitions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            compName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            compLocation: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            compDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            compType: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface) => queryInterface.dropTable('Competitions'),
};