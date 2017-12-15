/* eslint-disable */
// Dependencias

const browserify     = require("browserify")
	, fs             = require("fs")
	, gulp           = require("gulp")
	, sourcemaps     = require("gulp-sourcemaps")
	, streamify      = require("gulp-streamify")
	, tap            = require("gulp-tap")
	, toStream       = require("vinyl-source-stream")
	, uglify         = require("uglify-es")
	, uglifyComposer = require("gulp-uglify/composer")

const minify = uglifyComposer(uglify, console)

// Carpetas

const DESTINATION  = "./build"
	, JS_SOURCE    = "./src/js/index.js"
	, HTML_SOURCE  = "./src/html/index.html"
	, PAGES_SOURCE = "./src/html/pages"
	, CSS_SOURCE   = "./src/css/index.css"

// Tareas

gulp.task("build-js", () =>
	browserify({
		entries: JS_SOURCE,
		debug: true
	})
		.bundle()
		.pipe(toStream("bundle.js"))
		.pipe(streamify(sourcemaps.init({ loadMaps: true })))
		// todo descomentar linea
		//.pipe(streamify(minify({ mangle: false })))
		.pipe(streamify(sourcemaps.write()))
		.pipe(gulp.dest(DESTINATION))
)

gulp.task("build-css", () => gulp.src(CSS_SOURCE)
	.pipe(gulp.dest(DESTINATION))
)

gulp.task("build-html", () => gulp.src(HTML_SOURCE)
	.pipe(tap(file => {
		const contents = file.contents.toString()

		const html = fs
			.readdirSync(PAGES_SOURCE)
			.map(file => ({
				name: file.replace(".html", ""),
				contents: fs.readFileSync(`${PAGES_SOURCE}/${file}`).toString()
			}))
			.map(it => `<div class="section" id="section-${it.name}">
				${it.contents}
			</div>`)
			.join("\n")

		file.contents = new Buffer(contents
			.replace("<!-- %SECTIONS% -->", html))

		return file
	}))
	.pipe(gulp.dest(DESTINATION))
)

gulp.task("build", ["build-js", "build-html", "build-css"])

gulp.task("watch", () => {
	gulp.watch("./src/js/**/*.js", ["build-js"])
	gulp.watch("./src/html/**/*.html", ["build-html"])
	gulp.watch("./src/css/**/*.css", ["build-css"])
})
