const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://atlas-sql-6462d9c89071120d62e9bece-wkxkx.a.query.mongodb.net/Calender?ssl=true&authSource=admin');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the database!');
  // Additional code or logic to run when the connection is established
});

module.exports = db;