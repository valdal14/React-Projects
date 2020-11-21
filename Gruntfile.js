'use strict';

module.exports = function (grunt) {
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Automatically load required Grunt tasks
    require('jit-grunt')(grunt);

    const sass = require('node-sass');

    // Define the configuration for all the tasks
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    './6-Boostrap-Training/styles.css': './6-Boostrap-Training/styles.scss'
                }
            }
        },watch: {
            files: './6-Boostrap-Training/*.scss',
            tasks: ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        './6-Boostrap-Training/*.css',
                        '*.html',
                        './6-Boostrap-Training/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "./6-Boostrap-Training/"
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['browserSync', 'watch']);

};