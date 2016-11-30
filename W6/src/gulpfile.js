/**
 * Created by kevinderudder on 05/10/16.
 */
var gulp = require("gulp"),
    htmlhint = require("gulp-htmlhint"),
    sourcemaps = require("gulp-sourcemaps"),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCSS = require("gulp-clean-css"),
    csslint = require('gulp-csslint'),
    jshint = require("gulp-jshint"),
    jsStylish = require("jshint-stylish"),
    uglify = require("gulp-uglify"),
    notify = require("gulp-notify");
    concat = require("gulp-concat");


const PATHS = {
    EXTERNALS : {
        SRC: './bower_components/',
        DEST: './wwwroot/lib'
    },
    CSS : {
        SRC: './app/css/**/*.css',
        DEST: './wwwroot/css'
    },
    HTML : {
        SRC: './wwwroot/**/*.html'
    },
    JS: {
        LIB: "./app/lib/**/*.js",
        SRC: "./app/js/**/*.js",
        DEST: "./wwwroot/js"
    }
};

gulp.task("default", function(){
    var htmlWatcher = gulp.watch(PATHS.HTML.SRC, ['html-validate']);
    var cssWatcher = gulp.watch(PATHS.CSS.SRC, ['css']);
    cssWatcher.on('change', function(event){
        console.log("File: " + event.path + " was " + event.type);
    });

});

const AUTOPREFIXOPTIONS = {
    browsers: ['last 2 versions']
};

gulp.task("css", function(){

    gulp.src(PATHS.CSS.SRC)
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(AUTOPREFIXOPTIONS))
        .pipe(csslint())
        //.pipe(csslint.formatter())
        .pipe(concat("main.min.css"))
        .pipe(cleanCSS({debug: true, compatibility: '*'}, function(details){
            //console.log(details);
            console.log(details.name +": " + details.stats.originalSize);
            console.log(details.name +": " + details.stats.minifiedSize);
        }))
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
        .pipe(jshint.reporter(jsStylish))
        .pipe(sourcemaps.init())
        .pipe(concat("app.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(PATHS.JS.DEST))
        .pipe(notify({message: 'js built'}));
});

gulp.task("html-validate", function(){
    gulp.src(PATHS.HTML.SRC)
        .pipe(htmlhint('.htmlhintrc'))
        .pipe(htmlhint.reporter("htmlhint-stylish"));
        //.pipe(htmlhint.failReporter());
});

gulp.task("copy-externals", function(){
    // dist folder van bower_components nr lib in wwwroot kopieren
    gulp.src(PATHS.EXTERNALS.SRC + "bootstrap/dist/**")
        .pipe(gulp.dest(PATHS.EXTERNALS.DEST + "/bootstrap"))
});