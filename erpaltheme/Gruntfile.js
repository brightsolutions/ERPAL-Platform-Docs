'use strict';

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // Load all grunt tasks matching the `grunt-*` pattern.
  require('load-grunt-tasks')(grunt);

  var config = {
    js:      'js',
    scss:    'sass',
    css:     'css',
    img:     'images',
    sassdoc: 'sass-doc'
  };

  var pkg = grunt.file.readJSON('package.json');


  grunt.initConfig({
    pkg: pkg,

    conf: config,

    watch: {
      compass: {
        files: ['<%= conf.scss %>/**/*.scss'],
        tasks: ['compass:dev']
      }
    },

    compass: {
      options: {
        config:     'config.rb',
        bundleExec: true
      },
      dev:     {
        options: {
          debugInfo:   true,
          environment: 'development'
        }
      },
      dist:    {
        options: {
          environment: 'production',
          force:       true
        }
      }
    },

    sassdoc: {
      default: {
        src:     '<%= conf.scss %>',
        dest:    '<%= conf.sassdoc %>',
        options: {
          verbose:  true,
          display:  {
            access:    ['public', 'private'],
            alias:     true,
            watermark: true
          },
          force:    true,
          groups:   {
            'undefined': 'General'
          },
          package:  pkg,
          theme:    'default',
          basePath: '../<%= conf.scss %>'
        }
      }
    },

    scsslint: {
      allFiles: [
        '<%= conf.scss %>/**/*.scss'
      ],
      options:  {
        bundleExec:     true,
        config:         '.scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all:     ['js/{,**/}*.js', '!js/{,**/}*.min.js']
    }
  });


  // default task - $ grunt
  grunt.registerTask('default', [
    'watch'
  ]);

  grunt.registerTask('build', [
    'scsslint',
    'compass:dist',
    'jshint'
  ]);

  // linting
  grunt.registerTask('test', [
    'scsslint',
    'jshint'
  ]);
};
