module.exports = function(grunt) {
   grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*uglify: {
            my_target: {
                files: {
                    'src/output.min.js': ['src/*.js']
                }
            }
        }*/
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
        }
    });
    //Ładowanie zadania
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('default',['requirejs']);
};
