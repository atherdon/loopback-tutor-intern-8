'use strict';

var dsConfig = require('../datasources.json');

module.exports = function(handle) {
	handle.get('/userstatus', function(req, res, next){
		res.send(req.user);
	});
}