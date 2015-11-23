module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cssmin: {
            prod:{
                files: {
                    '../css/custom.min.css' : [
                        '../css/style.css'
                    ]
                }
            }
        },
        copy: {
            prod:{
                files:[
                    {
                        expand: true,
                        flatten: true,
                        dest: '../fonts/',
                        src: [

                        ]
                    }
                ]
            }
        },
        watch: {
            css: {
                files: ['../less/*.less'],
                tasks: ['less']
            }
        },
        shell: {
            bower_update: {
                options: {
                    stderr: false
                },
                command: 'bower install'
            }
        },
        less:{
            production:{
                files: {
                    "../css/style.css": "../less/style.less"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-copy');

 /*   grunt.registerTask('prod', [
        'cssmin:prod',
        'uglify:prod'
    ]);*/

    grunt.registerTask('dev', [ 'shell:bower_update', 'less', 'watch']);
    grunt.registerTask('build', [ 'shell:bower_update', 'less', 'cssmin', 'uglify', 'copy']);
    grunt.registerTask('default', ['less']);
};
