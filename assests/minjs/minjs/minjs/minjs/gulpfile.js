var gulp=require("gulp"),jshint=require("gulp-jshint"),jscs=require("gulp-jscs"),uglify=require("gulp-uglify"),jsfiles=["./*.js","./src/**/*.js"];gulp.task("style",function(){gulp.src(jsfiles).pipe(uglify()).pipe(jshint()).pipe(jscs()).pipe(jshint.reporter("jshint-visual-studio")).pipe(gulp.dest("minjs"))});