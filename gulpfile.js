/* eslint-disable */
// Dependencias

const browserify     = require("browserify")
	, gulp           = require("gulp")
	, streamify      = require("gulp-streamify")
	, toStream       = require("vinyl-source-stream")
	, uglify         = require("uglify-es")
	, uglifyComposer = require("gulp-uglify/composer")

const minify = uglifyComposer(uglify, console)

// Carpetas

const DESTINATION = "./build"
	, JS_SOURCE   = "./src/js/index.js"
	, HTML_SOURCE = "./src/html/index.html"
	, CSS_SOURCE  = "./src/css"

// Tareas

gulp.task("build-js", () =>
	browserify({
		entries: JS_SOURCE
	})
		.bundle()
		.pipe(toStream("bundle.js"))
		.pipe(streamify(minify()))
		.pipe(gulp.dest(DESTINATION))
)

gulp.task("build-html", () => gulp.src(HTML_SOURCE)
	.pipe(gulp.dest(DESTINATION))
)

gulp.task("build", ["build-js", "build-html"])

gulp.task("watch", () => {
	gulp.watch(JS_SOURCE, ["build-js"])
	gulp.watch(HTML_SOURCE, ["build-html"])
})