var fs = require('fs');
var path = require('path');
var _ = require('lodash');

module.exports = function(target1, pairs1, target2, pairs2) {
	return function(scope, cb) {
		insert(scope.rootPath, target1, pairs1, target2, pairs2, cb);
	}
}

function insert(path, target1, pairs1, target2, pairs2, cb) {
	fs.readFile(path, {encoding: 'utf8'}, function(err, contents) {
		if(err) return cb(err);
		_(pairs1).forEach(function (pair) {
			contents = contents.replace(target1, target1+pair);
		});

        _(pairs2).forEach(function (pair) {
            contents = contents.replace(target2, target2+pair);
        });

		fs.writeFile(path, contents, cb);
	});
}
