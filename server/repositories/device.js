const Device = require('../domain/device');
const BaseRepository = require('./base-repository');

class UserRepository extends BaseRepository {
  constructor({ models }) {
    super(models.Device, Device);
  }
}

module.exports = UserRepository;
