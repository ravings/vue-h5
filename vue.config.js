const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 选项...

  devServer: {
    port: "8080",
    proxy: {
      "/app": {
        target: "http://yuenov.com:15555",
        // http://44.231.134.142:19999
        changeOrigin: true,
        ws: true,
      },
      "/file": {
        target: "http://pt.yuenov.com:15555",
        // http://44.231.134.142:19999
        changeOrigin: true,
        ws: true,
      },
    },
  },
  chainWebpack: (config) => {
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/svgIcons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/svgIcons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();
  },
};
