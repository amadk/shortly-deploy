var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('Connected!');
});

module.exports = db;
