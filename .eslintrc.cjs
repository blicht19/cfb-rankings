module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.d.ts'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    "react/react-in-jsx-scope": "off",
      "camelcase": "error",
      "spaced-comment": "error",
      "quotes": ["error", "single"],
      "no-duplicate-imports": "error",
      "prettier/prettier": "error"
  },
}
