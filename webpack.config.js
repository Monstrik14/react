const path = require('path');
const HTMLWebpackPlugins = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
        entry: path.resolve(__dirname, './src/index.ts'),
        output: {
                path: path.resolve(__dirname, './dist'),
                filename: 'main.js',
                clean: true,
        },

        module: {
                rules: [
                  {
                    test: /\.(png|jpg|gif|webp)$/,
                    type: 'asset/resource',
                        generator: {
                            filename: 'static/images/[hash][ext][query]',
                        },
                },
                {
                  test: /\.svg$/i,
                  issuer: /\.[jt]sx?$/,
                  use: ['@svgr/webpack', 'url-loader'],
                }, 
                {
                    test: /\.(woff(2)?|eot|ttf|otf)$/,
                    type: 'asset/resource',
                        generator: {
                            filename: 'static/fonts/[hash][ext][query]',
                        },
                },
                        {
                                test: /\.(sa|sc|c)ss$/,
                                use: [
                                        MiniCssExtractPlugin.loader,
                                        // 'style-loader',
                                        {
                                                loader: 'css-loader',
                                                options: {
                                                        modules: {
                                                                mode: 'local',
                                                                localIdentName: '[name]__[local]__[hash:base64:5]',
                                                                auto: /\.module\.\w+$/i,
                                                                namedExport: false,
                                                        },
                                                        importLoaders: 2, //Значение 2 говорит о том, что некоторые трансформации PostCSS нужно применить до css-loader.
                                                },
                                        },
                                        'postcss-loader',
                                        {
                                                loader: 'sass-loader',
                                                options: {
                                                        sourceMap: true,
                                                },
                                        },
                                ],
                        },
                ],
        },
        resolve: {
                extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
        },

        plugins: [
                new HTMLWebpackPlugins({
                        template: path.resolve(__dirname, 'public/index.html'),
                }),
                new MiniCssExtractPlugin({
                        filename: 'static/styles/index.css',
                }),
        ],
}; 