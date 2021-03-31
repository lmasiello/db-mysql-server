const { ExtractDataValues } = require('../helpers');
class BaseRepository {
  constructor(model, domain) {
    this.model = model;
    this.domain = domain;
  }

  /**
   * Adds a new row to a given table.
   *
   * @param {Object} entity
   * @returns {Promise}
   * @memberof BaseRepository
   */
  async create(entity) {
    let entityInstance = entity;

    // is the entity an instance of the domain?
    if (!(entity instanceof this.domain)) {
      // be it's instance
      entityInstance = new this.domain(entity);
    }

    // let's create the record
    try {
      const newEntity = await this.model.create(entityInstance.toJSON());

      // once it's created, return it
      return ExtractDataValues(newEntity.dataValues);
    } catch (error) {
      throw new Error(error);
    }
  }

  /**
   * Find a row using the column name and value.
   *
   * @param {String} field
   * @param {String} value
   * @returns {Promise}
   * @memberof BaseRepository
   */
  async find(field, value, optional = {}) {
    return this._findByField(field, value, optional);
  }

  /**
   * Find a row using the ID.
   *
   * @param {String} field
   * @param {String} value
   * @returns {Promise}
   * @memberof BaseRepository
   */
  async findById(id, optional = {}) {
    return this._findByField('id', id, optional);
  }

  /**
   * Generic function for finding rows using a field.
   *
   * @param {*} field
   * @param {*} value
   * @param {object} optional
   * @returns
   * @memberof BaseRepository
   */
  async _findByField(field, value, optional = {}) {
    // set the where clause
    const where = { [field]: value };

    // if (active) {
    //   where.active = {
    //     [Op.eq]: 1,
    //   };
    // }

    // perform search
    return this.model.findOne({ where, ...optional }).then(data => {
      return data ? ExtractDataValues(data.dataValues) : null;
    });
  }
}

module.exports = BaseRepository;
