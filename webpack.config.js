const webpack = require('webpack');
const path = require('path');

// Post CSS Modules
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const values = require('postcss-modules-values');

// Plugins
const StyleLintPlugin = require('stylelint-webpack-plugin');

// Environment
const environment = process.env.NODE_ENV || 'development';

// Uglify Plugin only on production
const uglifyOnProduction = () => {
  if (environment === 'production') {
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
    publicPath: '/build/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: '{,**/}*.css',
      failOnError: false,
      quiet: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(environment)
      }
    }),
    uglifyOnProduction()
  ],
  eslint: {
    failOnWarning: false,
    failOnError: true
  },
  postcss: function () {
    return [values, autoprefixer, precss];
  },
  resolve: {
    root: [
      path.resolve('./src/')
    ]
  }
};
