const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            }, 
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],// other stuff
        fallback: {
            "fs": false,
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "url": false,
            "zlib": false,
            "http": false,
            "https": false,
            "buffer": false,
            "assert": false
        }
    },
    
}