const _         = require('../plugin');
const dir       = require('../dir');
const ejs = require('./ejs');
const jsBuild = require('./js');
const sass = require('./sass');

//自動リロード
const browsersync = () => {
    _.browserSync({
        server: {
            baseDir: dir.dist.html
        },
        open: 'external',
        https: true
    });

    _.watch(`${dir.src.ejs}/**/*.ejs`, _.gulp.series(ejs, _.browserSync.reload));
    _.watch([`${dir.src.scss}/**/*.scss`, `!${dir.src.scss}/util/_var.scss`], _.gulp.series(sass, _.browserSync.reload));
    _.watch([`${dir.src.js}/**/*.js`, `!${dir.src.js}/concat/**/*.js`], _.gulp.series(jsBuild, _.browserSync.reload));
};

module.exports = _.gulp.series(browsersync);
