const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/main.ts',
    devtool: 'source-map',
    resolve: {
        fallback: {
            "fs": false
        },
        extensions: ['.ts', '.js']
    },
    externals: [nodeExternals()],
    output: {
        // filename: '[name].js',
        // sourceMapFilename: '[file].map',
        publicPath: '',
        path: path.resolve(__dirname, 'dist'),
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|bmp|wav|mp3)$/,
                type: 'asset/resource'
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
		new NodePolyfillPlugin()
	]
}
