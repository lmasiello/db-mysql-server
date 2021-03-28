class DeviceBuilder extends require('./base-builder') {
  constructor(domain) {
    super(domain);
  }

  withName = name => {
    this._model.name = name;
    return this;
  };

  serialId = id => {
    this._model.serialId = id;
    return this;
  };

  withUserRelated = userId => {
    this._model.userId = userId;
    return this;
  };
}

module.exports = DeviceBuilder;
