const common = require('./webpack.common.config');

//common.debug = true;
common.devtool = '#eval-source-map';
common.resolve = {
    extensions: [
        '.js',
        '.ts',
        '.tsx'
    ]
};
module.exports = common;
