const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    "/reverser",
    createProxyMiddleware({
      target: "http://http://54.175.6.230:5000",
      changeOrigin: true
    })
  );

  app.use(
    "/summation",
    createProxyMiddleware({
      target: "http://http://54.175.6.230:5000/",
      changeOrigin: true
    })
  );
}
