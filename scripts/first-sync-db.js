const { sequelize } = require('../server/models');

module.exports = (async () => {
  console.log('Creating database...');
  await sequelize
    .sync({ force: true })
    .then(result => {
      console.log('Database created!!');
    })
    .catch(error => {
      throw error;
    });
})();
