/*global module:false*/
module.exports = function(grunt) {

    require("time-grunt")(grunt);

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON("package.json"),

        banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " + 
                "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" + 
                "<%= pkg.homepage ? \"* \" + pkg.homepage + \"\\n\" : \"\" %>" + 
                "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author %>;" + 
                " Licensed <%= pkg.license %> */\n",

        // Task configuration.

        bake: {
            options: {
                basePath: "src/app/views"
            },
            build: {
                files: {
                    "index.html": "src/index.html"
                }
            }
        },

        concat: {
            options: {
                banner: "<%= banner %>",
                stripBanners: true
            }
        },


        jshint: {
            jshintrc: ".jshintrc",
            gruntfile: {
                src: "Gruntfile.js"
            },
            srcfiles: {
                src: ["src/**/*.js"]
            }
        },


        copy: {
            options: {
                banner: "<%= banner %>"
            },
            fonts: {
                cwd: "src/app/fonts/",
                src: "**",
                dest: "dist/fonts/",
                expand: true
            },
            js: {
                cwd: "src/app/js/",
                src: "**",
                dest: "dist/js/",
                expand: true
            },
            img: {
                cwd: "src/app/img/",
                src: "**",
                dest: "dist/img/",
                expand: true
            }
        },

        sass: {
            all: {
                options: {
                    style: "nested",
                    lineNumbers: false
                },
                files: {
                    "dist/css/app.css": "src/app/sass/app.scss"
                }
            }
        },

        watch: {
            config: {
                files: ["Gruntfile.js"]
            },
            render: {
                files: ["src/**/*.html"],
                tasks: ["bake", "bowerout"]
            },
            sass: {
                files: ["src/**/*.scss"],
                tasks: ["sass"]
            },
            js: {
                files: ["src/**/*.js"],
                tasks: ["copy:js"]
            },
            img: {
                files: ["src/img/**/*"],
                tasks: ["copy:img"]
            },
            livereload: {

              // Here we watch the files the sass task will compile to
              // These files are sent to the live reload server after sass compiles to them
              options: { livereload: true },
              files: ["dist/**/*", "index.html"]

            },
        },

        useminPrepare: {
            html: "index.html",
            options: {
                dest: "dist"
            }
        },

        usemin: {
            html: "index.html",
            options: {
                dest: "dist",
                root: "/"
            }
        }


    });

    // These plugins provide necessary tasks.

    grunt.loadNpmTasks("grunt-bake");
    grunt.loadNpmTasks("grunt-usemin");
    grunt.loadNpmTasks("grunt-autoprefixer");

    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Tasks.

    grunt.registerTask("bowerout", [
        "useminPrepare", 
        "concat:generated", 
        "uglify:generated", 
        "cssmin:generated",
        "usemin"
    ]);

    grunt.registerTask("build", [
        "jshint", 
        "bake", 
        "copy", 
        "sass", 
        "bowerout"
    ]);

    grunt.registerTask("default", [
        "build", 
        "watch"
    ]);

};
