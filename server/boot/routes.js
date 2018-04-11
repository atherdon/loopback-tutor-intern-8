'use strict';


module.exports = function(app) {

const nodemailer = require('nodemailer');
	var router = app.loopback.Router();

	router.get('/hello', function(req, res,next) {
		res.send("now lets check if this works");
	});

	app.use(router);



//==

	router.post('/confirmmail', function(req, res, next){
		let transporter = nodemailer.createTransport({
			host: 'smtp.ethereal.email',
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: account.user, // generated email id
				pass: account.pass // generated email password
			}
		});

		// setup email data with unicode symbols
		let mailOptions = {
			from: '"Groceristar" <noreply@groceristar.com>', // send from address
			to: 'bar@example.com, baz@example.com', // send to
			subject: 'Welcome to Groceristar', // Subject line
			text: 'Please click the link below to verify yourself', // plain text body
			html: '<b>URL</b>' // html body
		};

// send mail with defined transport object
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return console.log(error);
			}
			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
		// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
		});
	});
}