const gulp = require("gulp");
const less = require("gulp-less");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");

function xless() {
  return gulp
    .src("src/less/*.less")
    .pipe(less())
    .pipe(gulp.dest("./public/assets/css"));
}

// function xjs() {
//   return gulp
//     .src("src/js/*.js")
//     .pipe(plumber())
//     .pipe(
//       babel({
//         presets: [["@babel/env", { modules: false }]]
//       })
//     )
//     .pipe(gulp.dest("./assets/js"));
// }

function watch() {
  gulp.watch("src/less/*.less", xless);
  // gulp.watch("src/js/*.js", xjs);
}

const build = gulp.parallel(xless, watch);
gulp.task(build);
gulp.task("default", build);
