"use strict";

//******************************************************************************
//* DEPENDENCIES
//******************************************************************************

var gulp = require("gulp"),
    tslint = require("gulp-tslint"),
    runSequence = require("run-sequence"),
    tsc = require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps"),
    karma = require("karma"),
    source = require("vinyl-source-stream"),
    buffer = require("vinyl-buffer"),
    browserify = require("browserify");

//******************************************************************************
//* LINT
//******************************************************************************

gulp.task("lint", function () {

    var config = { formatter: "verbose", emitError: (process.env.CI) ? true : false };

    return gulp.src([
        "src/**/**.ts",
        "test/pipe/**.ts" // TODO: before release replace for "test/**/**.ts"
    ])
        .pipe(tslint(config))
        .pipe(tslint.report());
});

//******************************************************************************
//* BUILD
//******************************************************************************
var tsLibProject = tsc.createProject("tsconfig.json", { module: "commonjs", typescript: require("typescript") });

gulp.task("build-lib", function () {
    return gulp.src([
        "src/**/**.ts"
    ])
        .pipe(tsLibProject())
        .on("error", function (err) {
            process.exit(1);
        })
        .js.pipe(gulp.dest("lib/"));
});

var tsEsProject = tsc.createProject("tsconfig.json", { module: "es2015", typescript: require("typescript") });

gulp.task("build-es", function () {
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

gulp.task("build-dts", function () {
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
//* TEST
//******************************************************************************



var tstProject = tsc.createProject("tsconfig.json", { typescript: require("typescript") });

gulp.task("build-src", function () {
    return gulp.src([
        "src/**/*.ts"
    ])
        .pipe(sourcemaps.init())
        .pipe(tstProject())
        .on("error", function (err) {
            process.exit(1);
        })
        .js.pipe(sourcemaps.write())
        .pipe(gulp.dest("src/"));
});

var tsTestProject = tsc.createProject("tsconfig.json", { typescript: require("typescript") });

gulp.task("build-test", function () {
    return gulp.src([
        "test/**/**.ts"
    ])
        .pipe(sourcemaps.init())
        .pipe(tsTestProject())
        .on("error", function (err) {
            process.exit(1);
        })
        .js.pipe(sourcemaps.write())
        .pipe(gulp.dest("test"));
});
gulp.task("bundle-test", ["build-test"], function () {

    var mainJsFilePath = [
        "test/utils/helper-pipe.spec.js",
        "test/utils/utils.spec.js",
        "test/pipes/order-by-date.pipe.spec.js",
        "test/pipes/order-by-number.pipe.spec.js",
        "test/pipes/order-by-string.pipe.spec.js",
        "test/pipes/order-by-object-array.pipe.spec.js"];
    var outputFolder = "temp/";
    var outputFileName = "bundle.test.js";

    var bundler = browserify({
        debug: true,
        standalone: "pipes"
    });

    for (var i = 0; i < mainJsFilePath.length; i++) {
        bundler.add(mainJsFilePath[i]);
    }

    return bundler.bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(outputFolder));
});

gulp.task("karma", ["bundle-test"], function (done) {
    return new karma.Server({
        configFile: __dirname + "/karma.conf.js"
    }, function (code) {
        if (code === 1) {
            console.log('Browser test failures, exiting process');
            done('Browser test Failures');
        } else {
            console.log('Browser tests passed');
            done();
        }
    }).start();
});

gulp.task("test", function () {
    runSequence("build-src", "karma");
})

//******************************************************************************
//* DEFAULT
//******************************************************************************
gulp.task("build", function (cb) {
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