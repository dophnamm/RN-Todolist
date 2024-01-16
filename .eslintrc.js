module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react-native/no-inline-styles': 0,
    'no-unused-vars': 0,
    'react-hooks/exhaustive-deps': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
  ],
};
