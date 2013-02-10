var mon = require('mongoose')

var userSchema = mon.Schema(
  { name: String }
);

var User = mon.model('User', userSchema);

exports.User = User;