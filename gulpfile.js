const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');

/*
    --- TOP LEVEL FUNCTIONS ---
    gulp.task - Define tasks
    gulp.src - Point to files to use
    gulp.dest - Points to output folder
    gulp.watch - watch file and folders for change
*/

// Logs message
gulp.task("message", function(){
    return console.log("Gulp is running....");
})

// Default task
gulp.task("default", ['message', 'copyHtml', 'imageMin', 'minify', 'sass'])

// Copy all html files to dist folder
gulp.task("copyHtml", function(){
    gulp.src('src/*.html').pipe(gulp.dest('dist/html'));
})

// Optimize image
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// Minify js files
gulp.task('minify', () =>
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
);

// Compile sass
gulp.task('sass', () =>
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'))
);
