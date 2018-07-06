/*
* Settings
*/
// Set this for browserSync to know where your
// url normally is.
var localhost = "https://cme-data.test";

/*
* NPM Packages
*/
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const reload  = browserSync.reload;
const crass = require('gulp-crass');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var path = require('path');


// Static Server + watching scss/html files
gulp.task('serve', ['buttonSass', 'buttonJs', 'buttonCompressImg', 'buttonSvgstore', 'quizSass', 'quizJs', 'quizCompressImg', 'quizSvgstore'], function() {

    browserSync({
        proxy: localhost
    });

    // Watch php files
    gulp.watch('views/{quiz,button}/*.php').on('change', reload);
    gulp.watch('views/{quiz,button}/*/*.php').on('change', reload);

    // BUTTON
    // Watch SCSS file for change to pass on to sass compiler,
    gulp.watch('views/button/assets/css/*.scss', ['buttonSass']);
    // Watch SCSS file for change to pass on to sass compiler,
    gulp.watch('views/button/assets/js/*.js', ['buttonJs']);
    // run img compression when images added to directory
    gulp.watch('views/button/assets/img/*.*', ['buttonCompressImg']);
    // run SVG when svg files added
    gulp.watch('views/button/assets/svg/*.svg', ['buttonSvgstore']);
    
    // JS
    // Watch SCSS file for change to pass on to sass compiler,
    gulp.watch('views/quiz/assets/css/*.scss', ['quizSass']);
    // Watch SCSS file for change to pass on to sass compiler,
    gulp.watch('views/quiz/assets/js/*.js', ['quizJs']);
    // run img compression when images added to directory
    gulp.watch('views/quiz/assets/img/*.*', ['quizCompressImg']);
    // run SVG when svg files added
    gulp.watch('views/quiz/assets/svg/*.svg', ['quizSvgstore']);

    // Watch our CSS file and reload when it's done compiling
    gulp.watch('views/{button,quiz}/dist/css/*.css').on('change', reload);
    // watch javascript files
    gulp.watch('views/{button,quiz}/dist/js/*.js').on('change', reload);
});

function processSvg(base) {
    return gulp
        .src('views/'+base+'/assets/svg/*.svg')
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            };
        }))
        .pipe(svgstore({ inlineSvg: true }))
        .pipe(gulp.dest('views/'+base+'/dist/svg/'));
}


gulp.task('buttonSass', function () {
    processSASS('button');
});


gulp.task('buttonJs', function() {
    compressJS('button')
});

gulp.task('buttonCompressImg', function() {
    return compressImg('button');
});

gulp.task('buttonSvgstore', function () {
    processSvg('button')
});

gulp.task('quizJs', function() {
    compressJS('quiz')
});

gulp.task('quizSass', function () {
    processSASS('quiz');
});

gulp.task('quizCompressImg', function() {
    return compressImg('quiz');
});

gulp.task('quizSvgstore', function () {
    processSvg('quiz')
});

function compressJS(base) {
    var jsFiles = 'views/'+base+'/assets/js/*.js',
    jsDest = 'views/'+base+'/dist/js';

    return gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(babel())
        .pipe(concat(base+'.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename(base+'.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
}

function compressImg(base) {
    return gulp.src('views/'+base+'/assets/img/*')
            .pipe(imagemin())
            .pipe(gulp.dest('views/'+base+'/dist/img'));
}

function processSASS(base) {

    return gulp.src('views/'+base+'/assets/css/style.scss')
      // Converts Sass into CSS with Gulp Sass
      .pipe(plumber())
      .pipe(sass({
        errLogToConsole: true
      }))
      // adds prefixes to whatever needs to get done
      .pipe(autoprefixer())

      // minify the CSS
      .pipe(crass({pretty:false}))

      // rename to add .min
      .pipe(rename({
        suffix: '.min'
      }))
      // Outputs CSS files in the css folder
      .pipe(gulp.dest('views/'+base+'/dist/css/'));
}

// Creating a default task
gulp.task('default', ['serve']);
