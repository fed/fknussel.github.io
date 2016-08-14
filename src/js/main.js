require.config({
  baseUrl: 'src/js',
  paths: {
    jquery: '/dist/js/jquery.min',
    hogan: '/dist/js/hogan-3.0.2.min.amd'
  }
});

requirejs(['jquery', 'portfolio'], function ($, portfolio) {
  portfolio.generate(function (data) {
    $('.portfolio').html(data);
  });
});
