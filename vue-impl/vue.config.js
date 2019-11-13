// vue.config.js
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    // 使用运行时编译器的 Vue 构建版本
    runtimeCompiler: true,

    // 开启生产环境SourceMap，设为false打包时不生成.map文件
    productionSourceMap: false,

    // 关闭ESLint，如果你需要使用ESLint，把lintOnSave设为true即可
    lintOnSave: false,

    devServer: {
        open: false,        // 是否自动打开浏览器页面
        host: '0.0.0.0',    // 指定使用一个 host，默认是 localhost
        port: 8090,         // 端口地址
        https: false,       // 使用https提供服务
        
        proxy: 'http://198.98.250.118:8080/pweb'
        
        // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
        // proxy: {
        //     '/pweb': {
        //         target: 'http://198.98.250.122:8080',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/pweb': ''
        //         }
        //     }
        // }
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('components', resolve('src/components'))
    },

    configureWebpack: config => {
        // 生产环境打包分析体积
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    new BundleAnalyzerPlugin()
                ]
            }
        }
    },
    css: {
        loaderOptions: {
            postcss:{
                plugins:{
                    
                }
            }
        }
    },
};
