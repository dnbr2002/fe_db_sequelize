'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Riders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            riderName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            pic: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            country: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            points: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            discipline: {
                type: Sequelize.STRING,
                allowNull: true,
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
    down: (queryInterface) => queryInterface.dropTable('Riders'),
};