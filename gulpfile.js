
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










// TASKS

gulp.task("default", ["clean", "js", "sass"], function() {

    console.log("⭐ >> Finished putting assets to /dist/" );
    return gulp;

});


gulp.task("clean", function() {

    console.log("⭐ >> All clean and shiny! ");

    return gulp
        .src("./dist", { read: false })
        .pipe( clean() );

});




gulp.task("js", ["clean"],  function() {

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




gulp.task("sass", ["clean"], function() {

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

gulp.task("bumpc", ["bumpv", "default"], function( patch, minor, major ) {

    var pkg = require("./package.json"),
        newv = pkg.version;

    var fun = "🐒 🐔 🐧 🐤 🐗 🐝 🐌 🐞 🐜 🕷 🦂 🦀 🐍 🐢 🐟 🐡 🐬 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🐪 🐘 🐐 🐏 🐑 🐎 🐖 🐀 🐁 🐓 🦃 🕊 🐕 🐈 🐇 🐿 🐉 🐲".split(" ");
        fun = fun[ Math.floor(Math.random() * fun.length ) ];

    console.log("⭐ >> Creating new tag for v" + newv );
    console.log("⭐ >> Committing release v" + newv );

    return gulp
        .src([
            "./*.json",
            "./dist/**/*"
        ])
        .pipe( git.add() )
        .pipe( git.commit("Release v" + newv + " ⚡" + fun + "⚡") )
        .pipe( git.tag("v" + newv, "Version " + newv, function(err) {
            if ( err ) { throw err; }
        }));

});

gulp.task("bumpv", function( patch, minor, major ) {
    
    var b = 
        (patch) ? "patch" : 
        (minor) ? "minor" : 
        (major) ? "major" : 
        null;
    
    if( b ) {

        var pkg = require("./package.json"),
            oldv = pkg.version,
            newv = semver.inc( oldv , b );

        console.log("⭐ >> Bumping Version to v" + newv );

        return gulp
            .src("./*.json")
            .pipe( bump({ version: newv }) )
            .pipe( gulp.dest("./") );

    } else {

        console.log("⭐ >> Not Bumping Version...");
        throw new Error("Not Bumping, didn't supply bump type");
        return false;

    }

});

gulp.task("bump", ["bumpv", "default", "bumpc" ]);
