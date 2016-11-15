"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************

var gulp        = require("gulp"),
    tslint      = require("gulp-tslint"),
    runSequence = require("run-sequence"),
    tsc         = require("gulp-typescript");

//******************************************************************************
//* LINT
//******************************************************************************

gulp.task("lint", function() {
    
    var config =  { formatter: "verbose", emitError: (process.env.CI) ? true : false };
    
    return gulp.src([
        "src/**/**.ts"
    ])
    .pipe(tslint(config))
    .pipe(tslint.report());
});

//******************************************************************************
//* BUILD
//******************************************************************************
var tsLibProject = tsc.createProject("tsconfig.json", { module : "commonjs", typescript: require("typescript") });

gulp.task("build-lib", function() {
    return gulp.src([
        "src/**/**.ts"
    ])
    .pipe(tsLibProject())
    .on("error", function (err) {
        process.exit(1);
    })
    .js.pipe(gulp.dest("lib/"));
});

var tsEsProject = tsc.createProject("tsconfig.json", { module : "es2015", typescript: require("typescript") });

gulp.task("build-es", function() {
    return gulp.src([
        "src/**/**.ts"
    ])
    .pipe(tsEsProject())
    .on("error", function (err) {
        process.exit(1);
    })
    .js.pipe(gulp.dest("es/"));
});

var tsDtsProject = tsc.createProject("tsconfig.json", {
    declaration: true,
    noResolve: false,
    typescript: require("typescript") 
});

gulp.task("build-dts", function() {
    return gulp.src([
        "src/**/**.ts"
    ])
    .pipe(tsDtsProject())
    .on("error", function (err) {
        process.exit(1);
    })
    .dts.pipe(gulp.dest("dts"));

});

//******************************************************************************
//* DEFAULT
//******************************************************************************
gulp.task("build", function(cb) {
  runSequence(
      "lint", 
      ["build-es", "build-lib", "build-dts"],   // tests + build es and lib
      cb);
});

gulp.task("default", function (cb) {
  runSequence(
    "build",
    cb);
});