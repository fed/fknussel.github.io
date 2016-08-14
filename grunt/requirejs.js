module.exports = {
  all: {
    options: {
      baseUrl: 'src/js',
      name: 'main',
      out: 'dist/js/app.min.js',
      optimize: 'uglify2',
      paths: {
        'jquery': 'empty:',
        'hogan': 'empty:'
      },
      cjsTranslate: true
    }
  }
};
