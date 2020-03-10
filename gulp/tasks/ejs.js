const _         = require('../plugin');
const dir       = require('../dir');

//ejs
const ejs = () => {
    return _.gulp.src([`${dir.src.ejs}/**/*.ejs`, `!${dir.src.ejs}/**/_*.ejs`])
    .pipe(_.plumber())
    .pipe(_.data((file) => {
        return { 'filename': file.path }
    }))
    .pipe(_.ejs())
    .pipe(_.rename({ extname: '.html' }))
    .pipe(_.gulp.dest(dir.dist.html));
};

//上記をまとめておく
module.exports = _.gulp.series(ejs);
