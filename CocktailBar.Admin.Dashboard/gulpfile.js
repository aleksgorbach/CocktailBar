var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var moduleImporter = require('sass-module-importer');

// ----- JAVASCRIPT ------

gulp.task("bundleWithWatch", function() {
    var bundler = watchify(browserify('src/index.js'));
    bundler.transform(babelify);

    bundleJs(bundler);
    bundler.on('update', () => {
        bundleJs(bundler);
    });
});

gulp.task("bundle", function() {
    var bundler = browserify('src/index.js');
    bundler.transform(babelify);
    bundleJs(bundler);
});

function bundleJs(bundler) {
    bundler.bundle()
        .on('error', function(err) {
            console.error(err);
        })
        .pipe(source('build.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./wwwroot/js/'));
}


// ----- CSS ------

gulp.task('sass', function() {
    return gulp.src('./src/styles/site.scss')
        .pipe(sass({
            importer: moduleImporter()
        }).on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('sassWithWatch', ['sass'], function() {
    gulp.watch("./src/styles/**/*.scss", ['sass']);
})


// -------------------------------------
gulp.task('webserver', function() {
    gulp.src('wwwroot')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});


// just build
gulp.task('build', ['sass', 'bundle']);

// build and watch 
gulp.task('watch', ["sassWithWatch", "bundleWithWatch"]);

// by default - watch on livereloading server
gulp.task('default', ['watch', 'webserver']);