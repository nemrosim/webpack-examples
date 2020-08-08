const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /*
     *   Path of JS entry points.
     */
    entry: ['./src/index.js', './src/two.js'],
    output: {
        /*
         *   JS bundle should be named "bundle.js"
         */
        filename: 'bundle.js',
        /*
         *   Place all files to "build" folder
         */
        path: path.resolve(__dirname, 'build'),
        /*
         * Path by which our "bundle.js" file will be available on server
         * In another words:
         *  - when user will request "/public/assets/js/bundle.js" file ("publicPath")
         *  - server will look it at "/build/bundle.js" path ("path")
         */
        publicPath: '/public/assets/js'
    },
    devServer: {
        /*
         * Where should 'webpack-dev-server' look for "index.html" file?
         * In a '/public' folder
         *
         *  By default,
         *  it will use your current working directory to serve content.
         *  To disable contentBase set it to 'false'.
         */
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    },
    /*
     *  Same as "webpack --watch".
     *  Re-run webpack script on each file change-save
     */
    watch: false,
    /*
     *  Babel. ES6 Loader
     */
    plugins: [
        new HtmlWebpackPlugin({
            /*
             *  true || 'head' || 'body' || false
             *  Inject all assets into the given template or templateContent.
             *  When passing true or 'body'
             *  all javascript resources will be placed at the bottom of the body element.
             *  'head' will place the scripts in the head element.
             */
            inject: false,
            template: path.resolve(__dirname, 'public/index.html'),
        }),
    ],
    module: {
        /*
         * In webpack v1 prop "rules" was called "loaders"
         */
        rules: [
            {
                /*
                 *  What file extensions should be processed by this module
                 */
                test: /\.js$/,
                /*
                 *  "exclude" - what folders babel should ignore
                 *  In the official doc you could see this notation:
                 *  "exclude: /(node_modules|bower_components)/,"
                 *
                 *  Because we dont have any "bower_components"
                 *  folder in our project - it can be removed
                 */
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
