const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

var sassFiles = {
  src: "./styles/sass/*.scss",
  dest: "./styles/css/"
};
gulp.task('sass', function() {
  var plugins = [
    autoprefixer
  ];
  return gulp.src(sassFiles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(sassFiles.dest));
});
gulp.task('watch', function() {
  gulp.watch(sassFiles.src, ['sass'])
});
gulp.task('default', ['watch']);