import config from '../config/config';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pxtorem = require('postcss-pxtorem');
const rootPath = path.resolve(__dirname, '../');
const srcPath = path.join(rootPath, '/src/');
const distPath = path.join(rootPath, '/dist/');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

const commonWebpackConfig = {
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: srcPath,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.(svg)$/i,
        use: ['svg-sprite-loader'],
        include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },
      {
        // test: /\.(jpe?g|png|gif|svg)$/i, //包含svg会报attrs undefined错误,字体文件可能要使用include做特殊处理
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=1024&name=img/[name].[hash].[ext]']
      },
      // {
      //   test: /\.svg$/,
      //   include: srcPath,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //         name: 'svg/[name].[ext]',
      //         mimetype: 'image/svg+xml'
      //       }
      //     },
      //     {
      //       loader: 'svgo-loader',
      //       options: {
      //         plugins: [
      //           {
      //             removeUselessDefs: false
      //           },
      //           {
      //             removeTitle: true
      //           },
      //           {
      //             removeRasterImages: true
      //           },
      //           {
      //             sortAttrs: true
      //           }
      //         ]
      //       }
      //     },
      //   ]
      // },
      // {
      //   test: /\.svg(\?[\s\S]+)?$/,
      //   exclude: srcPath,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192,
      //         name: 'fonts/[name].[ext]'
      //       }
      //     },
      //   ]
      // },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'fonts/[name].[ext]'
            }
          },
        ]
      },
      {
        test: /\.(ttf|eot)(\?[\s\S]+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          },
        ]
      },
      {
        test: /\.hbs$/,
        include: srcPath,
        use: ['handlebars-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '../src')],
    extensions: ['.web.js', '.js', '.json']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: path.resolve(__dirname, '..')
      }
    }),
    new HtmlWebpackPlugin({
      title: config.app.title,
      isWebpack: true,
      hash: false,
      template: `${srcPath}/index.hbs`,
      filename: `${distPath}/index.html`
    }),
  ]
};

export {
  commonWebpackConfig,
  rootPath,
  srcPath,
  distPath
};
