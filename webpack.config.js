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
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    inline: true,
    publicPath: '/build/'
  },

  module: {
    rules: [
      // Lint all JS files using eslint
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/
      },

      // Parse all ES6/JSX files and transpile them to plain old JS
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },

      // Allow importing CSS modules
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-modules-values'),
                  require('autoprefixer'),
                  require('precss')
                ];
              }
            }
          }
        ]
      },

      {
        test: /\.json$/,
        loader: 'json-loader'
      },

      // Allow importing SVG files
      {
        test: /\.svg$/,
        use: 'url-loader?limit=10000&mimetype=image/svg+xml'
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

  // No need to write complex relative paths any more!
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  }
};
