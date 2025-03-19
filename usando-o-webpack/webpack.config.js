const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/, //! $ indica que queremos procurar o ".css" no final do nome do arquivo e a "\" serve para indicarmos que o "." não faz parte da string, já que estamos trabalhando com expressões regulares (mesma ideia do \n)
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
}