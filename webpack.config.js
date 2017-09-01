// https://j6qup3.github.io/2016/08/15/%E7%8C%B4%E5%AD%90%E4%B9%9F%E8%83%BD%E7%9C%8B%E6%87%82%E7%9A%84-React-%E6%95%99%E5%AD%B8-3/
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: [
  			// 'eventsource-polyfill', //兼容 IE
  			// 'webpack-dev-server/client?http://0.0.0.0:3000',
			  // 'webpack/hot/only-dev-server',
        __dirname + '/src/template/index.js'
        // index :[
        //   __dirname + '/src/template/index.js'
        // ],
        // about :[
        //   __dirname + '/src/template/about.js'
        // ]
    ],
    output: {
        path: __dirname, //打包生成的目錄
        filename: 'bundle.js', //生成的 js 檔名
    },
    resolve: {
        // root: [path.resolve(__dirname, 'src')], //require 的根目錄 (模組的引用不受影響)
        extensions: ['.js', '.jsx', 'css', '.scss'], //require 可省略的副檔名
        alias: { // 路徑對應key
            Src: __dirname + '/src',
            Actions: __dirname + '/src/actions',
            Api: __dirname + '/src/api',
            Assets: __dirname + '/src/assets',
            Styles: __dirname + '/src/styles',
            Store: __dirname + '/src/store',
            Reducers: __dirname + '/src/reducers',
            Routes: __dirname + '/src/routes',
            Controls: __dirname + '/src/components/controls',
            Modules: __dirname + '/src/components/modules',
            Pages: __dirname + '/src/components/pages',
            Images: __dirname + '/src/assets/images'
        }
    },
    module: {
        // test：指定目標檔案的檔名
        // loader：指定使用的 loader
        // include：白名單，只處理的目錄
        // exclude：黑名單，忽略、不處理的目錄
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              	presets:['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader?sourceMap'
        }, {
            test: /\.scss$/,
            loader: 'style!css?sourceMap!sass?sourceMap'
        }, {
            test: /\.less$/,
            loader: 'style!css?sourceMap!less?sourceMap'
        }, {
          test: /\.(png|jpg|jpeg|gif|svg)$/,
          loader: 'url-loader?limit=16384'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom'
        })
    ],
    devtool: 'cheap-module-eval-source-map' //https://segmentfault.com/a/1190000004280859 ，webpack sourcemap選項解釋
};


// var path = require('path');
// var webpack = require('webpack');
// console.log('__dirname', path.join(__dirname, 'src'));
// module.exports = {
//   entry: [
//     'eventsource-polyfill',
//     './main.jsx'
//   ],
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'compiled.js',
//     publicPath: '/'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx','css', '.scss']
//   },
//   module: {
//     loaders: [{
//       test: /\.(js|jsx)$/,
//       loader: 'babel',
//       exclude: /node_modules/
//     }, {
//       test: /\.css$/,
//       loader: 'style!css?sourceMap'
//     }, {
//       test: /\.scss$/,
//       loader: 'style!css?sourceMap!sass?sourceMap'
//     }, {
//       test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
//       loader: 'url?limit=1024&name=[sha512:hash:base64:7].[ext]'
//     }]
//   },
//   devtool: 'cheap-module-eval-source-map',
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.ProvidePlugin({
//    $: 'jquery',
//       React: 'react',
//       ReactDOM:'react-dom'
//     })
//   ]
// };