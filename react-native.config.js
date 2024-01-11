const path = require('path');

module.exports = {
  dependencies: {
    'save-file-picker-package': {
      // <--------- Add entry for "save-file-picker-package"
      root: path.resolve(__dirname, './save-file-picker-package'),
    },
  },
};
