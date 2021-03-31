const { genSalt, hash } = require('bcryptjs');
module.exports = async password => {
  const salt = await genSalt(process.env.SALT_WORK_FACTOR);
  return await hash(password, salt);
};
