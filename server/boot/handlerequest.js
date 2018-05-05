'use strict';

var dsConfig = require('../datasources.json');

module.exports = function(handle) {

	handle.get('/userstatus', function(req, res, next){
	//	res.json(req.user);
		res.status(200).send(req.user)
	});
}