module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  rules: {
    'linebreak-style': [
      'error',
      'windows',
    ],
  },
};
