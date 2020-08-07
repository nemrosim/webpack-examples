const path = require('path');

module.exports = {
    // include "two.js" to the bundle
    entry: ['./src/index.js', './src/two.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname),
    },
    // same as webpack --watch
    watch: false,
    // Babel. ES6 Loader
    module: {
        // In webpack v1 "loaders" was used instead of "rules"
        rules: [
            {
                test: /\.js$/,
                // "exclude" - what folders babel should ignore
                // In the official doc you could see this notation "exclude: /(node_modules|bower_components)/,"
                // Because we dont have any "bower_components" folder in our project - it can be removed
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
