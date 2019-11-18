const path = require('path');

module.exports = {
  dev: {
    host: 'localhost',
    port: 8080,
    proxyTable: {
      '/v1': {
        target: 'http://localhost:7834',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '/v1'
        }  
      }
    },
    useEslint: true,
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    showEslintErrorsInOverlay: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    devtool: 'cheap-module-eval-source-map',
    poll: false,
    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    bundleAnalyzerReport: false,
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  }
};
