'use strict';
const { Model, Sequelize } = require('sequelize');
const { HashPassword } = require('../helpers');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Device, User } = models;
      User.hasMany(Device);

      User.beforeCreate(async (user, options) => {
        const hashedPassword = await HashPassword(user.password);
        user.password = hashedPassword;
      });
    }
  }
  Users.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      underscored: true,
    }
  );
  return Users;
};
