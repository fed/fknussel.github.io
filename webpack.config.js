const webpack = require('webpack');
const path = require('path');

// Plugins
const StyleLintPlugin = require('stylelint-webpack-plugin');

// Environment
const ENVIRONMENT = process.env.NODE_ENV || 'development';

// Uglify Plugin only on production
const uglifyOnProduction = () => {
  if (ENVIRONMENT === 'production') {
    return new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    });
  }

  return () => {};
};

module.exports = {
  entry: './src',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    publicPath: './build'
  },
  module: {
    preLoaders: [
      // Lint all JS files using eslint
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      // Parse all ES6/JSX files and transpile them to plain old JS
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },

      // Allow importing CSS modules
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },

      // Allow importing SVG files
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    // Lint CSS files
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '{,**/}*.css',
      failOnError: false,
      quiet: false
    }),

    // React optimisation for production builds
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENVIRONMENT)
      }
    }),
    uglifyOnProduction()
  ],

  // eslint config
  eslint: {
    failOnWarning: false,
    failOnError: true
  },

  // PostCSS modules we will be running, in order
  postcss: function () {
    return [
      require('postcss-modules-values'),
      require('autoprefixer'),
      require('precss')
    ];
  },

  // No need to write complex relative paths any more!
  resolve: {
    root: [
      path.resolve('./src/')
    ]
  }
};
