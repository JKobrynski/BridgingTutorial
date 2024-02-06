const path = require('path');

module.exports = {
  dependencies: {
    'save-file-picker-package': {
      root: path.resolve(__dirname, './save-file-picker-package'),
    },
    'conic-gradient-package': {
      root: path.resolve(__dirname, './conic-gradient-package'),
    },
    'range-slider-package': {
      root: path.resolve(__dirname, './range-slider-package'),
    },
    'screen-orientation-package': {
      root: path.resolve(__dirname, './screen-orientation-package'),
    },
    'device-battery-package': {
      root: path.resolve(__dirname, './device-battery-package'),
    },
    'battery-events-package': {
      root: path.resolve(__dirname, './battery-events-package'),
    },
  },
};
