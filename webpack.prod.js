const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const WorkboxPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    output: {
        library:'Client',
        libraryTarget: 'var',
        globalObject: 'this',
       
        // path: path.resolve(__dirname, 'dist')
        path: path.resolve(__dirname,'src/client/dist'),
        filename: 'bundle.js'
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin(), new OptimizeCssAssetPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename:'[name].css'}),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            runtimeCaching: [
              {
                urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'images',
                  expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                  },
                },
              },
              {
                urlPattern: new RegExp('https://jsonplaceholder.typicode.com/'),
                handler: 'NetworkFirst',
                options: {
                  cacheName: 'api',
                  networkTimeoutSeconds: 10,
                  expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 24 * 60 * 60, // 1 Day
                  },
                  cacheableResponse: {
                    statuses: [0, 200],
                  },
                },
              },
            ],
          }),
        
    ],
    devServer: {
        port: 3000,
        allowedHosts: 'all'
    }
}
