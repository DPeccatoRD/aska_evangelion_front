import eslintBaseConfig from './eslint.mjs';

export default {
  ...eslintBaseConfig,
  root: true,
  parserOptions: {
    ecmaFeatures: { 'jsx': true },
    ecmaVersion: '2022',
    sourceType: 'module',
    tsconfigRootDir: process.cwd(), // __dirname не доступен в ES модулях
    project: "./tsconfig.json",
  },
  ignorePatterns: ['.eslintrc.js'],
};

