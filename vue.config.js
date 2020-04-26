module.exports = {
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist",
  transpileDependencies: [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        mac: {
          icon: 'src/assets/favicon.ico',
        },win: {
          icon: 'src/assets/favicon.ico',
        },
      }
    }
  }
}
