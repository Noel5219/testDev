var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var compiler = webpack(config);
var app = express();

// 將 webpack 傳入 webpack-dev-middleware 並套用至 app，同時傳入屬性，webpack 就可以被加載進來
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// 載入 index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 監聽 8000 port，並顯示錯誤或成功
app.listen(8000, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:8000');
});
// app.use(require('webpack-hot-middleware')(compiler));