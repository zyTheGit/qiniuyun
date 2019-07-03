const path = require('path');
module.exports = {
	// 入口，是一个对象
	mode: "production",//development,production
	entry: {
		'index':'./src/index.js',
		'module':'./src/index.es6.js'
	},
	// 输出
	output: {
		path: path.resolve(__dirname, 'dest'),
		filename: 'bundle.[name].js',
		libraryTarget: 'umd',//抛出全局 
	},
	node: {
		fs: 'empty',
		child_process: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	performance: {
		hints: process.env.NODE_ENV === 'production' ? "warning" : false   //在生产模式，关闭警告
	}
}