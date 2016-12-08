if (process.env.NODE_ENV === 'release') {
  module.exports = require('./webpack.config.prod.js');
} else {
  module.exports = require('./webpack.config.dev.js');
}