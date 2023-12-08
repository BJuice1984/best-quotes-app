const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, './src/app/index.tsx'),
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-modules-typescript-loader' },
                    { loader: 'css-loader', options: { modules: true } },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name][ext]',
                },
            },
            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/media/[name][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
        },
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        static: path.join(__dirname, './dist'),
        compress: true,
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'dist/index.html'),
            favicon: path.resolve(__dirname, 'dist/favicon.ico'),
        }),
        new ESLintPlugin({
            extensions: ['.ts', '.tsx'],
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'dist/images',
                    to: 'images',
                },
            ],
        }),
    ],
}
