//导入模块
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename')
    image = require('gulp-image')
    uglify = require('gulp-uglify')

//二、发布任务
function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'));
}
//copy index
function fnCopyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}
//copy html
function fnCopy(){
    return gulp.src('./src/html/*')
    .pipe(gulp.dest('./dist/html'));
}

//copy js
function fnJs(){
    return gulp.src('./src/js/*')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('./dist/js'));
}

//copy img
function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/img'));
}



//监听
function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/index/html',fnCopyIndex);
    gulp.watch('./src/html/*.html',fnCopy);
    gulp.watch('./src/img/*',fnImg);
    gulp.watch('./src/js/*',fnJs);
}

//发布任务
exports.img  = fnImg;
exports.index = fnCopyIndex;
exports.sass = fnSass;
exports.html = fnCopy;
exports.default = fnWatch;
exports.js = fnJs;