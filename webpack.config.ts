const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src/'),
      Components: path.resolve(__dirname, 'src/app/components'),
    },
  },
};