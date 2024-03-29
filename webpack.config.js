
module.exports = {
    entry: './src/index.js',
    output: {
        filename: './dist/app.js',
        publicPath: '/',
    },
    watch: true,
    mode: 'development',
    devServer: {
        historyApiFallback: true,
      },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" }
            ]
        }, {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use:  'eslint-loader'
            
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                }
            }
        }]
    }
};