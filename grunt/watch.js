module.exports = {
  js: {
    files: [
      'Gruntfile.js',
      'grunt/{,**/}*.js',
      'tests/{,**/}*.js',
      'src/js/{,**/}*.js',
      'src/templates/{,**/}*.mustache',
      '!src/js/template.js'
    ],
    tasks: ['js'],
    options: {
      livereload: true
    }
  },
  css: {
    files: ['src/css/{,**/}*.scss'],
    tasks: ['css'],
    options: {
      livereload: true
    }
  },
  general: {
    files: ['index.html', 'src/model/{,**/}*.json'],
    options: {
      livereload: true
    }
  }
};
