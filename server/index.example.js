const { sequelize } = require('./models');
const { models } = sequelize;
const { UserRepository, DeviceRepository } = require('./repositories');
const { UserBuilder, DeviceBuilder } = require('./utils/builders');
const { User, Device } = require('./domain');
const uuidv4 = require('uuid').v4;

module.exports = (async () => {
  await sequelize
    .sync({ force: true })
    .then(result => console.log(result))
    .catch(error => {
      throw error;
    });

  console.log('Creating user ... ');
  const email = 'test@test.com';
  const userRepository = new UserRepository({ models });
  const userData = new UserBuilder(User)
    .withName('Lucas Masiello')
    .withEmail(email)
    .withPassword('qwerty123')
    .build();

  const userValidation = userData.validate();
  const userCreated = await userRepository.create(userData);
  console.log('User Created!');

  console.log('Finding user by email...');
  const userFinded = await userRepository.find('email', email);
  console.log('User Finded : ' + userFinded.name);

  console.log('Creating New Device...');
  const deviceRepository = new DeviceRepository({ models });
  const deviceData = new DeviceBuilder(Device)
    .withName('device name test')
    .withUserRelated(userFinded.id)
    .serialId(uuidv4())
    .build();
  const deviceValidation = deviceData.validate();
  const deviceCreated = await deviceRepository.create(deviceData);

  const userWithRelatedDevices = await userRepository.getRelatedDevices(userFinded.id);
  console.log(userWithRelatedDevices);
})();
