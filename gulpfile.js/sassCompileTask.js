const { series, dest, src } = require('gulp');

const sass = require('../src/node_modules/gulp-sass');
const autoprefix = require('../src/node_modules/gulp-autoprefixer');
const cssClear = require('../src/node_modules/gulp-clean-css');

const sassSrcDest = 'src/sass/main.sass';
const compiledDest = 'assets/styles/';

function _compileSassToCss(){
  return src(sassSrcDest)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix())
    .pipe(cssClear({
      format: 'beautify'
    }))
    .pipe(dest(compiledDest));
}

const sassCompileTask = series(_compileSassToCss);
exports.sassCompileTask = sassCompileTask;