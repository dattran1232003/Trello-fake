module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/react-in-jsx-scope': 'off',

    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    'no-console': 1,
    'no-unused-vars': 1,
    'no-multi-spaces': 1,
    'no-trailing-spaces': 1,
    'no-multiple-empty-lines': 1,
    'no-unexpected-multiline': 'warn',

    'linebreak-style': 0,
    'object-curly-spacing': [1, 'always'],
    'space-before-blocks': ['error', 'always'],

    semi: [1, 'never'],
    quotes: ['error', 'single'],

    'comma-dangle': 0,
    'comma-spacing': 1,
  },
}
