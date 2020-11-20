const { environment } = require('@rails/webpacker')

// dotenv
const dotenv = require('./dotenv')
const webpack = require('webpack')

environment.plugins.insert(
	"Environment",
	new webpack.EnvironmentPlugin(process.env)
)

// vue
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)

module.exports = environment
