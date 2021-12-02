const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/streamer_db');

module.exports = mongoose.connection;
