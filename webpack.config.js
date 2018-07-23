module.exports = {
    devtool: 'source-map',
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
            }
        ]
    }

};
