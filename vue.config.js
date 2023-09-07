const { defineConfig } = require("@vue/cli-service");
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "~rfs": path.resolve(__dirname, "node_module/rfs"),
      },
    },
  },
});
