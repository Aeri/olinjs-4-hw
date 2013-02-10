var usermodel = require('../models/usermodel');
var User = usermodel.User;
var tweetmodel = require('../models/tweetmodel');
var Tweet = tweetmodel.Tweet;

exports.new = function(req, res){
  console.log("This tweet has been posted!");
  var user = req.session.user;
  if(!user){
    return console.log("How did you post this without logging in?");
  }
  console.log("Twit text: " + req.body.twit);
  console.log("Twit by: " + req.session.user);
    var tweet = new Tweet({tweet: req.body.twit, created: new Date(), _creator: req.session.user});
    tweet.save(function(err) {
      if(err){
        return console.log("Couldn't save twit.");
      }
      else{
        console.log("Saved twit.");
      }
    });
};