// Just a dummy for webstorm/vsCode to resolve aliases
// Aliases are supported by default through nuxt
// For Webstorm goto Preferences -> Webpack; and select this file for IDE support
const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname)
    }
  }
}
