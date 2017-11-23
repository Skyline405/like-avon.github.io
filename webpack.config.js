const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './client/index.js',

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				options: {
					presets: ["es2015", "react"],
					plugins: ["react-hot-loader/babel"]
				},
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "sass-loader" // compiles Sass to CSS
				}]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './client/index.html',
			inject: "body"
		})
	],

	devServer: {
		proxy: {
			'/api': 'http://localhost:3000'
		},
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		historyApiFallback: true,
		hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
		https: false, // true for self-signed, object for cert authority
		noInfo: true, // only errors & warns on hot reload
	},

	target: 'web'
};