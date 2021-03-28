const { attributes } = require('structure');

const Device = attributes({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  serialId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
})(class Device {});

module.exports = Device;
