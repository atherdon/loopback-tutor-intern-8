'use strict';

var express = require('express');

var app = express();


app.post('/', function(req, res){
//	req.checkBody('Name', 'Name is required').notEmpty();
  req.checkBody('username','User name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('email','Email is not valid').isEmail();
  req.checkBody('password','Password is required').notEmpty();
  req.checkBody('cpassword2','Confirm password is required').notEmpty();
  req.checkBody('cpassword2','Passwords should match').equals(req.body.password);

  var errors = req.validationErrors();
  if(errors){
  	res.render('user/signup', {errors: errors});
  }
  else{
	var uname = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var cpassword = req.body.cpassword2;


	var newUser = new User({
		username: uname,
		email: email,
		password: password
	});

	bcrypt.genSalt(10, function(err, salt){
		bcrypt.hash(newUser.password, salt, function(err, hash){
			if(err){
				console.log("user error");
			}
			newUser.password = hash;
			newUser.save(function(err){
				if(err){
					console.log("some error:u"+ uname + ", e:"+ email +", p:" + password);
					return;
				}
				else{
					console.log('You can now sign in');
					res.render('/');
				}
			});
		});
	});
	}
});

/*
app.post('/login', function(req, res) {
	User.login({
		username: req.body.username,
		password: req.body.password
		}, 'user', function(err, token) {
			if (err) {
				res.render('response', { //render view named 'response.ejs'
				title: 'Login failed',
				content: err,
				redirectTo: '/',
				redirectToLinkText: 'Try again'
			});
			return;
		}

		res.redirectTo('/', { //login user and render 'home' view
			accessToken: token.id
		});
		console.log("We reached here");
	});
});
*/