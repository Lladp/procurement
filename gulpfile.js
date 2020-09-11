//导入模块
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename');

//二、发布任务
function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist'));
}
//监听
function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnSass);
}
//发布任务
exports.sass = fnSass;
exports.default = fnWatch;