const path = require('path');

module.exports = {
	entry: './src/index.ts',
	mode: 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json']
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: {
			type: 'commonjs2',
		},
	},
	externals: [
		{
			react: 'react',
			'react/jsx-runtime': 'react/jsx-runtime',
			'react-dom': 'react-dom'
		}
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							compilerOptions: require('./tsconfig.json').compilerOptions
						},
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader'
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				],
			},
		]
	}
};