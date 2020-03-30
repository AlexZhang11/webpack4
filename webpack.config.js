const path = require('path')//用于处理文件与目录的路径
var HtmlWebpackPlugin = require('html-webpack-plugin');//自动生成带hash值的文件index.html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//将css释放出来先执行，避免线上加载出现空白
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清理某些文件
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩释放后的css文件，配置没完成其他具体还需要看api

module.exports = {
    //配置单个文件入口
    // entry:"./src/index.js",
    // output:{
    //     path:path.resolve(__dirname,'dist'),//__dirname全局变量
    //     filename:'app.bundle.js'

    // },
    //配置多个文件入口
    entry:{
        app:["@babel/polyfill","./src/index.js"],
        hello:"./src/hello.js"
    },
    devtool:false,//配置打包输出文件可读性
    output:{
        path:path.resolve(__dirname,'dist'),//__dirname全局变量
        filename:'[name]-[hash].bundle.js'
    
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              // options: {
              //   presets: [['@babel/preset-env',{'debug':true}]],
              //   plugins: [ ["@babel/plugin-proposal-decorators", { "legacy": true }]]
              // }
            }
          },
          {
            test: /\.css$/,//test: /\.(sa|sc|c)ss$/,
            use: [ {
              loader: MiniCssExtractPlugin.loader,
              options: {
                // you can specify a publicPath here
                // by default it uses publicPath in webpackOptions.output
                publicPath: '../',
                hmr: process.env.NODE_ENV === 'development',
              },
            },
             'css-loader' ]
          },
          {
            test: /\.scss|sass$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            },
          ]
        },
            {
              test: /\.less$/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings
              }, {
                  loader: "css-loader" // translates CSS into CommonJS
              }, {
                  loader: "less-loader" // compiles Less to CSS
              },
        ]
      }, 
      {//配置图片
        test: /\.(png|jpg?e|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',//输出图片路径等于源文件名
              outputPath: 'images/',//输出文件名
            }
          }
        ]
      },
      {//压缩图片
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ]
  },
      plugins: [new HtmlWebpackPlugin()],
      mode:'development',
}