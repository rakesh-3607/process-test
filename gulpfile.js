var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var removeLogs = require('gulp-removelogs');
var ngAnnotate = require('gulp-ng-annotate');
var minifyHTML = require('gulp-htmlmin');
var usemin = require('gulp-usemin');
var connect = require('gulp-connect');
var paths = {
  scripts: ['js/**/*.js'],
  templates: './views/*.html',
  index: './index.html',
}

gulp.task('jsHandler', function() {
  return gulp.src(paths.scripts)
    .pipe(concat('sn-file-uploader.js',{
      newLine:'\n;'
    }))
    // .pipe(removeLogs())
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('usemin',function (){
  return gulp.src(paths.index)
    .pipe(usemin({
      js: [uglify(),'concat'],
      css: ['concat']
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('views', function () {
  return gulp.src(paths.templates)
    .pipe(minifyHTML({collapseWhitespace: true,removeComments:true}))
    .pipe(concat('dist/js/sn-file-uploader.js'))
});

gulp.task('webserver', function () {
  connect.server({
    root: 'dist',
    livereload: true,
    host:'0.0.0.0',
    port: 9000,
    fallback: './dist/index.html'
  });
});

gulp.task('build', ['jsHandler', 'usemin', 'views']);
gulp.task('default',['build', 'webserver']);
