const path = require('path');

module.exports = {
   entry: './Index.js',
   output: {
      path: path.join(__dirname, 'dist'),
      filename: 'output.js',
   },
   mode: 'development',
};
