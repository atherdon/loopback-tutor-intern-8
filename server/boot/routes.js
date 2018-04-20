'use strict';

var dsConfig = require('../datasources.json');
var urlTest = "http://127.0.0.1:3001";

module.exports = function(app) {
var User = app.models.userData;
/*If works shift to react
	app.get('/verified', function(req, res) {
    	res.render('verified');
	});


  app.get('/request-password-reset', function(req, res, next) {
    res.render('resetpassword');
  });
*/
  //send an email with instructions to reset an existing user's password
  app.post('/request-password-reset', function(req, res, next) {
    User.resetPassword({
      email: req.body.email
    }, function(err) {
      if (err) return res.status(401).send(err);
        res.redirect('/response');//check in final build
/*      res.render('response', {
        title: 'Password reset requested',
        content: 'Check your email for further instructions',
        redirectTo: urlTest + '/',
        redirectToLinkText: 'Log in'
      });*/
    });
  });

  //show password reset form
  app.get('/reset-password', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    res.render('password-reset', {
      redirectUrl: '/api/userData/reset-password?access_token='+
        req.accessToken.id
    });
  });

  
  
}