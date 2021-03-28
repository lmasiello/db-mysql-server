'use strict';

const uuidv4 = require('uuid').v4;

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.addColumn('Users', 'last_name', Sequelize.STRING);
  },

  down: async function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Users', 'last_name');
  },
};
