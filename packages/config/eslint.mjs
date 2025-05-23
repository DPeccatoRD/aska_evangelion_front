import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    // Base recommended configs
    js.configs.recommended,

    // Main configuration
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: 'readonly',
                JSX: 'readonly',
                NodeJS: 'readonly',
                // Browser globals
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                navigator: 'readonly',
                location: 'readonly',
                // Node.js globals
                process: 'readonly',
                global: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly',
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            '@typescript-eslint': typescript,
            import: importPlugin,
            '@next/next': nextPlugin,
            prettier,
        },
        settings: {
            react: {
                version: 'detect',
            },
            next: {
                rootDir: '.',
            },
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx'],
            },
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
            },
        },
        rules: {
            // Prettier rules
            'prettier/prettier': [
                'warn',
                {
                    tabWidth: 2,
                    semi: true,
                    endOfLine: 'auto',
                    arrowParens: 'always',
                    singleQuote: true,
                    jsxSingleQuote: true,
                    printWidth: 100,
                    jsxBracketSameLine: false,
                    useTabs: false,
                    trailingComma: 'all',
                },
            ],

            // Base JavaScript rules
            'no-undef': 'error',
            'no-unused-expressions': 'off',
            'no-implicit-coercion': 'warn',
            'no-await-in-loop': 'warn',
            'no-var': 'warn',
            'no-shadow': 'off',
            'no-console': 'warn',
            'no-lonely-if': 'warn',
            'no-unused-vars': 'off',
            'no-lone-blocks': 'warn',
            'no-self-compare': 'warn',
            'no-multi-assign': 'warn',
            'no-new-wrappers': 'warn',
            'no-nested-ternary': 'warn',
            'no-return-assign': ['warn', 'always'],
            'no-else-return': ['warn', { allowElseIf: false }],
            'no-param-reassign': ['warn', { props: false }],
            'no-unneeded-ternary': ['warn', { defaultAssignment: false }],
            'no-warning-comments': ['warn', { terms: ['todo', 'fixme'], location: 'anywhere' }],

            // Style rules
            'newline-per-chained-call': 'off',
            'arrow-body-style': ['warn', 'as-needed'],
            curly: 'warn',
            eqeqeq: 'warn',
            'max-depth': ['warn', 3],
            'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
            'max-nested-callbacks': ['warn', 5],
            'object-shorthand': 'warn',
            radix: 'warn',
            'require-atomic-updates': 'warn',

            // Modern JavaScript
            'prefer-const': 'warn',
            'prefer-template': 'warn',
            'prefer-object-spread': 'warn',
            'prefer-exponentiation-operator': 'warn',
            'prefer-destructuring': [
                'warn',
                { array: false, object: true },
                { enforceForRenamedProperties: false },
            ],
            'padding-line-between-statements': [
                'warn',
                {
                    blankLine: 'always',
                    prev: '*',
                    next: ['return', 'block-like', 'function', 'export'],
                },
                {
                    blankLine: 'any',
                    prev: 'export',
                    next: 'export',
                },
            ],

            // Import rules
            'import/no-unresolved': 'off',
            'import/no-named-as-default': 'off',
            'import/no-named-as-default-member': 'off',
            'import/first': 'warn',
            'import/order': [
                'warn',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                        'object',
                        'type',
                        'unknown',
                    ],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'builtin',
                            position: 'before',
                        },
                        // FSD layers
                        {
                            pattern: 'app/**/*',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'pages/**/*',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'widgets/**/*',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'features/**/*',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'entities/**/*',
                            group: 'internal',
                            position: 'after',
                        },
                        {
                            pattern: 'shared/**/*',
                            group: 'internal',
                            position: 'after',
                        },
                        // Styles
                        {
                            pattern: './**/*.css',
                            group: 'sibling',
                            position: 'after',
                        },
                        {
                            pattern: './**/*.scss',
                            group: 'sibling',
                            position: 'after',
                        },
                    ],
                    distinctGroup: true,
                    pathGroupsExcludedImportTypes: ['react'],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', orderImportKind: 'asc', caseInsensitive: false },
                },
            ],

            // TypeScript rules
            '@typescript-eslint/no-namespace': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@typescript-eslint/no-unnecessary-condition': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/type-annotation-spacing': 'warn',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/no-empty-function': 'warn',
            '@typescript-eslint/no-var-requires': 'warn',
            '@typescript-eslint/no-require-imports': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/only-throw-error': 'warn',
            '@typescript-eslint/member-delimiter-style': 'warn',
            '@typescript-eslint/no-deprecated': 'warn',
            '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
            '@typescript-eslint/prefer-optional-chain': 'warn',
            '@typescript-eslint/consistent-type-definitions': 'warn',
            '@typescript-eslint/unified-signatures': 'warn',
            '@typescript-eslint/member-ordering': 'warn',

            // React rules
            'react/display-name': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-no-useless-fragment': 'off',
            'react/jsx-boolean-value': 'warn',
            'react/jsx-key': 'warn',
            'react/prop-types': 'warn',
            'react/no-unescaped-entities': 'warn',
            'react-hooks/exhaustive-deps': 'warn',
            'react/jsx-fragments': 'warn',
            'react-hooks/rules-of-hooks': 'warn',
            'react/no-array-index-key': 'warn',
            'react/no-multi-comp': ['warn', { ignoreStateless: true }],
            'react/self-closing-comp': ['warn', { component: true, html: true }],
            'react/destructuring-assignment': ['warn', 'always', { ignoreClassFields: true }],
            'react/jsx-sort-props': [
                'warn',
                {
                    callbacksLast: true,
                    ignoreCase: true,
                    noSortAlphabetically: false,
                    reservedFirst: false,
                },
            ],

            // Next.js rules
            '@next/next/no-html-link-for-pages': 'off',
        },
    },

    // Ignore patterns configuration
    {
        ignores: [
            'node_modules/**',
            'public/**',
            'styles/**',
            '.next/**',
            'coverage/**',
            'dist/**',
            '.turbo/**',
        ],
    },

    // Prettier config to disable conflicting rules
    prettierConfig,
];