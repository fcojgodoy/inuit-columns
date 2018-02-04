const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');


// sass task
gulp.task('sass', function () {
  return gulp.src('./test/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./test/css'))
});

// concat task
gulp.task('concat', function() {
  return gulp.src(['src/settings/*.scss', 'src/tools/*.scss', 'src/utilities/*.scss'])
    .pipe(concat('inuit-columns.scss'))
    .pipe(gulp.dest('./'));
});

// watch task
gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss', ['sass']);
});

// build
gulp.task('build', ['concat', 'sass']);

// default
gulp.task('default', ['sass', 'watch']);
