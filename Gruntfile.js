'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    traceur: {
      options: {
        sourceMaps: true // default: false
      },
      custom: {
        options: {
          fileRoot: 'src/',
          modules:'commonjs'
        },
        files:{
          'bin/': ['src/**/*.js'] // dest : [source files]
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },
    watch: {
      es6: {
        files: ['src/*.js'],
        tasks: ['traceur']
      }

    }

  });
  grunt.loadNpmTasks('grunt-traceur');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.registerTask('default', ['traceur']);
};
