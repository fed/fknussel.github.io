module.exports = {
  options: {
    sourceMap: true,
    outputStyle: 'compressed'
  },
  dist: {
    files: {
      'css/app.min.css': 'css/src/app.scss'
    }
  }
};
