const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');
const path = require('path');

module.exports = (env, args) => {
    const isProd = args.mode === 'production';
    const devtool = !isProd && 'inline-source-map';
    const rules = [
        {
            test: /\.tsx?$/,
            loader: 'esbuild-loader',
            options: {
                loader: 'tsx',
                target: 'es6',
            },
            exclude: /node_modules/,
        },
        {
            test: /\.(sa|s?c)ss/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
    ];

    return {
        devtool,
        entry: ['./src/index.tsx'],
        output: {
            path: path.join(__dirname, './public/'),
            filename: 'bundle.js',
        },
        module: { rules },
        resolve: {
            modules: ['node_modules'],
            alias: {
                '~': path.join(__dirname, './src/'),
            },
            extensions: ['.ts', '.tsx', '.js'],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'style.css',
            }),
            new CleanTerminalPlugin(),
        ],
    };
};
