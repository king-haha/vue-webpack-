let htmlwp = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js', //指定打包的入口文件
    output: {
        path: __dirname + '/dist', // 注意： webpack1.14.0 要求这个路径是一个绝对路径
        filename: 'build.js'
    },
    module: {
        loaders: [{
                test: /\.css$/, //打包css文件
                loader: 'style-loader!css-loader' //顺序不能错
            },
            {
                test: /\.scss$/, //打包scss文件
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf)$/, //打包less文件
                loader: 'url-loader?limit=40000' //表示图片大小为临界值，小于40k的图片就会被打包到 build.js 中去
            },
            {
                test: /\.less/, //打包 .less文件
                loader: 'style-loader!css-loader!less-loader'
            },
            // {
            //     test: /\.js$/, // .js文件中的 es6 转成 es5 语法
            //     loader: 'babel-loader', //表示图片大小为临界值，小于40k的图片就会被打包到 build.js 中去
            //     exclude: /node_modules/
            // },
            {
                test: /\.vue$/, // 解析.vue 组件页面文件
                loader: 'vue-loader' //
            }
        ]
    },
    // 由于 webpack2.0 与3.0  已经支持 ES6 转 ES5 语法了，所以这个地方的 babel 配置需要删除。loader 中的 babel 也需要注释掉
    // babel: {
    //     presets: ['es2015'], //将 es6 语法转换成 es5 语法的一个标记
    //     plugins: ['transform-runtime'] //动态将vue文件进行编译，来配合vue来进行开发  如果不是用的 vue 该插件可不安装
    // },
    plugins: [
        new htmlwp({
            title: '首页', //生成的首页标题
            filename: 'index.html', // webpack-dev-server在内存中生成的文件名
            template: 'index1.html' //上面的文件来源（index.html是根据这个文件生成的）
        })
    ]
}