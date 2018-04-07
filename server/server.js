'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');


var app = module.exports = loopback();

//big changes now
/*
var bodyParser = require('body-parser');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var cookieParser = require('cookie-parser');

var passport = require('passport');

var session = require('express-session');
app.use(session({
  secret: 'awesome',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 1 * 20 * 60 * 1000 } /*hours minutes seconds milli*/
/*}));

app.use(function(req, res, next){
  res.locals.session = req.session;
  next();
});
app.use(cookieParser());
app.use(passport.session());
app.get('*', function(req, res, next) {
  res.locals.user = req.user || null;
//  res.locals.seller = req.seller || null; //not so sure about this implementation *passport only sets req.user
  next();
});*/
//^--changes

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
