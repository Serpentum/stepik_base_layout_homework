const {series, watch} = require('gulp');

const bs = require('../src/node_modules/browser-sync');
const sass = require('../gulpfile.js/sassCompileTask')
const home = './';
const sassDir = 'src/sass/*.sass';
const cssDir = 'assets/styles/*.css';
const html = 'index.html';

function _serverStart(){
    bs.init({
        server: {
            baseDir: home
        }
    });

    watch(sassDir).on('change', sass.sassCompileTask);
    watch(cssDir).on('change', bs.reload);
    watch(html).on('change', bs.reload);
}

const pageReloadTask = series(_serverStart);
exports.pageReloadTask = pageReloadTask;