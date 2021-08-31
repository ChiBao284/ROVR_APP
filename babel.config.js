module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
          common: './src/common',
          components: './src/components',
          modules: './src/modules',
          navigation: './src/navigation',
          services: './src/services',
          __mocks__: './__mocks__',
          assets: './assets',
        },
      },
    ],
  ],
};
