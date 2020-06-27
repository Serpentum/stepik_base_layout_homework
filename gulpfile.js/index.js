const { task, series } = require( 'gulp' );

const sass = require("./sassCompileTask");
const sync = require("./pageReloadTask");

task('sass', series(sass.sassCompileTask));
task('sync', series(sync.pageReloadTask));
task('default', series(sync.pageReloadTask, sass.sassCompileTask))