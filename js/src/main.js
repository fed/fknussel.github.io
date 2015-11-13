require.config({
  baseUrl: 'js/src',
  paths: {
    jquery: '../vendor/jquery.min',
    hogan: '../vendor/hogan-3.0.2.min.amd'
  }
});

requirejs(['jquery', 'portfolio'], function ($, portfolio) {
  portfolio.generate(function (data) {
    $('.portfolio').html(data);
  });
});
