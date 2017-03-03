'use strict';
module.exports = (sequelize, DataTypes) => {
    const EventPairs = sequelize.define('EventTeams', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        tier: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
            classMethods: {
                associate: (models) => {
                    EventPairs.belongsTo(models.Competitions, {
                        foreignKey: 'competitionsId',
                        onDelete: 'CASCADE',
                    });
                    EventPairs.belognsTo(models.Horses, {
                        foreignKey: 'horsesId',
                        onDelete: 'CASCADE',
                    });
                    EventPairs.belognsTo(models.Riders, {
                        foreignKey: 'ridersId',
                        onDelete: 'CASCADE',
                    });
                    EventPairs.hasMany(models.EventTeams, {
                        foreignKey: 'eventPairsId',
                        as: 'EventTeams',
                    });
                },
            },
        });
    return EventPairs;
};