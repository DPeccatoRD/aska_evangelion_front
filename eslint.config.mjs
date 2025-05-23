import baseConfig from './packages/config/eslint.mjs';

export default [
  // Импортируем базовую конфигурацию
  ...baseConfig,

  // Переопределяем настройки для корневого проекта
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname, // или process.cwd() для Node.js < 20.11.0
      },
      globals: {
        localStorage: 'readonly',
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
      },
    },
    rules: {
      // Дополнительные правила для корневого проекта
      'no-alert': 'warn',
    },
  },

  // Игнорируемые файлы
  {
    ignores: [
      'eslint.config.mjs',
      'public/**',
      'next.config.ts',
    ],
  },
];
