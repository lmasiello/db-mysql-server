module.exports = _get = data => {
  const result = {};
  Object.getOwnPropertyNames(data).forEach(key => {
    if (data[key] instanceof Array) {
      // have to find a way to validate that instanceof is an instance of a sequelize return model
      result[key] = [];
      data[key].map(arrayData => {
        result[key].push(_get(arrayData.dataValues));
      });
    } else result[key] = data[key];
  });

  return result;
};
