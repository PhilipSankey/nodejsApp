module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          paths: ['public/less'],
          style: 'compresses'
        },
        files: {
          'public/stylesheets/bootstrap.css':'public/stylesheets/bootstrap.less',
          'public/stylesheets/style.css':'public/stylesheets/style.less',
          'public/stylesheets/jcarousel.css':'public/stylesheets/jcarousel.less'
        }
      }
    },
    express: {
    options: {
      // Override defaults here
    },
    dev: {
      options: {
        script: 'app.js'
      }
    }
  },

    watch: {
      options:{
        livereload: true
      },
    less: {
      files: ['public/stylesheets/*.less'],
      tasks: ['less'],

    },
    web: {
        files: ['/**/*.js'],
        tasks: ['express'],
        options: {
          nospawn: true, //Without this option specified express won't be reloaded
          atBegin: true,
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');

  // Default task(s).
  grunt.registerTask('default', ['less']);
  grunt.task.registerTask('webb', ['express:dev', 'watch']);

};
