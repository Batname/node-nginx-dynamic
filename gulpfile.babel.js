import gulp from 'gulp';
import path from 'path';

function lazyRequireTask(path) {
  var args = [].slice.call(arguments, 1);
  return function(callback) {
    var task = require(path).apply(this, args);

    return task(callback);
  };
}

gulp.task('config:nginx', lazyRequireTask('./tasks/configNginx'));

gulp.task('default', []);