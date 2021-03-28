class UserBuilder extends require('./base-builder') {
  constructor(domain) {
    super(domain);
  }

  withName = name => {
    this._model.name = name;
    return this;
  };

  withPassword = password => {
    this._model.password = password;
    return this;
  };

  withEmail = email => {
    this._model.email = email;
    return this;
  };
}

module.exports = UserBuilder;
