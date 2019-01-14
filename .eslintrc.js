module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'max-len': 'off',
    'no-param-reassign': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'no-plusplus': 'off',
    'object-curly-newline': 'off',
    'array-callback-return': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
