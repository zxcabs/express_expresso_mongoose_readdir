var fs = require('fs'),
	express = require('express'),
	mongoose = require('mongoose'),
	app,
	db;
	
app = module.exports = express.createServer();
db = mongoose.connect('mongodb://localhost/blabla');

function NotFound(msg){
  this.name = 'NotFound';
  Error.call(this, msg);
}

NotFound.prototype.__proto__ = Error.prototype;

app.error(function (err, req, res) {
	res.send(err.name);
});

function init() {

	app.get('/404', function(req, res, next){
	  next(new NotFound);
	});

	if (!module.parent) {
		app.listen(9999);
	}
}


app.on('close', function () {
	if (db) {
		db.disconnect();
	}
});

fs.readdir(__dirname + '/test', function () {
	init();
});