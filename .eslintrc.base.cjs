const { defineConfig } = require('eslint-define-config')

const ECMA_VERSION = 2022

module.exports = defineConfig({
  ignorePatterns: ['**/*'],

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:unicorn/recommended',
    'plugin:security/recommended'
  ],
  plugins: ['@typescript-eslint', 'import', 'vitest', 'simple-import-sort', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: ECMA_VERSION,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    warnOnUnsupportedTypescriptVersion: true
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/no-unresolved': 'error',
    'no-console': 'error',
    'no-nested-ternary': 'off',
    'no-unexpected-multiline': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    curly: 'error',
    'unicorn/filename-case': ['off']
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            minimumDescriptionLength: 3,
            'ts-check': false,
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': true
          }
        ],
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
          }
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            disallowTypeAnnotations: true,
            prefer: 'type-imports'
          }
        ],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-confusing-non-null-assertion': 'error',
        '@typescript-eslint/no-confusing-void-expression': [
          'error',
          {
            ignoreVoidOperator: true,
            ignoreArrowShorthand: true
          }
        ],
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            ignoreRestSiblings: false,
            vars: 'all'
          }
        ],
        '@typescript-eslint/non-nullable-type-assertion-style': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-reduce-type-parameter': 'error',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        '@typescript-eslint/promise-function-async': [
          'error',
          {
            allowAny: false,
            allowedPromiseNames: ['Thenable'],
            checkArrowFunctions: true,
            checkFunctionDeclarations: true,
            checkFunctionExpressions: true,
            checkMethodDeclarations: true
          }
        ],
        '@typescript-eslint/restrict-plus-operands': [
          'error',
          {
            allowAny: false
          }
        ],
        '@typescript-eslint/strict-boolean-expressions': [
          'error',
          {
            allowNullableObject: false,
            allowNumber: false,
            allowString: false
          }
        ],
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/no-useless-undefined': 'off',
        'security/detect-object-injection': 'off'
      }
    }
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: '.'
      }
    }
  }
})
