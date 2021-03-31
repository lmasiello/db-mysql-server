module.exports = {
  domain: require('./domain'),
  repositories: require('./repositories'),
  connection: require('./models/index').sequelize,
};
