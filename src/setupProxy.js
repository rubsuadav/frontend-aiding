const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://pruebamysql.pythonanywhere.com',
      changeOrigin: true,
      secure: false, 
    })
  );
};