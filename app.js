
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , tweet = require('./routes/tweet')
  , http = require('http')
  , path = require('path')
  , usermodel = require('./models/usermodel')
  , mongoose = require('mongoose')
  , $ = require('jquery');

var app = express();

app.configure(function(){
  mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/twitters');
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users/new', user.new);
app.post('/users/create', user.create);
app.post('/tweets/:user', tweet.new);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
