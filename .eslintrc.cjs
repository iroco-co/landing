module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['svelte3', '@typescript-eslint'],
  ignorePatterns: ['*.cjs', 'src/*.js', 'semantic', 'tests'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        indent: 'off'
      }
    },
    {
      files: ['test/**/*.test.js'],
      plugins: ['jest'],
      env: {
        jest: true,
        'jest/globals': true
      },
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error'
      }
    }
  ],
  settings: {
    'svelte3/typescript': () => require('typescript'),
    'svelte3/ignore-styles': () => true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019
  },
  rules: {
    indent: ['error', 2]
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
