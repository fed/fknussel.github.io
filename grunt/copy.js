module.exports = {
  vendor: {
    files: [
      {
        src: ['node_modules/requirejs/require.js'],
        dest: 'dist/js/',
        filter: 'isFile',
        expand: true,
        flatten: true
      },
      {
        src: ['node_modules/jquery/dist/jquery.min.js'],
        dest: 'dist/js/',
        filter: 'isFile',
        expand: true,
        flatten: true
      },
      {
        src: ['node_modules/hogan.js/dist/hogan-*.min.amd.js'],
        dest: 'dist/js/',
        filter: 'isFile',
        expand: true,
        flatten: true
      }
    ]
  }
};
