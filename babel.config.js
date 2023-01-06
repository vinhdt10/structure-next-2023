module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        displayName: true,
        preprocess: false,
      },
    ],
    [
      'babel-plugin-twin',
      {
        debug: false,
        styled: 'styled-components',
      },
    ],
    'babel-plugin-macros',
  ],
};
