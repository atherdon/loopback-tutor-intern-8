'use strict';

const app = express();

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

		res.render('/Users', { //login user and render 'home' view
			accessToken: token.id;
			console.log("We reached here");
		});
	});
});