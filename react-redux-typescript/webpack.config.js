const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const sourcePath = path.join(__dirname, './src');
const distPath = path.join(__dirname, './dist');

module.exports = {
    entry: {
        client: ['./src/index.tsx'],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: "initial",
                    minChunks: 2,
                },
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            }
        }
    },

    output: {
        path: distPath,
        filename: "[name].js"
    },

    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json' ]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    target: 'web',

    devServer: {
        inline: true,
        historyApiFallback: true,
        contentBase: sourcePath,
        publicPath: '/',
        port: 9000,
        host: 'localhost',
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
}