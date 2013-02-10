var mon = require('mongoose')

var tweetSchema = mon.Schema({
  tweet: String,
  created: Date,
  _creator: String,
});

var Tweet = mon.model('Tweet', tweetSchema);

exports.Tweet = Tweet;