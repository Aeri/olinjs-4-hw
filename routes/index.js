var tweetmodel = require('../models/tweetmodel');
var Tweet = tweetmodel.Tweet;

//StackOverflow sort function
Array.prototype.sortByProp = function(p){
	return this.sort(function(a,b){
		return (a[p] < b[p]) ? 1 : (a[p] > b[p]) ? -1 : 0;
	});
};

exports.index = function(req, res){

  Tweet.find({}).exec(function (err, db_tweets) {
    if (err) {
      console.log("Error: " + err);
    }
    else {
      db_tweets.sortByProp('created');
      var user = req.session.user;
      if(!user)
        res.render('index2', { title: 'Shitty Twitter!', tweets: db_tweets});
      if(user)
        res.render('index', { title: 'Shitty Twitter!', logged: req.session.user, tweets: db_tweets});
    }
  });
}