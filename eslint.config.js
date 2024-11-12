const js = require('@eslint/js');
const ts = require('typescript-eslint');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  ...ts.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.js', '**/*.ts'],
    ignores: ['node_modules/**', 'report/**'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': ts.plugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
