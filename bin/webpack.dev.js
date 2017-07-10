/**
 * Created by spider on 6/21/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVars = require('postcss-simple-vars');

const config = require('../config/config');

const hostname = config.host || 'localhost';
const port = config.hotLoadPort;
const host = `http://${hostname}:${port}/`;

import {commonWebpackConfig, srcPath, distPath} from './webpack.common';

const devWebpackConfig = {
  devtool: 'inline-source-map',
  entry: {
    main: [
      'babel-polyfill',
      `webpack-hot-middleware/client?path=${host}__webpack_hmr`,
      'react-hot-loader/patch', // react-hot-loader3.0
      `${srcPath}/index`
    ]
  },
  output: {
    path: distPath,
    filename: 'js/[name].[hash:8].bundle.js',
    chunkFilename: 'js/[id].[name].[chunkhash:8].bundle.js',
    publicPath: host
  }
};

commonWebpackConfig.module.rules = commonWebpackConfig.module.rules.concat(
  [
    {
      test: /\.(css|scss|less)$/,
      use: [
        {
          loader: 'style-loader'
        },
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
      ]
    }
  ]
);

commonWebpackConfig.plugins = commonWebpackConfig.plugins.concat(
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
);

const webpackConfig = Object.assign({}, commonWebpackConfig, devWebpackConfig);

export default webpackConfig;
