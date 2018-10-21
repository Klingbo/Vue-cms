const path = require('path');
// 如果要使用插件，需要在配置中plugins节点进行设置
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 当以命令行形式运行webpack或webpack-dev-server的时候，工具会发现我们并没有提供
// 要打包的文件入口和出口，此时，工具会自动检查项目根目录中的配置文件，并读取，接着
// 按照配置文件的设置进行打包构建
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/src/main.js'),//入口文件
  output: {//输出配置
    path: path.join(__dirname, '/dist'),//输出文件夹路径
    filename: 'bundle.js',//输出文件名称
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),//指定模板文件路径
      filename: 'index.html',//设置生成的内存页面的名称
    }),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {//url-loader可以解析所有的路径，包括图片路径/字体路径等
        // 内部依赖file-loader
        test: /\.(jpg|jpeg|png|gif|bmp)/,
        //可以通过查询传参，limit表示小于这个值的图片就要进行base64编码，单位是byte
        // 第二个参数name=[name]表示不要把图片的名称变成hash字符串,扩展名也保持原样
        use: 'url-loader?limit=5869&name=[name].[ext]',
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)$/,
        use: 'url-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.vue$/,
        use:'vue-loader',
      }//Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的,
    ],
  },
  // resolve:{
  //   alias:{'vue$':'vue/dist/vue.js'}
  // }
}