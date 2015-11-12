define([
  'intern!object',
  'intern/chai!assert',
  'portfolio',
], function (registerSuite, assert, Portfolio) {
  registerSuite({
    'name': 'App',
    'Portfolio': {
      'constructor': {
        name: 'constructor',
        'returns an object': function () {
          assert.typeOf(Portfolio, 'object');
        }
      },
      'Portfolio.generate()': {
        name: 'Features.generate()',
        'is defined': function () {
          assert.isDefined(Portfolio.generate);
        }
      }
    }
  });
});
