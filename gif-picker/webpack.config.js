// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // The entry point of your application
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory for bundled files
        filename: 'bundle.js', // The name of the bundled file
    },
};
