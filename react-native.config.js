const path = require('path');

module.exports = {
  dependencies: {
    'save-file-picker-package': {
      // <--------- Add entry for "save-file-picker-package"
      root: path.resolve(__dirname, './save-file-picker-package'),
    },
    'conic-gradient-package': {
      // <--------- Add entry for "conic-gradient-package"
      root: path.resolve(__dirname, './conic-gradient-package'),
    },
  },
};
