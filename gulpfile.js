var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var externals = Object.keys(require('./package.json').dependencies);

gulp.task('vendors', function(){
    var bundler = browserify();
    externals.forEach(function(x){bundler.require(x);});
    bundler.transform(babelify);
    var stream = bundler.bundle();
    return stream
        .pipe(source('vendors.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('bundle', function(){
    var bundler = browserify({ debug: true });
    externals.forEach(function(x){bundler.exclude(x).external(x)});
    bundler.require(require.resolve('./src/js/app.js'), {entry: true});
    bundler.transform(babelify);
    var stream = bundler.bundle();
    return stream
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function(){
    gulp
        .src('./src/www/index.html')
        .pipe(gulp.dest('./dist/www'))
});

gulp.task('images', function(){
    gulp
        .src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))
});

gulp.task('css', function(){
    gulp
        .src('./src/css/*.css')
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('fonts', function(){
    gulp
        .src('./src/fonts/*')
        .pipe(gulp.dest('./dist/fonts'))
});

gulp.task('default', ['vendors', 'bundle', 'html', 'images', 'css', 'fonts']);
