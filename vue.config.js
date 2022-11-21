const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
   transpileDependencies: true
  
},
{
  devServer: {
    compress: true,
    inline: true,
    port: '8080',
    allowedHosts: "all",
    disableHostCheck: true,
    host: "0.0.0.0"
  }
})
