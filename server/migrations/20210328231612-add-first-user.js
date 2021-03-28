'use strict';
const uuidv4 = require('uuid').v4;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John',
          last_name: 'Doe',
          created_at: new Date(),
          updated_at: new Date(),
          email: 'johnDoe@test.com',
          id: uuidv4(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', [
      {
        email: 'johnDoe@test.com',
      },
    ]);
  },
};
