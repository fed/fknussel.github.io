module.exports = {
  options: {
    csslintrc: 'grunt/conf/csslintrc.json'
  },
  all: {
    src: ['css/{,**/}*.css', '!css/vendor/{,**/}*.css']
  }
};
