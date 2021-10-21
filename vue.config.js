const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 选项...

  devServer: {
    port: "8080",
    proxy: [
      {
        "/api": {
          target: "www.example.com",
          changeOrigin: true,
          ws: true,
        },
      },
      {
        context: ["/auth", "/other"],
        target: "www.other.com",
        changeOrigin: true,
      },
    ],
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
