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
                    '6-Boostrap-Training/styles.css': '6-Boostrap-Training/styles.scss'
                }
            }
        }
    });

    grunt.registerTask('css', ['sass']);

};