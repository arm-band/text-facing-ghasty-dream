const _         = require('../plugin');
const dir       = require('../dir');

//scssコンパイルタスク
const scss = () => {
    return _.gulp.src(`${dir.src.scss}/**/*.scss`)
        .pipe(_.plumber())
        .pipe(_.sass({
            outputStyle: 'compressed'
        }).on('error', _.sass.logError))
        .pipe(_.autoprefixer({
            cascade: false
        }))
        .pipe(_.gulp.dest(dir.dist.css));
};

module.exports = _.gulp.series(scss);
