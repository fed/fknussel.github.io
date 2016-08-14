module.exports = {
  all: {
    options: {
      hostname: '*',
      port: process.env.PORT || '6789',
      base: ['.'],
      livereload: true,
      open: false
    }
  }
};
