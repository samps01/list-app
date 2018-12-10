const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('../helper.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/main.ts',
        'styles': './src/main.scss'
    },

    resolve: {
        extensions: [
            '.js', '.ts'
        ]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [ 'awesome-typescript-loader?configFileName=config/tsconfig.json', 'angular2-template-loader' ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                exclude: [ /node_modules/, helpers.root('src', 'main.scss') ],
                use: [ 'to-string-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /main\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'app', 'vendor', 'polyfills' ]
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src'),
            {}
        )
    ]
};