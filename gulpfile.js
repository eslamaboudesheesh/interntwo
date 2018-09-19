var gulp  =  require( "gulp" ) ;
var jshint =  require( "gulp-jshint" ) ;
var jscs = require( "gulp-jscs" ) ;
var uglify = require( "gulp-uglify" ) ;
var sass = require( "gulp-sass" ) ;
var plumber = require( "gulp-plumber" );
var livereload = require( "gulp-livereload" );
var imagemin = require( "gulp-imagemin" );
var prefix = require( "gulp-autoprefixer" ) ;

// var jade = require( "gulp-jade" );

var jsfiles = [  "assests/js/*.js" ] ;

/*
   *Task show  deubgs and error  in  js fle and amake it minfied byuglify
  *And make  visual-studo content  the  deubgs 
*/

gulp.task( "js", function() {
    gulp.src( jsfiles )
    .pipe( plumber() )
    .pipe( uglify() )
    .pipe( jshint() )
    .pipe( jscs() )
    .pipe( jshint.reporter( "jshint-visual-studio" ) )
    .pipe( gulp.dest( "assests/minjs" ) );

} );

//Task styleSass
gulp.task( "styles", function() {

return gulp.src( "build/scss/**/*.scss" )
    .pipe( plumber() )
    .pipe( sass(
        {
           outputStyle:"expanded"
        }
    ).on( "error",  sass.logError ) )
     .pipe( prefix( {
            browsers: [ "> 5%" ],
            cascade: false
        } ) )
     .pipe( gulp.dest( "assests/css" ) )
     .pipe( livereload( {
         start: true
         } ) );
     } );

// Task jade
/* 

gulp.task( "jade", function() {
     var YOUR_LOCALS = {

         jade: jade
             };
 return gulp.src( "build/jade/*.jade" )
    .pipe( jade( {
    locals: YOUR_LOCALS,
    pretty: true

    } ) )
    .pipe( gulp.dest( "templet/" ) );
} )  ;
*/
// Image task
// Compress

gulp.task( "image", function() {
gulp.src( "build/img/*" )
.pipe( imagemin() )
.pipe( gulp.dest( "assests/img" ) );

} );

/*

* Make file always run 
*/
gulp.task( "watch", function() {
      var server = livereload.listen();
    gulp.watch( "assests/js/*.js", [ "js" ] );
    gulp.watch( "build/scss/**/*.scss", [ "styles" ] );
   // gulp.watch( "build/jade/*.jade", [ "jade" ] );
     gulp.watch( "build/img/*", [ "image" ] );

} );

gulp.task( "default", ["js"  ,"watch", "styles", "image" ] );
