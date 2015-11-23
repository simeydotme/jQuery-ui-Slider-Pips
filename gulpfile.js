
"use strict";

var gulp = require("gulp-param")( require("gulp"), process.argv );

var fs = require("fs"),
    semver = require("semver"),
    dateformat = require("dateformat"),

    git = require("gulp-git"),
    sass = require("gulp-sass"),
    bump = require("gulp-bump"),
    clean = require("gulp-clean"),
    uglify = require("gulp-uglify"),
    rename = require("gulp-rename"),
    header = require("gulp-header"),
    autoprefixer = require("gulp-autoprefixer");

var pack = function() {
    return JSON.parse(fs.readFileSync("./package.json", "utf8"));
};

var dates = {

    today: dateformat( new Date() , "yyyy-mm-dd" ),
    year: dateformat( new Date() , "yyyy" )

};

var pkg = pack();

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

    var pkg = pack();

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

    var pkg = pack();

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

gulp.task("commit", ["bumpv", "default"], function() {

    var pkg = pack(),
        newv = pkg.version;

    var fun = "🐒 🐔 🐧 🐤 🐗 🐝 🐌 🐞 🐜 🕷 🦂 🦀 🐍 🐢 🐟 🐡 🐬 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🐪 🐘 🐐 🐏 🐑 🐎 🐖 🐀 🐁 🐓 🦃 🕊 🐕 🐈 🐇 🐿 🐉 🐲".split(" ");
        fun = fun[ Math.floor(Math.random() * fun.length ) ];

    console.log("⭐ >> Committing release v" + newv );

    return gulp
        .src([
            "./*.json",
            "./dist/**/*"
        ])
        .pipe( git.add() )
        .pipe( git.commit("Release v" + newv + " ⚡" + fun + "⚡") );

});

gulp.task("tag", ["commit"], function() {

    var pkg = pack(),
        newv = pkg.version;

    console.log("⭐ >> Creating new tag for v" + newv );

    git.tag("v" + newv, "Version " + newv, function(err) {
        if ( err ) { throw err; }
    });

    return gulp;

});

gulp.task("bumpv", function( patch, minor, major ) {
    
    var b = 
        (patch) ? "patch" : 
        (minor) ? "minor" : 
        (major) ? "major" : 
        null;
    
    if( b ) {

        var pkg = pack(),
            oldv = pkg.version,
            newv = semver.inc( oldv , b );

        console.log("⭐ >> Bumping Version to v" + newv );

        return gulp
            .src("./*.json")
            .pipe( bump({ version: newv }) )
            .pipe( gulp.dest("./") );

    } else {

        throw new Error("\n⚠ >> Not Bumping; didn't supply bump type\n\n");
        return false;

    }

});

gulp.task("bump", ["bumpv", "default", "commit", "tag" ]);
