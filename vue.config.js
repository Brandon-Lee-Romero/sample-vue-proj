const { defineConfig } = require('@vue/cli-service')
const path = require('path');
const webpack = require('webpack');

module.exports = defineConfig(
    {
        transpileDependencies: true
    },
    {
        devServer: {
            public : process.env.APP_URL,
            host : '0.0.0.0',
            disableHostCheck : true
                }
    },
    {
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
        publicPath: "/"
    })