/**
 * Created by spider on 6/21/17.
 * @author Pines_Cheng <spider.cs.nuc@gmail.com>
 */

module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3002,
  devPort: process.env.DEV_PORT || 3001,
  hotLoadPort: process.env.HOT_LOAD_PORT || 3000,
  app: {
    title: 'My App'
  },
  proxyTable: {
    '^/v2/**': {
      target: 'https://api.dinghuo123.com',
      changeOrigin: true,
      logLevel: 'debug'
    }
  }
};
