webpack4相关

1 webpack 安装
npm install --save-dev webpack//本地安装，选这个webpack针对项目安装
npm install --global webpack//全局 不推荐，会使webpack锁定在某一个版本

安装太慢可以使用淘宝镜像安装cnpm    npm install -g cnpm --registry=https://registry.npm.taobao.org 然后使用cnpm安装

装完之后会要求装一个webpack-cli  如下

One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
We will use "npm" to install the CLI via "npm install -D".
Do you want to install 'webpack-cli' (yes/no): yes

可以选yes 但是会安装不成功，但是可以使用npm install --global webpack-cli重新安装

webpack打包时如果提示则本地安装npm install --save-dev webpack


2 webpack打包
(1)mode (development/production/none)什么都不么的时候默认是production

webpack --mode=development

(2)可以指定要编译的文件和编译输出文件

webpack --mode=development ./src/hello.js --output ./build/main.js

(3)使用项目中的node_modules中的webpack
可以在package.json中配置。先安装npx 会自动找
"scripts": {
    "dev": "npx webpack --mode=development",
    "build":"webpack --mode=production"
  },

  3 babel配置
  babel插件配置可以根据api一个一个插件转化，也可以用Presets预设配置自带很多插件，也有需要自己配置的比如装饰器

  可以在webpack.config.js里面配置或者在.babelrc文件里面配置相关babel

  babel可以转换一些语法但是一些api如Promise ，WeakMap等不能转换具体可以看babel的官网

  polyfill是在源代码运行前作用不是开发时所以npm install --save @babel/polyfill只要--save 不要--save-dev


  babel只负责一些语法转换比如将ES6转换成ES5，但如果有些对象方法浏览器本身不支持，比如：
  全局对象：Promise,Weakmap
  全局静态函数：Array.from,Object.assign
  实例方法：Array.prototype.includes
  此时需要引入babel/polyfill来模拟实现这些对象和方法



  4 webpack merge 分离线上环境开发环境配置 webpack common.js ,webpack developmet.js webpack prod.js

  5 webpack bar 显示打包进度条 是一个plugin

  6 devtool 打包之后代码是否显示源码等等操作，具体看api

  7 mini-css-extract-plugin

    mini-css-extract-plugin插件也是用来提取css到单独的文件的，该插件有个前提条件，只能用于webpack 4及以上的版本，所以如果使用的webpack版本低于4，,那还是用回extract-text-webpack-plugin插件。

  8 optimization 压缩相关


  总结，主要还是要研读各个api，并根据需求配置，
  别人的例子https://github.com/AlexandreJw/webpack4.x-learn 


"webpack-dev-server": "^3.10.3"
//开启本地服务器，可以在本地运行http://localhost:8080/开启热加载等等 