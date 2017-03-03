'use strict';
module.exports = (sequelize, DataTypes) => {
    const Competitions = sequelize.define('Competitions', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        compName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complocation: {
            type: DataTypes.STRING,
            allowNull: true
        },
        compDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        compType: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Competitions.hasMany(models.EventPairs, {
                        foreignKey: 'competitionId',
                        as: 'EventPairs',
                    });
                },
            },
        });
    return Competitions;
};