module.exports = {
  all: {
    src: 'js/src/{,**/}*.mustache',
    dest: 'js/src/template.js',
    options: {
      binderName: 'amd'
    }
  }
};
