/**
 * html.js.
 *
 * ---------------------------------------------------------------
 *
 * Gulp task to convert html to js.
 *
 */

module.exports = function (gulp, plugins, growl) {
    gulp.task('html2js:dev', function () {
        return gulp.src(require('../pipeline').ngTemplateFilesToInject)
            .pipe(plugins.ngHtml2js({
                moduleName: "templates-app"
            })
        )
        .pipe(plugins.concat('templates.js'))
        .pipe(gulp.dest('.tmp/public'))
        .pipe(plugins.if(growl, plugins.notify({ message: 'insert growl message' })));
    });
};