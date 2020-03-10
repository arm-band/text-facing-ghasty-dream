module.exports = {
    gulp:  require('gulp'),
    watch: require('gulp-watch'),
    plumber: require('gulp-plumber'),
    notify: require('gulp-notify'),
    concat: require('gulp-concat'),
    sass:  require('gulp-sass'),
    autoprefixer: require('gulp-autoprefixer'),
    uglify: require('gulp-uglify-es').default,
    rename: require('gulp-rename'),
    ejs: require('gulp-ejs'),
    data: require('gulp-data'),
    browserSync: require('browser-sync'),
    requireDir: require('require-dir')
};
