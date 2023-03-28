const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
  ],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
});
