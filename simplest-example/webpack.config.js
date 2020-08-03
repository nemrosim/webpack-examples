const path = require('path');

module.exports = {
    // include "two.js" to the bundle
    entry: ['./src/index.js', './src/two.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname),
    },
    // same as webpack --watch
    watch: true,
};
