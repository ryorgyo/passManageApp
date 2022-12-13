var gulp = require("gulp");
var typescript = require("gulp-typescript");

// src/tsをコンパイルしてdist/jsに展開
gulp.task("compile:ts", function () {
  return gulp
    .src(["src/pages/*.tsx"])
    .pipe(typescript())
    .js.pipe(gulp.dest("dist/js/"));
});

// gulpコマンドで実行するデフォルトタスク
gulp.task("default", ["compile:ts"]);
