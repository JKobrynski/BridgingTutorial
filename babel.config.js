module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: [
          '.ios.js',
          '.ios.ts',
          '.ios.tsx',
          '.android.js',
          '.android.ts',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          'save-file-picker-package': './save-file-picker-package',
          'conic-gradient-package': './conic-gradient-package',
          'range-slider-package': './range-slider-package',
          'screen-orientation-package': './screen-orientation-package',
          'device-battery-package': './device-battery-package',
          'battery-events-package': './battery-events-package',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
