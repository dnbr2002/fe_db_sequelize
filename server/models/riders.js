'use strict';
module.exports = (sequelize, DataTypes) => {
    const Riders = sequelize.define('Riders', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ridername: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        discipline: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Riders.hasMany(models.EventPairs, {
                        foreignKey: 'ridersId',
                        as: 'EventPairs',
                    });
                },
            },
        });
    return Riders;
};