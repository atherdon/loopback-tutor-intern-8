'use strict';

var dsConfig = require('../datasources.json');
	module.exports = function(app) {

	app.get('/verified', function(req, res) {
    res.render('verified');
  });


  
  
}