const path = require('path');
const sveltePreprocess = require('svelte-preprocess');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const projectPaths = {
    src: path.resolve(__dirname, './src'),
    build: path.resolve(__dirname, './dist'),
    public: path.resolve(__dirname, './public'),
};

module.exports = {
    mode: 'development',
    target: 'web',
    entry: {
        'bundle': [projectPaths.src + '/main.ts']
    },
    devtool: 'eval-source-map',
    resolve: {
        alias: {
            svelte: path.dirname(require.resolve('svelte/package.json'))
        },
        extensions: ['.mjs', '.js', '.ts', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {
        publicPath: 'auto',
        path: projectPaths.build,
        filename: '[name].bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

            {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'},

            {
                test: /node_modules\/svelte\/.*\.mjs$/,
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(html|svelte)$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        compilerOptions: {
                            dev: true,
                        },
                        emitCss: false,
                        hotReload: true,
                        preprocess: sveltePreprocess({
                            postcss: true,
                        }),
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    devServer: {
        open: true,
        liveReload: true,
        compress: true,
        port: 9000,
    },
};
