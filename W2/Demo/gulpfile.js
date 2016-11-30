/**
* @Author: thomasvanhoutte
* @Date:   2016-10-05T09:53:07+02:00
* @Last modified by:   thomasvanhoutte
* @Last modified time: 2016-10-12T12:07:16+02:00
*/
var gulp = require("gulp"),
    htmlhint = require("gulp-htmlhint"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS = require("gulp-clean-css"),
    jsStylish = require("jshint-stylish"),
    concat = require("gulp-concat");
var csslint = require('gulp-csslint');
var jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify");
var sass = require('gulp-sass');

const PATHS = {
  EXTERNALS : {
    SRC : "./bower_components/",
    DEST : "./wwwroot/lib"
  },
  CSS : {
    SRC : "./app/css/**/*.css",
    SASS: "./app/scss/**/*.scss",
    DEST : "./wwwroot/css"
  },
  JS : {
    LIB : "./app/lib/**/*.js",
    SRC : "./app/js/**/*.js",
    DEST : "./wwwroot/js"
  },
  HTML : {
    SRC : "./wwwroot/**/*.html"
  }
};

const AUTOPREFIXOPTIONS = {
  browsers: ["last 2 versions"]
};

gulp.task("default", function(){
  var htmlWatcher = gulp.watch(PATHS.HTML.SRC, ['html-validate']);
  var cssWatcher = gulp.watch(PATHS.CSS.SRC, ['css']);
  var jsWatcher = gulp.watch(PATHS.JS.SRC, ['js']);
  var sassWatcher = gulp.watch(PATHS.CSS.SASS, ['sass']);
  htmlWatcher.on("change", function(event){
    console.log("File: "+ event.path + ' was ' + event.type);
  });
  cssWatcher.on("change", function(event){
    console.log("File: "+ event.path + ' was ' + event.type);
  });
  jsWatcher.on("change", function(event){
    console.log("File: "+ event.path + ' was ' + event.type);
  });
  sassWatcher.on("change", function(event){
    console.log("File: "+ event.path + ' was ' + event.type);
  });
});

gulp.task("sass", function () {
  gulp.src(PATHS.CSS.SASS)
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.css"))
    .pipe(sass.on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(PATHS.CSS.DEST));
});

gulp.task("css", function(){
  gulp.src(PATHS.CSS.SRC)
      .pipe(sourcemaps.init())
      .pipe(autoprefixer(AUTOPREFIXOPTIONS))
      .pipe(concat("main.min.css"))
      .pipe(cleanCSS({debug : true, compatibility : "*"}, function(details){
        console.log(details.name + " : " + details.stats.originalSize);
        console.log(details.name + " : " + details.stats.minifiedSize);
      }))
      .pipe(csslint())
      //.pipe(csslint.formatter())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(PATHS.CSS.DEST));
});

gulp.task("lib", function(){
    gulp.src(PATHS.JS.LIB)
        .pipe(jshint())
        .pipe(jshint.reporter(jsStylish))
        .pipe(sourcemaps.init())
        .pipe(concat("kdr.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.JS.DEST))
        .pipe(notify({message: 'lib built'}));
});

gulp.task("js", function(){
  gulp.src(PATHS.JS.SRC)
      .pipe(jshint())
      .pipe(sourcemaps.init())
      .pipe(concat("app.min.js"))
      .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(PATHS.JS.DEST));
});

gulp.task("html-validate", function(){
  gulp.src(PATHS.HTML.SRC)
      .pipe(htmlhint(".htmlhintrc"))
      .pipe(htmlhint.reporter("htmlhint-stylish"));
      //.pipe(htmlhint.failReporter());
});

gulp.task("copy-externals", function(){
  /*
   * dist folder van bower_components naar lib in wwroot kopiëren
   */
gulp.src(PATHS.EXTERNALS.SRC + "bootstrap/dist/**")
    .pipe(gulp.dest(PATHS.EXTERNALS.DEST + "/bootstrap"));
});
