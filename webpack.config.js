module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
    },
    externals: {
        'mysql2/promise': 'mysql2/promise'
    }
};
