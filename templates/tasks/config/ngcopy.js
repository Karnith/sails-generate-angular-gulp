/**
 * Created by mmarino on 10/9/2014.
 */
/**
 * Copy angular files and folders.
 *
 * ---------------------------------------------------------------
 *
 *
 */
module.exports = function(gulp, plugins, growl) {
    gulp.task('copy:devng', function() {
        return gulp.src(['assets/src/**/*.js'])
            .pipe(gulp.dest('.tmp/public/src'))
            .pipe(plugins.if(growl, plugins.notify({ message: 'Copy dev task complete' })));
    });
};
