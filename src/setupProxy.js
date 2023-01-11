const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      target: "http://123.207.32.32:9002", //服务器的地址
      changeOrigin: true,
      pathRewrite: {
        "^/api1": "", //  重写请求前缀
      },
    })
  );
};
