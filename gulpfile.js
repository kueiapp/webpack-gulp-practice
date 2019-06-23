var gulp = require('gulp');
var path = require('path');

var autoprefixer = [
    'ie>=10',
    'ff>=30',
    'chrome>=34',
    'safari>=7',
    'opera>=23',
    'ios>=7',
    'android>=4'
];

/** tasks */
gulp.task('hello', function() {
  console.log("hello gulp ~!")
});

// integrate vendor js
const concat = require('gulp-concat');
gulp.task('vendor', function() {
    return gulp.src(['./src/vendor/*.js'] )
            .pipe( concat('vendor.js') )
            .pipe(gulp.dest('./dist/scripts') );
});

// integrate custom js
let plumber = require('gulp-plumber');
gulp.task('scripts', function() {
    return gulp.src([
        path.join('./src/scripts_es5/main.bundle.js')
    ])
    .pipe( plumber() )
    .pipe( concat('main.bundle.js') )
    .pipe( gulp.dest('./dist/scripts') )
});

// minify html
const htmlmin = require('gulp-htmlmin');
gulp.task('minify-html', () => {
  return gulp.src('./src/*.html')
    .pipe( htmlmin({ collapseWhitespace: true }) )
    .pipe(gulp.dest('./dist'));
});

// minify css files
let cleanCSS = require('gulp-clean-css'); 
gulp.task('minify-css', () => {
  return gulp.src('./src/styles/*.css')
    .pipe( cleanCSS({compatibility: 'ie8'}) )
    .pipe(gulp.dest('./dist/styles'));
});

// compile sass
let sass = require('gulp-sass');
sass.compiler = require('node-sass');
gulp.task('sass', function(){
    return gulp.src('./src/styles/**/*.scss')
    .pipe( sass({outputStyle: 'compressed'}).on('error', sass.logError) )// compress
    // .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles'));
})
gulp.task('sass:watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
});

// gulp.task('run-all',["hello","minify"]);
