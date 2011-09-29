var assert = require('assert'),
	app = require('../index.js');

module.exports = {
	'test': function () {
		assert.response(app, 
			{
				method: 'GET',
				url: '/404',
			}, 
			{
				status: 200,
				body: 'NotFound'
			});				
	}	
};