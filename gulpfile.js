var gulp = require('gulp'),
    es = require('event-stream'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    htmlmin = require('gulp-htmlmin'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    copy = require('gulp-copy'),
    del = require('del'),
    cleanCSS = require('gulp-clean-css');

var destination = "./docs";

gulp.task('js', function() {
    return gulp.src(['./src/js/*.js'])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(destination));
});

gulp.task('css', function() {
    return gulp.src('./src/css/*.css')
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(destination));
});

gulp.task('html', function() {
    return gulp.src('./src/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(destination));
});

gulp.task('img', function() {
    return gulp.src('./src/img/*')
        .pipe(gulp.dest(destination));
});

gulp.task('static', function() {
    return gulp.src('./src/static/*')
        .pipe(gulp.dest(destination));
});

gulp.task('clean', function () {
  return del([destination + '/**/*']);
});

gulp.task("all", ["js", "html", "css", "img", "static"]);

gulp.task('watcher', function() {
    var watcher = gulp.watch('./src/**/*', ['all']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task("default", ["clean", "all", "watcher"]);

gulp.task("build", ["clean", "all"]);
