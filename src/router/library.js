var monogoose = require('mongoose');

var userSchema = new monogoose.Schema({
  name: String,
  username: String,
  password: String
});

module.exports = monogoose.model('User', userSchema);