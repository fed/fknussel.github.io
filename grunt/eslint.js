module.exports = {
  options: {
    configFile: '.eslintrc'
  },
  target: [
    'Gruntfile.js',
    'grunt/{,**/}*.js',
    'tests/{,**/}*.js',
    'js/src/{,**/}*.js',
    '!js/src/template.js'
  ]
};
