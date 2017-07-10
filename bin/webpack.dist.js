/**
 * Created by spider on 6/21/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
// const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');
const CleanPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

import {commonWebpackConfig, srcPath, rootPath, distPath} from './webpack.common';

commonWebpackConfig.module.rules = commonWebpackConfig.module.rules.concat(
  [
    {
      test: /\.(jsx|js)$/,
      include: srcPath,
      use: ['babel-loader']
    },
    {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [postcssMixins, postcssSimpleVars, postcssNested, autoprefixer]
            },
          },
        ],
        publicPath: distPath
      })
    },
  ]
);

commonWebpackConfig.plugins = commonWebpackConfig.plugins.concat(
  [
    new CleanPlugin([distPath], {
      root: rootPath
    }),
    new ExtractTextPlugin({
      filename: 'css/[chunkhash].[name].css',
      disable: false,
      ignoreOrder: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJsPlugin()
  ]
);

const proWebpackConfig = {
  devtool: false,
  entry: {
    main: ['babel-polyfill', `${srcPath}index`]
  },
  output: {
    path: distPath,
    filename: 'js/[chunkhash].[name].js'
  }
};


const webpackConfig = Object.assign({}, commonWebpackConfig, proWebpackConfig);

module.exports = webpackConfig;
