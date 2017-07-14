/**
 * Created by spider on 6/21/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pxtorem = require('postcss-pxtorem')({
  rootValue: 100,
  propWhiteList: [],
});
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
    // publicPath: host
  }
};

commonWebpackConfig.module.rules = commonWebpackConfig.module.rules.concat(
  [
    {
      test: /\.(css|less)$/,
      use: [
        {
          loader: 'style-loader' // creates style nodes from JS strings
        },
        {
          loader: 'css-loader', // translates CSS into CommonJS
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [autoprefixer, pxtorem]
          },
        },
        {
          loader: 'less-loader', // compiles Less to CSS
          options: {
            sourceMap: true
          }
        },
      ]
    },
  ]
);

commonWebpackConfig.plugins = commonWebpackConfig.plugins.concat(
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    // new BundleAnalyzerPlugin()
  ]
);

const webpackConfig = Object.assign({}, commonWebpackConfig, devWebpackConfig);

export default webpackConfig;
