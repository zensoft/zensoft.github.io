module.exports = function(grunt) {
   //require( 'time-grunt' )( grunt );
   //require( 'load-grunt-tasks' )( grunt );
   grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
          compile: {
            options: {
              baseUrl: ".",
              mainConfigFile: "main.js",
              name: "main",
              out: "optimized.js",
              paths: {
                requireLib: 'lib/require'
              },
              include: 'requireLib'
            }
          }
        },
        shell : {
            jekyllBuild : {
                command : 'jekyll build'
            },
            jekyllServe : {
                command : 'jekyll serve'
            }
        },
        watch : {
            files : [ '../js/app/*.js'
                      ],
            tasks : [ 'requirejs' ],
            options : {
                spawn : false,
                interrupt : true,
                atBegin : true,
                livereload : true
            }
        }
    });
    //Ładowanie zadania
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    //grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    //grunt.registerTask('default',['requirejs']);
    grunt.registerTask( 'default', [ 'watch' ] )
};
