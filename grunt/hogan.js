module.exports = {
  all: {
    src: 'src/templates/{,**/}*.mustache',
    dest: 'src/js/template.js',
    options: {
      binderName: 'amd'
    }
  }
};
