let gulp = require('gulp');

/** tasks */
gulp.task('hello', function() {
  console.log("hello gulp ~!")
});

// 壓縮html
let htmlmin = require('gulp-htmlmin');
gulp.task('minify', function() {
  return gulp.src('src/*.html')
    .pipe(
    	htmlmin({collapseWhitespace: true})
    )
    .pipe(
    	gulp.dest('dist')
    );
});


// Static server
let browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

let cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', () => {
  return gulp.src('src/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});
// gulp.task('run-all',["hello","minify"]);