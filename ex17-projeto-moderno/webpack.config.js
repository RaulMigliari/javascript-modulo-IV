const path = require('path')

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), //! Passar o nome da pasta que está nossos arquivos estáticos, gerados pelo webpack
        },
        port: 8000
    },
    entry: {
        index: './src/index.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: '[name].min.js'
    }
}