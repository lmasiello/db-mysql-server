const { attributes } = require('structure');

const User = attributes({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    email: true,
  },
  password: {
    type: String,
    required: true,
  },
})(class User {});

module.exports = User;
