'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Horses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            horseName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            pic: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            color: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            age: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            height: {
                type: Sequelize.DECIMAL,
                allowNull: true,
            },
            breed: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            owner: {
                type: Sequelize.STRING,
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
    down: (queryInterface) => queryInterface.dropTable('Horses'),
};