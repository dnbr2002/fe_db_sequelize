'use strict';
module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('Teams', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discipline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
      classMethods: {
        associate: (models) => {
          Teams.belongsTo(models.Users, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
          });
          Teams.hasMany(models.EventTeams, {
            foreignKey: 'teamsId',
            as: 'EventTeams'
          })
        },
      },
    });
  return Teams;
};