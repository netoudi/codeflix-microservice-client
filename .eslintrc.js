module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'jsx-a11y',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'prettier',
  ],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always', // new line between groups
        groups: [
          '/^react/',
          'module',
          '/^components/',
          '/^pages/',
          '/^routes/',
          '/^utils/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx', '.js'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'class-methods-use-this': 'off',
    'react/destructuring-assignment': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-globals': 'off',
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
    indent: 'off',
    'react/jsx-wrap-multilines': [
      'error',
      { arrow: true, return: true, declaration: true },
    ],
    'implicit-arrow-linebreak': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    camelcase: 'off',
    'no-restricted-syntax': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
