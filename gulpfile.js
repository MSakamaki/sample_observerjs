"use strict";

var gulp = require("gulp");
var esmangle = require("gulp-esmangle");
var rename = require("gulp-rename");

// var SRC = "./js/observer.js";
// var DIST = "./dist/";
// var TARGET = "observer.min.js";

// gulp.task("minify", function() {
//     var option = {
//         license: true,
//         licenseRegExp: /@(?:license|preserve)/i,
//     };

//     gulp.src(SRC)
//         .pipe( esmangle(option) )
//         .pipe( rename(TARGET) )
//         .pipe( gulp.dest(DIST) );
// });