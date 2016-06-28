'use strict';
var gulp = require("gulp");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
// nodemon livereload
var nodemon = require("gulp-nodemon");
var livereload = require("gulp-livereload");
// end

// setup
var paths = {
    client: [
    'app/**/*.js',
    'app/**/*.jsx',
    'app/*',
    '!app/dist/*'
    ],
    server: {
        index: 'server/server.js'
    }
};

var nodemonConfig = {
    script : paths.server.index,
    ignore : ['app/*'],
    env: {
        "NODE_ENV": "development"
    }
};

gulp.task('serve', ['copy'], function() {
    return nodemon(nodemonConfig);
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.client, ['copy']);
});

gulp.task('develop', ['serve', 'watch']);
// end

gulp.task("bundle", function(){
	return browserify({
		entries : "./app/main.jsx",
		debug : true
	}).transform(reactify)
	.bundle()
	.pipe(source("main.js"))
	.pipe(gulp.dest("app/dist"));
});

gulp.task("copy", ["bundle"], function(){
	return gulp.src(["app/index.html", "app/lib/bootstrap-css/css/bootstrap.min.css", "app/style.css"])
	.pipe(gulp.dest("app/dist"))
    .pipe(livereload());
});

gulp.task("default", ["copy"], function(){
	console.log("Gulp completed...");
});
