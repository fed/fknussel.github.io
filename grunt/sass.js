module.exports = {
  options: {
    sourceMap: true,
    outputStyle: 'compressed',
    includePaths: [
      'node_modules/bootstrap-sass/assets/stylesheets'
    ]
  },
  dist: {
    files: {
      'dist/css/app.min.css': 'src/css/app.scss'
    }
  }
};
