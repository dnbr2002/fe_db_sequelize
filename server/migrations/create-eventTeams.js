'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('EventTeams', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            eventPairId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'EventPairs',
                    key: 'id',
                    as: 'eventPairId',
                },
            },
            teamsId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                references: {
                    model: 'Teams',
                    key: 'id',
                    as: 'teamsId',
                },
            },
        });
    },
    down: (queryInterface) => queryInterface.dropTable('EventTeams'),
};