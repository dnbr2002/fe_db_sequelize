'use strict';
module.exports = (sequelize, DataTypes) => {
    const EventTeams = sequelize.define('EventTeams', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
    }, {
            classMethods: {
                associate: (models) => {
                    EventTeams.belongsTo(models.Teams, {
                        foreignKey: 'teamsId',
                        onDelete: 'CASCADE',
                    });
                    EventTeams.belognsTo(models.EventPairs, {
                        foreignKey: 'eventPairsId',
                        onDelete: 'CASCADE',
                    })
                },
            },
        });
    return EventTeams;
};