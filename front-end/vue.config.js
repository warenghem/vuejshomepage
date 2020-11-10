module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config
      .plugin('prefetch')
      .tap(args => {
        return [
          {
            rel: 'prefetch',
            include: 'asyncChunks',
            fileBlacklist: [
              /\.map$/,
              /pdfmake\.[^.]+\.js$/,
              /xlsx\.[^.]+\.js$/,
              /fabric[^.]*\.[^.]+\.js$/,
              /responsivedefaults\.[^.]+\.js$/,
            ]
          }
        ]
      })
  },
  pluginOptions: {
    i18n: {
      locale: 'fr',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
};
