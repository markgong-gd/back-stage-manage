const path = require('path');

const resolve = dir => {
  return path.join(__dirname, '..', dir);
};

module.exports = {
  '@': resolve('src'),
  '@assets': resolve('src/assets'),
  '@cgi': resolve('src/cgi'),
  '@components': resolve('src/components'),
  '@constants': resolve('src/constants'),
  '@hooks': resolve('src/hooks'),
  '@pages': resolve('src/pages'),
  '@styles': resolve('src/styles'),
  '@utils': resolve('src/utils'),
  '@config': resolve('src/config')
};
