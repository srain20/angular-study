var gulp = require("gulp"),
    uglify = require("gulp-uglify"),
    concat = require("gulp-concat"),
    rename = require("gulp-rename");

var path = {
    libfiles: [
        "bower_components/angular/angular.min.js",
        "bower_components/angular-touch/angular-touch.min.js",
        "bower_components/angular-animate/angular-animate.min.js",
        "bower_components/angular-sanitize/angular-sanitize.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
        "bower_components/angular-resource/angular-resource.min.js",
        "bower_components/angular-ui-router/release/angular-ui-router.min.js",
    ]
}

var Defer = function() {

  var max = 0,wait_max = 0, count = 0, callback = null;

  function onEventEnd() {
      if (max === ++count) {
            callback && callback();
          }
    }

  this.until = function(ev) {
      max++;
      ev.on('end', onEventEnd);
    };

  this.exec = function(cb) {
      callback = cb;
    };
};

gulp.task('libs',function(callback){
  var d = new Defer();
  d.until(
    gulp.src(path.libfiles)
    //.pipe(uglify())
    .pipe(concat('libs.js'))
    .pipe(gulp.dest("scripts/"))
  )
  d.exec(function() {
    callback();
  });
});

gulp.task('app',function(callback){
  var d = new Defer();
  d.until(
    gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest("scripts/"))
  )
  d.exec(function() {
    callback();
  });
});

var watcher = gulp.watch('js/**/*.js', ['app']);
watcher.on('change', function(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});