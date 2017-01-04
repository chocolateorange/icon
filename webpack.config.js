'use strict';

const path = require('path');

const webpack = require('webpack');

module.exports = {

  context: __dirname,

  target: 'web',

  entry: {
    index: `${__dirname}/src/index.js`,
  },

  output: {
    path: `${__dirname}/docs/`,
    publicPath: './',
    filename: '[name].js',
    chunkFilename: 'chunk-[id]-[hash].js',
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
    ],
  },

  node: {
    Buffer: false,
    process: false,
  },

  resolve: {
    extensions: [
      '',
      '.js'
    ],
    modulesDirectories: [
      'node_modules',
    ],
  },

  plugins: [
    new webpack.NoErrorsPlugin,
    new webpack.IgnorePlugin(/vertx/),
    new webpack.optimize.OccurenceOrderPlugin,
    new webpack.optimize.DedupePlugin,
    new webpack.optimize.AggressiveMergingPlugin,
  ].concat(
    (process.argv.some(
      (arg) => /^(?:-p|--optimize-minimize)$/.test(arg)
    )) ? [
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: require('uglify-save-license'),
        },
      }),
    ] : []
  ).concat(
    new webpack.BannerPlugin([
      '@license Copyright(c) 2016 sasa+1',
      'Released under the MIT license.',
    ].join('\n'), {
      raw: false,
      entryOnly: true,
    })
  ),

};
