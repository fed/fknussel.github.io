module.exports = {
  options: {
    sourceMap: true,
    outputStyle: 'compressed'
  },
  dist: {
    files: {
      'dist/css/app.min.css': 'src/css/app.scss'
    }
  }
};
