
"use strict";

var pkg = require("./package.json"),
    semver = require("semver"),
    dateformat = require("dateformat"),

    gulp = require("gulp"),
    git = require("gulp-git"),
    sass = require("gulp-sass"),
    bump = require("gulp-bump"),
    clean = require("gulp-clean"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    header = require("gulp-header"),
    autoprefixer = require("gulp-autoprefixer");

var dates = {

    today: dateformat( new Date() , "yyyy-mm-dd" ),
    year: dateformat( new Date() , "yyyy" )

};

var banner = "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= dates.today %>\n" + 
                "<%= pkg.homepage ? \"* \" + pkg.homepage + \"\\n\" : \"\" %>" + 
                "* Copyright (c) <%= dates.year %> <%= pkg.author %>;" + 
                " Licensed <%= pkg.license %> */\n\n";

var out = {
    js: "jquery-ui-slider-pips",
    css: "jquery-ui-slider-pips",
};


gulp.task("js", function() {

    return gulp
        .src( "./src/js/**/*.js" )

        .pipe( header( banner, { pkg : pkg, dates: dates } ))
        .pipe( rename( out.js + ".js" ) )
        .pipe( gulp.dest( "./dist" ) )

        .pipe( uglify("combined.js") )
        .pipe( header( banner, { pkg : pkg, dates: dates } ))
        .pipe( rename( out.js + ".min.js" ) )
        .pipe( gulp.dest( "./dist" ) );

});

gulp.task("sass", function() {

    gulp
        .src("./src/**/*.scss")
        .pipe( sass({ outputStyle: "expanded" }).on("error", sass.logError ) )
        .pipe( autoprefixer("last 5 versions") )
        .pipe( header( banner, { pkg : pkg, dates: dates } ))
        .pipe( rename( out.css + ".css" ))
        .pipe( gulp.dest("./dist") );

    return gulp
        .src("./src/**/*.scss")
        .pipe( sass({ outputStyle: "compressed" }).on("error", sass.logError ) )
        .pipe( autoprefixer("last 5 versions") )
        .pipe( header( banner, { pkg : pkg, dates: dates } ))
        .pipe( rename( out.css + ".min.css" ))
        .pipe( gulp.dest("./dist") );

});


/**
 * Bump task can be used like:
 * 
 *     gulp bump --patch
 *     gulp bump --minor
 *     gulp bump --major
 *     
 * This task will ONLY bump the version, it will not
 * spawn the sub-tasks or write dist files.
 */

gulp.task("bump", function( patch, minor, major ) {
    
    var b = 
        (patch) ? "patch" : 
        (minor) ? "minor" : 
        (major) ? "major" : 
        null;
    
    if( b ) {

        var pkg = require("./package.json"),
            oldv = pkg.version,
            newv = semver.inc( oldv , b );

        var fun = "🐒 🐔 🐧 🐤 🐗 🐝 🐌 🐞 🐜 🕷 🦂 🦀 🐍 🐢 🐟 🐡 🐬 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🐪 🐘 🐐 🐏 🐑 🐎 🐖 🐀 🐁 🐓 🦃 🕊 🐕 🐈 🐇 🐿 🐉 🐲".split(" ");
            fun = fun[ Math.floor(Math.random() * fun.length ) ];

        console.log(">> Bumping Version to v" + newv );

        gulp
            .src("./*.json")
            .pipe( bump({ version: newv }) )
            .pipe( gulp.dest("./") );

        console.log(">> Creating new tag for v" + newv );
        console.log(">> Committing release v" + newv );

        gulp
            .src([
                "./*.json",
                "./dist/**/*"
            ])
            .pipe( git.add() )
            .pipe( git.commit("Release v" + newv + " ⚡" + fun + "⚡") )
            .pipe( git.tag("v" + newv, "Version " + newv, function(err) {
                if ( err ) { throw err; }
            }));

    } else {

        console.log(">> Not Bumping Version...");
        return gulp;

    }

});


gulp.task("clean", function() {

    console.log("\n All clean 'n shiny! \n");

    return gulp
        .src("./dist", { read: false })
        .pipe( clean() );

});
