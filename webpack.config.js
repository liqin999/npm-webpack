/**
 * Created by liqin on 2017/9/15.
 */


const path = require('path');
module.exports = {
  entry:"./src/app.js",//����ļ�
  output:{//����ļ�
    filename:"main.js",
    path:path.resolve(__dirname,'dist/assets'),//����ľ���·����  __dirname����ǰ�ļ�����Ŀ¼�ľ���·��
    publicPath:'/assets/'

  }

}