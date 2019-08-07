'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync');
// const sass = require('gulp-sasss');
const stylus = require('gulp-stylus');

// const style = function() {
//   // .styl file location
//   return gulp.src('./app/login/login.scss')
//     // Compiling .styl file into .css  
//     .pipe(sass().on('error'), sass.logError)
//     // .css file location
//     .pipe(gulp.dest('./app/login'))
// }

// Login stylus building treatment
const style = function() {
  // .styl file location
  return gulp.src('./app/login/login.styl')
    // Compiling .styl file into .css  
    .pipe(stylus())
    // .css file location
    .pipe(gulp.dest('./app/login/'))
    // syncing with browser
    .pipe(browserSync.stream());
}

// Files change watch treatment
const watch = function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  // .styl file watch
  gulp.watch('./app/**/*.styl', style);
  // .html file watch
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  // .js files watch
  gulp.watch('./app/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;