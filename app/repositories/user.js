const User = require('../domain/user');
const { sequelize } = require('../models');
const { Device } = sequelize.models;
const BaseRepository = require('./base-repository');

class UserRepository extends BaseRepository {
  constructor({ models }) {
    super(models.User, User);
  }

  getRelatedDevices(id) {
    return this.findById(id, { include: Device });
  }
}

module.exports = UserRepository;
