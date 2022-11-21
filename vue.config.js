const path = require('path');
const webpack = require('webpack');

module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    },
    chainWebpack: config => {
        // Remove prefetch plugin and that's it!
        config.plugins.delete('prefetch');
        config.optimization.delete('splitChunks')
    },
    filenameHashing: false,

    configureWebpack: {
        resolve: {
            alias: {
                '@themeConfig': path.resolve(__dirname, 'theme.config.js'),
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
            })
        ]
    },
    devServer: {
        public : process.env.APP_URL,
        host : '0.0.0.0',
        disableHostCheck : true
    },
    publicPath: "/"
};