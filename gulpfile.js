const gulp = require('gulp');

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