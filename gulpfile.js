'use strict';

// Loading Gulp Plugins
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

// Adding Gulp Tasks for SASS and Browser-Sync
gulp.task('sass', function () {
    return gulp.src('./6-Boostrap-Training/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
  
  gulp.task('sass:watch', function () {
    gulp.watch('./6-Boostrap-Training/*.scss', ['sass']);
  });
  
  gulp.task('browser-sync', function () {
     var files = [
        './*.html',
        './6-Boostrap-Training/*.css',
        './6-Boostrap-Training/img/*.{png,jpg,gif}',
        './6-Boostrap-Training/*.js'
     ];
  
     browserSync.init(files, {
        server: {
           baseDir: "./"
        }
     });
  
  });
  
  // Default task
  gulp.task('default', ['browser-sync'], function() {
      gulp.start('sass:watch');
  });