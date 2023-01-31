const path = require("path");
const CracoLessPlugin = require("craco-less");
module.exports = {
  plugins: [{ plugin: CracoLessPlugin }],
  webpack: {
    // 配置路径别名
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
};
export {};
