'use strict';

const { TABLE_NAMES } = require('../enums');

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.addColumn(TABLE_NAMES.USERS, 'last_name', Sequelize.STRING);
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(TABLE_NAMES.USERS, 'last_name');
  },
};
