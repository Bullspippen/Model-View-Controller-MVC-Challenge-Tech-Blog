const { User } = require('../models');

const seedUser = async () => {
    await User.create({ 
        username: 'John',
        email: 'abc@abc.com',
        password: 'password123',
    });
   await User.create({
        username: 'Peter',
        email: 'abc1@abc.com',
        password: 'password123',
    });
};

module.exports = seedUser;