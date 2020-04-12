module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        mac: {
          icon: 'src/assets/app.icns',
        },win: {
          icon: 'src/assets/app.ico',
        },
      }
    }
  }
}
