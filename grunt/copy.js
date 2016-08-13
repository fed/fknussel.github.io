module.exports = {
  vendor: {
    files: [
      {
        src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
        dest: 'css/vendor/bootstrap/css/',
        filter: 'isFile',
        expand: true,
        flatten: true
      },
      {
        src: ['node_modules/bootstrap/dist/fonts/*'],
        dest: 'css/vendor/bootstrap/fonts/',
        expand: true,
        flatten: true
      },
      {
        src: ['node_modules/font-awesome/css/font-awesome.min.css'],
        dest: 'css/vendor/',
        filter: 'isFile',
        expand: true,
        flatten: true
      },
      {
        src: ['node_modules/requirejs/require.js'],
        dest: 'js/vendor/',
        filter: 'isFile',
        expand: true,
        flatten: true
      },
      {
        src: ['node_modules/jquery/dist/jquery.min.js'],
        dest: 'js/vendor/',
        filter: 'isFile',
        expand: true,
        flatten: true
      },
      {
        src: ['node_modules/hogan.js/dist/hogan-*.min.amd.js'],
        dest: 'js/vendor/',
        filter: 'isFile',
        expand: true,
        flatten: true
      }
    ]
  }
};
