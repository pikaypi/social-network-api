const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { thoughts, users } = require('./data');

connection.on('error', (err) => err);

connection.on('open', async () => {
    console.log('connected');

    // Drop existing data
    await Thought.deleteMany({});
    await User.deleteMany({});

    // Insert the seed data into the database
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    // Console logs
    console.info('Seeding complete');
    process.exit(0);
});
