const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  ignorePatterns: ['**/*'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    '.eslintrc.base.cjs',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    // Should be the last plugin in every configuration.
    'plugin:prettier/recommended'
  ]
})
