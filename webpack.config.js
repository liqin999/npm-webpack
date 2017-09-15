/**
 * Created by liqin on 2017/9/15.
 */


const path = require('path');
module.exports = {
  entry:"./src/app.js",//入口文件
  output:{//打包文件
    filename:"main.js",
    path:path.resolve(__dirname,'dist/assets'),//打包的绝对路径；  __dirname代表当前文件所在目录的绝对路径
    publicPath:'/assets/'

  }

}