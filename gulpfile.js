// sudo npm run build
// sudo gulp set_isFinished
// sudo gulp replace_polyfills
// sudo gulp replace_btrue
// sudo gulp replace_polyfills
// sudo gulp indexbase
// sudo gulp replace_indexbase
// sudo gulp minify
// sudo gulp clean
// sudo gulp indexscripts
// sudo gulp replace_indexbase

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var replace = require('gulp-string-replace');
gulp.task('set_isFinished', function () {
    gulp.src(["./dist/polyfills.bundle.js"])
        .pipe(replace(', get _totalDuration', ', set _isFinished(f){}, get _totalDuration'))
        .pipe(rename('polyfills1.bundle.js'))
        .pipe(gulp.dest('./dist/'))
        .on('end', function(){
            gulp.src('dist/polyfills.bundle.js', {read: false})
            .pipe(clean());  
        })
        return;
});
gulp.task('replace_btrue', function () {
    gulp.src(["./dist/polyfills.bundle.js"])
        .pipe(replace(", b.true = a", ", b !== undefined ?  b.true = a : ''"))
        .pipe(rename('polyfills1.bundle.js'))
        .pipe(gulp.dest('./dist/')).on('end', function(){
            gulp.src('dist/polyfills.bundle.js', {read: false})
            .pipe(clean());  
        })
        return;
});


gulp.task('replace_polyfills', function(){
    gulp.src(["./dist/polyfills1.bundle.js"])
    .pipe(rename('polyfills.bundle.js'))
    .pipe(gulp.dest('./dist/'))
    .on('end', function(){
        console.log('end');
        gulp.src('dist/polyfills1.bundle.js', {read: false})
        .pipe(clean());
        console.log('end1');
    })
    return;
});

gulp.task('indexbase', function () {
    gulp.src(["./dist/index.html"])
        .pipe(replace('<base href="/">', '<script>document.write(\'<base href="\' + document.location + \'" />\');</script>'))
        .pipe(rename('index1.html'))
        .pipe(gulp.dest('./dist/'))
        .on('end', function(){
            gulp.src('dist/index.html', {read: false})
            .pipe(clean());  
        })
        return;
});

gulp.task('indexscripts', function () {
    gulp.src(["./dist/index.html"])
        .pipe(replace('<script type="text/javascript" src="inline.bundle.js"></script><script type="text/javascript" src="polyfills.bundle.js"></script><script type="text/javascript" src="scripts.bundle.js"></script><script type="text/javascript" src="styles.bundle.js"></script><script type="text/javascript" src="vendor.bundle.js"></script><script type="text/javascript" src="main.bundle.js"></script>',
         '<script type="text/javascript" src="inline.bundle.min.js"></script><script type="text/javascript" src="polyfills.bundle.min.js"></script><script type="text/javascript" src="scripts.bundle.min.js"></script><script type="text/javascript" src="styles.bundle.min.js"></script><script type="text/javascript" src="vendor.bundle.min.js"></script><script type="text/javascript" src="main.bundle.min.js"></script>'))
        .pipe(rename('index1.html'))
        .pipe(gulp.dest('./dist/'))
        .on('end', function(){
            gulp.src('dist/index.html', {read: false})
            .pipe(clean());  
        })
        return;
});

gulp.task('replace_indexbase', function(){
    gulp.src(["./dist/index1.html"])
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist/'))
    .on('end', function(){
        gulp.src('dist/index1.html', {read: false})
        .pipe(clean());
    })
    return;
});

gulp.task('vendor', function (){
    return gulp.src('dist/vendor.bundle.js')
    .pipe(uglify())
    .pipe(rename('vendor.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('inline', function (){
    return gulp.src('dist/inline.bundle.js')
    .pipe(uglify())
    .pipe(rename('inline.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('main', function (){
    return gulp.src('dist/main.bundle.js')
    .pipe(uglify())
    .pipe(rename('main.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('polyfills', function (){
    return gulp.src('dist/polyfills.bundle.js')
    .pipe(uglify())
    .pipe(rename('polyfills.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('styles', function (){
    return gulp.src('dist/styles.bundle.js')
    .pipe(uglify())
    .pipe(rename('styles.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('scripts', function (){
    return gulp.src('dist/scripts.bundle.js')
    .pipe(uglify())
    .pipe(rename('scripts.bundle.min.js'))
    .pipe(gulp.dest('dist/'));
});
gulp.task('cleanvendor', function(){
    return gulp.src('dist/vendor.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleaninline', function(){
    return gulp.src('dist/inline.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleanmain', function(){
    return gulp.src('dist/main.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleanpolyfills', function(){
    return gulp.src('dist/polyfills.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleanstyles', function(){
    return gulp.src('dist/styles.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('cleanscripts', function(){
    return gulp.src('dist/scripts.bundle.js', {read: false})
    .pipe(clean());
});
gulp.task('minify', ['vendor', 'inline', 'main', 'polyfills', 'styles', 'scripts']);
gulp.task('clean', ['cleanvendor', 'cleaninline', 'cleanmain', 'cleanpolyfills', 'cleanstyles', 'cleanscripts'])

