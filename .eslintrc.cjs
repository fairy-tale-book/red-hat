module.exports = {
  // root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    'no-plusplus': 0,
    'max-len': 0,
    "no-param-reassign": "off",
  },
};
