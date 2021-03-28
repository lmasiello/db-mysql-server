'use strict';
const { Model, Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Devices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      const { Device, User } = models;
      Device.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Devices.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
      },
      name: DataTypes.STRING,
      serialId: {
        allowNull: false,
        unique: true,
        type: Sequelize.UUID,
      },
    },
    {
      sequelize,
      modelName: 'Device',
      tableName: 'devices',
      underscored: true,
    }
  );
  return Devices;
};
