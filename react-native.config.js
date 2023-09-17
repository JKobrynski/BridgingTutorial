const path = require('path');

module.exports = {
  dependencies: {
    'conic-gradient-package': {
      // <--------- Add entry for "conic-gradient-package"
      root: path.resolve(__dirname, './conic-gradient-package'),
    },
  },
};
