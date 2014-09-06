var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports = function(js) {
	return function(scope, cb) {
		update(scope.rootPath, js, cb);
	}
}

function update(path, js, cb) {
    fs.readFile(js, {encoding: 'utf8'}, function(err, replace) {
        if(err) return cb(err);
        fs.writeFile(path, replace, cb);
    });
}
