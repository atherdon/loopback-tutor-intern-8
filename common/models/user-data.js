'use strict';


var config = require('../../server/config.json');
var path = require('path');
var senderEmailAddress = "arthur.tkachenko.netweight@gmail.com";
var senderEmailPassword = "biBcf1K8r4Yn";

module.exports = function(Userdata) {

	var User = app.models.userData;

  User.create({email: 'foo@bar.com', password: 'bar'}, function(err, userInstance) {
    console.log(userInstance);
  });
  
  User.afterRemote('create', function(context, userInstance, next) {
    console.log('==> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: userInstance.email,
      from: senderEmailAddress,
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user
    };

    userInstance.verify(options, function(err, response, next) {
      if (err) return next(err);

      console.log('==> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link before logging in.',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });
};
