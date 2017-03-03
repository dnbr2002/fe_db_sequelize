'use strict';
module.exports = (sequelize, DataTypes) => {
    const Horses = sequelize.define('Horses', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        horsename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pic: {
            type: DataTypes.STRING,
            allowNull: true
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        height: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: true
        },
        owner: {
            type: DataTypes.STRING,
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
    },
        {
            classMethods: {
                associate: (models) => {
                    Horses.hasMany(models.EventPairs, {
                        foreignKey: 'horsesId',
                        as: 'EventPairs',
                    });
                },
            },
        });
    return Horses;
};