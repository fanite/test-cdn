module.exports = {
  publicPath: "https://unpkg.com/test-cdn@master/dist",
  configureWebpack: {
    output: {},
    externals: {
      vue: "Vue",
      vuex: "Vuex",
      "vue-router": "VueRouter",
      "element-ui": "ELEMENT",
      axios: "axios",
    },
  },
  devServer: {
    proxy: {
      "/api/": {
        target: "http://localhost:8000",
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '/'
        // }
      },
    },
  },
};
