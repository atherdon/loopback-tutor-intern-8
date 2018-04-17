'use strict';


var config = require('../../server/config.json');
var path = require('path');
var senderAddress = "arthur.tkachenko.netweight@gmail.com";

var host = "127.0.0.1" || config.host;
var port = "3001" || config.port;//adjust in final build
//var senderEmailPassword = "biBcf1K8r4Yn";

module.exports = function(Userdata) {
  //send verification email after registration
  Userdata.afterRemote('create', function(context, user, next) {
    //console.log("this is context" + context);
    var options = {
      type: 'email',
      to: user.email,
      from: "<no-reply@groceristar.com>",
      subject: 'Thanks for registering.',
      text: "please verify the link",
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: /*'http://' + host + ':' + port + */'/verified',
      user: user
    };

    user.verify(options, function(err, response) {
      if (err) {
        Userdata.deleteById(user.id);
        return next(err);
      }
      //adjust this in react
      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' +
            'before logging in.',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });
  
  // Method to render
  Userdata.afterRemote('prototype.verify', function(context, user, next) {
    context.res.render('response', {
      title: 'A Link to reverify your identity has been sent '+
        'to your email successfully',
      content: 'Please check your email and click on the verification link '+
        'before logging in',
      redirectTo: '/',
      redirectToLinkText: 'Log in'
    });
  });

  //send password reset link when requested
  Userdata.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    //var url = 'http://' + config.host + ':' + config.port + '/api/userData/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">here</a> to reset your password';
        console.log("yes reset reached here with this access token"+ info.accessToken.id);
    Userdata.app.models.Email.send({
      to: info.email,
      from: senderAddress,
      subject: 'Password reset',
      html: html
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });

  //render UI page after password change
  Userdata.afterRemote('changePassword', function(context, user, next) {
    context.res.render('response', {
      title: 'Password changed successfully',
      content: 'Please login again with new password',
      redirectTo: '/',
      redirectToLinkText: 'Log in'
    });
  });

  //render UI page after password reset
  Userdata.afterRemote('setPassword', function(context, user, next) {
    context.res.render('response', {
      title: 'Password reset success',
      content: 'Your password has been reset successfully',
      redirectTo: '/',
      redirectToLinkText: 'Log in'
    });
  });
};

/*Settings for gmail
  "emailds": {
    "name": "emailds",
    "transports": [
      {
        "type": "smtp",
        "host": "smtp.gmail.com",
        "secure": true,
        "port": 465,
        "tls": {
          "rejectUnauthorized": false
        },
        "auth": {
          "user": "",
          "pass": ""
        }
      }
    ],
    "connector": "mail"
  }

*/