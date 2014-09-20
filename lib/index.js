/**
 * sails-generate-bower
 *
 * Usage:
 * `sails generate bower`
 *
 * @type {Object}
 */

var path = require('path'),
    merge = require('./merge-json'),
    insertAfter = require('./insert-after'),
    update = require('./update');

var templates = require('path').resolve(__dirname,'../templates');

module.exports = {

	templatesDirectory: templates,

	before: require('./before'),

	targets: {

        './assets/images/logos': { folder: {} },
        './assets/images/logos/angularjs.png': { copy: 'assets/images/logos/angularjs.png' },
        './assets/images/logos/nodejs.png': { copy: 'assets/images/logos/nodejs.png' },
        './assets/images/logos/sails-logo.png': { copy: 'assets/images/logos/sails-logo.png' },
        './assets/src': { folder: {} },
        './assets/src/app': { folder: {} },
        './assets/src/app/app.js': { template: 'assets/src/app/app.js' },
        './assets/src/app/about': { folder: {} },
        './assets/src/app/about/index.js': { template: 'assets/src/app/about/index.js' },
        './assets/src/app/about/index.tpl.html': { template: 'assets/src/app/about/index.tpl.html' },
        './assets/src/app/header': { folder: {} },
        './assets/src/app/header/index.js': { template: 'assets/src/app/header/index.js' },
        './assets/src/app/header/index.tpl.html': { template: 'assets/src/app/header/index.tpl.html' },
        './assets/src/app/home': { folder: {} },
        './assets/src/app/home/index.js': { template: 'assets/src/app/home/index.js' },
        './assets/src/app/home/index.tpl.html': { template: 'assets/src/app/home/index.tpl.html' },
        './assets/src/app/users': { folder: {} },
        './assets/src/app/users/index.js': { template: 'assets/src/app/users/index.js' },
        './assets/src/app/users/index.tpl.html': { template: 'assets/src/app/users/index.tpl.html' },
        './assets/src/common': { folder: {} },
        './assets/src/common/directives': { folder: {} },
        './assets/src/common/directives/blink.js': { template: 'assets/src/common/directives/blink.js' },
        './assets/src/common/models': { folder: {} },
        './assets/src/common/models/index.js': { template: 'assets/src/common/models/index.js' },
        './assets/src/common/models/User.js': { template: 'assets/src/common/models/User.js' },
        './assets/src/common/services': { folder: {} },
        './assets/src/common/services/config.js': { template: 'assets/src/common/services/config.js' },
        './assets/src/common/services/index.js': { template: 'assets/src/common/services/index.js' },
        './assets/src/common/services/lodash.js': { template: 'assets/src/common/services/lodash.js' },
        './assets/src/common/services/title.js': { template: 'assets/src/common/services/title.js' },
        './assets/src/common/services/utils.js': { template: 'assets/src/common/services/utils.js' },
        './api/controllers/HomeController.js': { copy: 'api/controllers/HomeController.js' },
        './views/home': { folder: {} },
        './views/home/index.ejs': { copy: 'views/home/index.ejs' },

		'./': { exec: function (scope, cb) { console.log('Running generator (sails-generate-angular-gulp) @ `'+scope.rootPath+'`...'); cb(); }},

		'./bower.json': { exec: merge(path.join(templates, 'bower.json'))},

		'./tasks/config/html2js.js': {copy: path.join(templates, '/tasks/config/html2js.js')},

        './config/blueprints.js': { exec: insertAfter('prefix: \'', [['/api']]) },

        './views/layout.ejs': { exec: update(path.join(templates, '/views/layout.ejs')) },

        './tasks/pipeline.js': { exec: insertAfter('installing new tasks.', [['\nvar ngTemplateFilesToInject = [\n  \'src/app/**/*tpl.html\'\n];']], 'first place)', [['\nmodule.exports.ngTemplateFilesToInject = ngTemplateFilesToInject.map(function(path) {\n  return \'assets/\' + path;\n});']])},

	'./tasks/register/compileAssets.js': { exec: insertAfter('\'jst:dev\',', [['\n          \'html2js:dev\',']]) },
        './tasks/config/sails-linker-gulp.js': { exec: insertAfter('growl) {', [['\n    gulp.task(\'sails-linker-gulp:devTplNg\', function() {\n		// Read templates\n		return gulp.src([\'.tmp/public/index.html\', \'views/**/*.html\', \'views/**/*.ejs\'])\n				// Link the ng Templates\n				.pipe(plugins.linker({\n					scripts: [\'.tmp/public/templates.js\'],\n					startTag: \'<!--TEMPLATES-->\',\n					endTag: \'<!--TEMPLATES END-->\',\n					fileTmpl: \'<script type=\"text/javascript\" src=\"%s\"></script>\',\n					appRoot: \'.tmp/public\',\n				}))\n				// Write modified files to www/\n				.pipe(gulp.dest(\'views/\'))\n				.pipe(plugins.if(growl, plugins.notify({ message: \'sails-linker-gulp devTpl task complete\' })));\n	});']]) },
        './tasks/config/copy.js': { exec: insertAfter('!assets/images{,/**}', [[', \'!assets/src/{,/**}\'']]) },
        './config/routes.js': { exec: insertAfter('.routes = {', [['\n\'get /home\': \'HomeController.index\','], ['\n\'get /about\': \'HomeController.index\',']]) },
		'./package.json': { exec: merge(path.join(templates, 'package.json')) },
        './tasks/register/linkAssets.js': { exec: insertAfter('\'sails-linker-gulp:devTpl\',', [['\n            \'sails-linker-gulp:devTplNg\',']]) }

    }
};
