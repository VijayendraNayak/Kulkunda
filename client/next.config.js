// next.config.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*', // Replace with your backend server's address
      },
    ];
  },
  async serverMiddleware() {
    // Create a proxy for '/api' requests
    this.nuxt.hook('render:setupMiddleware', (app) => {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'http://localhost:4000', // Replace with your backend server's address
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        })
      );
    });
  },
};
