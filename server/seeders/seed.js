const db = require('../config/connection');
const { User, Event } = require('../models');
const userSeeds = require('./userSeeds.json');
const eventSeeds = require('./eventSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Event.deleteMany({});

    await User.create(userSeeds);
    await Event.create(eventSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});