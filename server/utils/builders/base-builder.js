const uuidv4 = require('uuid').v4;
const { cloneDeep } = require('lodash');

class BaseBuilder {
  constructor(domain) {
    this._model = { id: uuidv4() };
    this._domain = domain;
  }

  build = () => new this._domain(cloneDeep(this._model));

  validate = () => this._domain.validate(this._model);
}

module.exports = BaseBuilder;
