const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const fileinclude = require('gulp-file-include');
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const { sass } = require("@mr-hope/gulp-sass");
const cleanCss = require("gulp-clean-css");

const sourcemaps   = require("gulp-sourcemaps");
const imagemin = require("gulp-imagemin");
const del          = require("del");

const src = "./app"
const dest = "./build";
const path = {
	src: {
		html: `${src}/*.html`,
		php: `${src}/*.php`,
		img: `${src}/assets/img/**/*.*`,
		fonts: `${src}/assets/fonts/**/*.*`,
		styles: `${src}/assets/scss/style.scss`,
		js: `${src}/assets/js/main.js`
	},
	build: {
		html: `${dest}`,
		php: `${dest}`,
		img: `${dest}/assets/img`,
		fonts: `${dest}/assets/fonts`,
		css: `${dest}/assets/css`,
		js: `${dest}/assets/js`
	},
	watch: {
		html: `${src}/*.html`,
		php: `${src}/*.php`,
		img: `${src}/assets/img/**/*.*`,
		fonts: `${src}/assets/fonts/**/*.*`,
		styles: `${src}/assets/scss/**/*.scss`,
		js: `${src}/assets/js/**/*.js`
	}
};


function clean() {
	return del(dest);
}

function copyHtml() {
	return gulp.src(path.src.html)
				.pipe(fileinclude({
					prefix: '@@',
					basepath: '@file'
				}))
				.pipe(htmlmin({ collapseWhitespace: true }))
               .pipe(gulp.dest(path.build.html))
               .pipe(browsersync.stream());
}

// function copyPhp() {
// 	return gulp.src(path.src.php)
//                .pipe(gulp.dest(path.build.php))
//                .on("end", browsersync.reload);
// }

function copyImg() {
	return gulp.src(path.src.img)
               .pipe(imagemin({
                  progressive: true, 
                  svgoPlugins: [{ removeViewBox: false }],
                  interlaced: true,
                  optimazationLevel: 3
               }))
               .pipe(gulp.dest(path.build.img))
               .on("end", browsersync.reload);
}

function copyFonts() {
	return gulp.src(path.src.fonts)
               .pipe(gulp.dest(path.build.fonts))
               .on("end", browsersync.reload);
}


function buildStyles() {
	return gulp.src(path.src.styles)
   				.pipe(sourcemaps.init())                                                     
   				.pipe(concat("main.scss"))                                                              
   				.pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))     
   				.pipe(autoprefixer({                                                                       
      				overrideBrowserslist: ["last 8 versions"],                              
        				cascade: false
   				}))
   				.pipe(rename({suffix: ".min"}))                                                     
   				.pipe(sourcemaps.write("./"))                                                           
   				.pipe(gulp.dest(path.build.css))                                                    
   				.on("end", browsersync.reload);   
}

function buildProdStyles() {
	return gulp.src(path.src.styles)                                           
   				.pipe(concat("main.scss"))                                                              
   				.pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))     
   				.pipe(autoprefixer({                                                                       
      				overrideBrowserslist: ["last 8 versions"],                              
        				cascade: false
   				}))
   				.pipe(rename({suffix: ".min"}))                                                                                                              
   				.pipe(gulp.dest(path.build.css))                                                    
   				.on("end", browsersync.reload);   
}

function buildJs() {
	return gulp.src(path.src.js)
               .pipe(webpack({
                  mode: "development",
                  output: {
                     filename: "script.js"
                  },
                  watch: false,
                  devtool: "source-map",
                  module: {
                     rules: [
                        {
                        	test: /\.m?js$/,
                           exclude: /(node_modules|bower_components)/,
                           use: {
                              loader: "babel-loader",
                              options: {
                                	presets: [["@babel/preset-env", {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                           }
                        }
                    	]
                  }
               }))
               .pipe(gulp.dest(path.build.js))
               .on("end", browsersync.reload);
}


function buildProdJs() {
	return gulp.src(path.src.js)
					.pipe(webpack({
					  	mode: "production",
					  	output: {
					      filename: "script.js"
					  	},
					  	module: {
					      rules: [
					        	{
					         	test: /\.m?js$/,
					         	exclude: /(node_modules|bower_components)/,
					         	use: {
					            	loader: "babel-loader",
					            	options: {
					              		presets: [["@babel/preset-env", {
					                  	corejs: 3,
					                  	useBuiltIns: "usage"
					              		}]]
					            	}
					          	}
					        	}
					      ]
					   }
					}))
					.pipe(gulp.dest(path.build.js));
}


// service tasks
function watch() {
	browsersync.init({
		server: "./build",
		port: 5000,
		notify: true
   });

   gulp.watch(path.watch.html, copyHtml);
   gulp.watch(path.watch.img, copyImg);
   gulp.watch(path.watch.fonts, copyFonts);
   gulp.watch(path.watch.styles, buildStyles);  
   gulp.watch(path.watch.js, buildJs);
}


function build(done) {
	gulp.series(clean, gulp.parallel(copyHtml, copyImg, copyFonts, buildStyles, buildJs))(done);
}

function buildProd(done) {
	gulp.series(clean, gulp.parallel(copyHtml, copyImg, copyFonts, buildProdStyles, buildProdJs))(done);
}

gulp.task("default", gulp.parallel(watch, build));
gulp.task("build", buildProd);

exports = {
	clean,
	copyHtml,
	copyImg,
	copyFonts,
	buildStyles,
	buildJs,
	watch,
	build
};
