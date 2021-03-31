/**
 *
 * @typedef {Object} DatabaseEntities
 * @property {import('../models/index')} connection - connection
 * @property {import('../domain')} domain - domain
 * @property {import('../repositories')} repositories - repositories
 * @property {import('../models')} models - models
 */
/**
 *
 * @param {*} connection
 * @returns {DatabaseEntities}
 */
module.exports = connection => ({
  connection,
  domain: require('../domain'),
  repositories: require('../repositories'),
  models: require('../models'),
});
