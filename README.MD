webpack4相关

1 webpack 安装
npm install --save-dev webpack//本地安装，选这个webpack针对项目安装
npm install --global webpack//全局

装完之后会要求装一个webpack-cli  如下

One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
 - webpack-cli (https://github.com/webpack/webpack-cli)
We will use "npm" to install the CLI via "npm install -D".
Do you want to install 'webpack-cli' (yes/no): yes

可以选yes 但是会安装不成功，但是可以使用npm install --global webpack-cli重新安装

webpack打包时如果提示则本地安装npm install --save-dev webpack