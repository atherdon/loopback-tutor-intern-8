'use strict';

module.exports = function(app) {
	app.post('/login', function(req, res) {
		User.login({
			email: req.body.email,
			password: req.body.password
		}, 'user', function(err, token) {
			if (err) {
				res.render('/edit', { //render view named 'response.ejs'
				title: 'Login failed',
				content: err,
				redirectTo: '/',
				redirectToLinkText: 'Try again'
				});
				return;
			}

			res.render('/view', { //login user and render 'home' view
				userID: token.userId,
				accessToken: token.id
			});
		});
	});

	app.post('/', function(req, res) {
		User.create({
			email: req.body.email,
			password: req.body.password
		}, 'user', function(err, token) {
			if (err) {
				res.render('/edit', { //render view named 'response.ejs'
				title: 'Creation failed',
				content: err,
				redirectTo: '/',
				redirectToLinkText: 'Try again'
				});
				return;
			}

			res.render('/view', { //login user and render 'home' view
				userID: token.userId,
				accessToken: token.id
			});
		});
	});
};