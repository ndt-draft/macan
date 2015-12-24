'use strict';

var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
        port: 3333,
        files: ['index.html', 'assets/css/*.css']
    })
})
