'use strict';

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    compiler =require('gulp-hogan-compile'),
    compressor = require('gulp-compressor'),
    rimraf = require('gulp-rimraf'),
    cache = require('gulp-cache'),
    install = require("gulp-install"),
    rename = require('gulp-rename'),
    removeLines= require('gulp-remove-lines'),
    bower = require('gulp-bower'),
    refresh = require('gulp-livereload'),
    livereload = require('tiny-lr'),
    sass = require('gulp-sass'),
    server = livereload();



gulp.task('clean', function() {
    return gulp.src(['webapp/WEB-INF/*'], {
            read: false
        })
        .pipe(rimraf());
});


// compiles our hogan templates
gulp.task('templates', function() {
    gulp.src('app/templates/*.html')
        .pipe(compiler('templates.js',{hoganModule:['hogan/lib/hogan']}))
        .pipe(gulp.dest('app/js/component'));
});


// removes the duplicate hogan declaration from the compiled templates.
gulp.task('hogan',function(){
    gulp.src('app/js/component/templates.js')
         .pipe(removeLines({'filters':[/require\(['"]hogan\/lib\/hogan/]}))
         .pipe(gulp.dest('webapp/templates'));
});

gulp.task('html_templates',['js'], function() {
    return gulp.src('app/templates/*.html')
        .pipe(compressor({
            'remove-intertag-spaces': true,
            'simple-bool-attr': true,
            'compress-js':false,
            'compress-css': true
        }))
        .pipe(gulp.dest('webapp/templates'));

});


gulp.task('html', ['html_templates'], function() {
    return gulp.src(['app/404.html', 'app/index.html'])
        .pipe(compressor({
            'remove-intertag-spaces': true,
            'simple-bool-attr': true,
            'compress-js': true,
            'compress-css': true
        }))
        .pipe(gulp.dest('webapp/WEB-INF'));
});

gulp.task('sass', function () {
	  gulp.src('app/css/sass/**/*.scss')
	    .pipe(sass().on('error', sass.logError))
	    .pipe(sass({outputStyle: 'compressed'}))
	    .pipe(gulp.dest('webapp/css'));
});


gulp.task('js', ['sass','images', 'fonts','templates','hogan'], function() {
    return gulp.src('app/js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify({
            'mangle': false
        }))
        .pipe(compressor())
        .pipe(gulp.dest('webapp/js'));
});


gulp.task('fonts', function() {
    return gulp.src(['app/fonts/*.*'])
        .pipe(gulp.dest('webapp/fonts'));
});

gulp.task('moveFiles', function() {
    return gulp.src(['app/robots.txt', 'app/favicon.ico'])
        .pipe(gulp.dest('webapp/WEB-INF'));
});

gulp.task('images', ['bower'], function() {
    return gulp.src(['app/images/**/*'])
        .pipe(gulp.dest('webapp/images'));
});

gulp.task('bower', function() {
    return bower({
        directory: 'webapp/bower_components'
    });
});


gulp.task('build', ['clean'], function() {
    gulp.start('html'); //all the tasks are chained together, starting with bower and ending with js
    gulp.start('moveFiles');
    
});

gulp.task('css-server', function() {
    gulp.src('app/**/*.css').pipe(refresh(server));
});

gulp.task('js-server', function() {
    gulp.src('app/**/*.js').pipe(refresh(server));
});

gulp.task('default', function() {
    gulp.run('build');
});

gulp.task('run', function() {
    gulp.run('livereload-server');

    gulp.watch('app/**/*.css', function(event) {
        gulp.run('css-server');
    });

    gulp.watch('app/**/*.js', function(event) {
        gulp.run('js-server');
    });
});

/* TASKS TO SUPPORT RUNNING THE APP LOCALLY using npm's server - 'npm run watch'*/
gulp.task('livereload-server', function() {
    server.listen(35729, function(err) {
        if (err) {
            return console.log(err);
        }
    });
});

