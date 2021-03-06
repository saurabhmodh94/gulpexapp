const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

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
gulp.task("default", ['message', 'copyHtml', 'imageMin', 'sass', 'concat'])

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

// Concat scripts
gulp.task('concat', () =>
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
);

// watch task
gulp.task('watch', function(){
    gulp.watch('src/js/*.js', ['concat']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/images/*', ['imageMin']);
    gulp.watch('src/*.html', ['copyHtml']);
});
