/*
 * author hy
 * date 2016/4/21
 * description 利用gulp进行压缩合并注入文件
 **/

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var _ = require('lodash');
var del = require('del');
var vinylPaths = require('vinyl-paths');

var LIB_JS = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angular-local-storage/dist/angular-local-storage.js',
    "bower_components/highcharts/highcharts.src.js",
    "bower_components/highcharts/highcharts-more.js",
    /*"bower_components/highcharts/modules/exporting.js",*/
    "bower_components/highcharts/modules/data.js",
    "bower_components/highcharts-ng/dist/highcharts-ng.js",

    "bower_components/moment/min/moment.min.js",
    "bower_components/moment/locale/zh-cn.js",
    "bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"
];

var LOGIC_JS = [
    'app/scripts/app.js',
    'app/scripts/controllers/Navigation.js',
    'app/scripts/controllers/homePage.js',
    'app/scripts/controllers/productionPage.js',
    'app/scripts/controllers/machiningPage.js',
    'app/scripts/controllers/salePage.js',
    'app/scripts/controllers/analysisPage.js',

    'app/scripts/services/indexService.js',
    'app/scripts/services/localStorage.js',
    'app/scripts/services/highchartsService.js',

    'app/scripts/share/shareData.js',
    'app/scripts/share/directive.js'
];

var CSS_FILES = [
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css',
]

var CSS = [
    'app/styles/main.css',
    'app/styles/pages/**',
];

var assetsToMove = [
    'app/tools/**',
    'app/views/**',
    'app/index.html',
    'app/login.html',
    'app/fonts/**'
];

/*gulp.task('clean_dist', plugins.shell.task([
 'rm -rf dist/!*'
 ]));*/

gulp.task('clean_dist', function () {
   var stream = gulp.src('dist')
        .pipe(vinylPaths(del));
    return stream;
});

gulp.task('cope_tools',['clean_dist'], function () {
    return gulp.src(assetsToMove, {base: 'app'})
        .pipe(gulp.dest('dist'))
});

gulp.task('all_lib_js',['clean_dist'], function () {
    return gulp.src(LIB_JS)
        .pipe(plugins.concat('all_lib.js'))
        .pipe(plugins.uglify())
        /*.pipe(plugins.gzip({append: false}))*/
        .pipe(plugins.rename({append: false, suffix: '.min'}))
        .pipe(gulp.dest('dist/scripts'))
});

gulp.task('all_logic_js',['clean_dist'], function () {
    return gulp.src(LOGIC_JS)
        .pipe(plugins.concat('all_logic.js'))
        //.pipe(plugins.uglify())
        .pipe(plugins.rename({append: false, suffix: '.min'}))
        //.pipe(gzip({append: false, preExtension: 'gz'}))
        .pipe(gulp.dest('dist/scripts'))
});

gulp.task('all_lib_css',['clean_dist'], function () {
    return gulp.src(CSS_FILES)
        .pipe(plugins.concat('all_lib_css.css'))
        .pipe(plugins.minifyCss())
        /*.pipe(plugins.gzip({append: false}))*/
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('all_css',['clean_dist'], function () {
    return gulp.src(CSS)
        .pipe(plugins.concat('all_css.css'))
        .pipe(plugins.minifyCss())
        /*.pipe(plugins.gzip({append: false}))*/
        .pipe(plugins.rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('inject', ['all_lib_js', 'all_logic_js', 'all_lib_css', 'all_css', 'cope_tools'], function () {

    var target = gulp.src("dist/index.html");
    var sources = gulp.src(['dist/scripts/all_lib.min.js', 'dist/scripts/all_logic.min.js', 'dist/styles/all_lib_css.min.css', 'dist/styles/all_css.min.css'], {read: false});

    return target.pipe(plugins.inject(sources, {relative: true}))
        .pipe(gulp.dest('dist'))
});

gulp.task('test', ['all_lib_js', 'all_logic_js', 'all_lib_css', 'all_css', 'cope_tools'], function(){
    var target = gulp.src("app/index.html");
    var sources = gulp.src(['dist/scripts/all_lib.min.js', 'dist/scripts/all_logic.min.js', 'dist/styles/all_lib_css.min.css', 'dist/styles/all_css.min.css'], {read: false});
    return target.pipe(plugins.inject(sources, {relative: true}))
        .pipe(gulp.dest("app"))
})

gulp.task('watch',['inject'], function(){
    gulp.watch([LIB_JS, LOGIC_JS, CSS_FILES, CSS, assetsToMove],['inject']);
})

gulp.task('default', function () {
    gulp.run(['inject']);

});
