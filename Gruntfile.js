/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        meta: {

            banner: '/*! <%= grunt.template.today("yyyy-mm-dd") %> */\n'

        },

        less: {

            production: {

                options: {

                    paths        : [
                        "."
                    ],

                    flatten      : false,
                    strictImports: true
                },

                files: {
                    "screen.css": "screen.less"
                }
            },

        },

        watch: {

            css: {

                files: [
                    '*.less'
                ],

                tasks: [ 'less' ]
            }

        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask( 'default', [
        'less'
    ]);

};
