module.exports = {
  "transpileDependencies": [
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
