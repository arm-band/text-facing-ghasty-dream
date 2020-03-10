const _         = require('../plugin');
const dir       = require('../dir');

//js圧縮&結合&リネーム
const jsBuild = () => {
    return _.gulp.src([`${dir.src.js}/**/*.js`, `!${dir.src.js}/concat/**/*.js`])
        .pipe(_.plumber())
        .pipe(_.concat('app.js'))
        .pipe(_.gulp.dest(`${dir.src.js}/concat/`))
        .pipe(_.uglify({
            output: {
                comments: 'some'
            }
        }))
        .pipe(_.rename((path) => {
            path.basename += '.min'
            path.extname = '.js'
        }))
        .pipe(_.gulp.dest(dir.dist.js));
};

module.exports = _.gulp.series(jsBuild);
