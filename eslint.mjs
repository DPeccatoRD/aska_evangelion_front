// eslint.js → преобразуем в ES модули
export default {
    env: {
        browser: true,
        node: true,
    },
    globals: {
        React: true,
        JSX: true,
        NodeJS: true,
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:@next/next/recommended",
        "prettier"
    ],
    plugins: ["@typescript-eslint", "typescript-sort-keys", "react-hooks", "prettier"],
    settings: {
        react: {
            version: "detect",
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
        'prettier/prettier': [
            1,
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
                trailingComma: 'all'
            }
        ],
        'no-undef': 2,
        'no-unused-expressions': 0,
        'no-implicit-coercion': 1,
        'no-await-in-loop': 1,
        'no-var': 1,
        'no-shadow': 0,
        'no-console': 1,
        'no-lonely-if': 1,
        'no-unused-vars': 0,
        'no-lone-blocks': 1,
        'no-self-compare': 1,
        'no-multi-assign': 1,
        'no-new-wrappers': 1,
        'no-nested-ternary': 1,
        'no-return-assign': [1, 'always'],
        'no-else-return': [1, { allowElseIf: false }],
        'no-param-reassign': [1, { props: false }],
        'no-unneeded-ternary': [1, { defaultAssignment: false }],
        'no-warning-comments': [1, { terms: ['todo', 'fixme'], location: 'anywhere' }],

        'allowDeclarations': 0,
        'newline-per-chained-call': 0,
        'arrow-body-style': [1, 'as-needed'],
        'curly': 1,
        'eqeqeq': 1,
        'max-depth': [1, 3],
        'func-style': [1, 'expression', { allowArrowFunctions: true }],
        'max-nested-callbacks': [1, 5],
        'object-shorthand': 1,
        'radix': 1,
        'require-atomic-updates': 1,

        'prefer-const': 1,
        'prefer-template': 1,
        'prefer-object-spread': 1,
        'prefer-exponentiation-operator': 1,
        'prefer-destructuring': [
            1,
            { array: false, object: true },
            { enforceForRenamedProperties: false }
        ],
        'padding-line-between-statements': [
            1,
            {
                blankLine: 'always',
                prev: '*',
                next: ['return', 'block-like', 'function', 'export']
            },
            {
                blankLine: 'any',
                prev: 'export',
                next: 'export',
            }
        ],

        'import/no-unresolved': 0,
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'import/first': 1,
        'import/order': [
            1,
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
                    'unknown'
                ],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'builtin',
                        position: 'before'
                    },
                    // FSD слои
                    {
                        pattern: 'app/**/*',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'pages/**/*',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'widgets/**/*',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'features/**/*',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'entities/**/*',
                        group: 'internal',
                        position: 'after'
                    },
                    {
                        pattern: 'shared/**/*',
                        group: 'internal',
                        position: 'after'
                    },
                    // Стили
                    {
                        pattern: './**/*.css',
                        group: 'sibling',
                        position: 'after'
                    },
                    {
                        pattern: './**/*.scss',
                        group: 'sibling',
                        position: 'after'
                    }
                ],
                distinctGroup: true,
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', orderImportKind: 'asc', caseInsensitive: false }
            }
        ],

        '@typescript-eslint/no-namespace': 0,
        '@typescript-eslint/no-empty-interface': 0,
        '@typescript-eslint/no-unused-expressions': 0,
        '@typescript-eslint/no-unnecessary-condition': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/type-annotation-spacing': 1,
        '@typescript-eslint/no-inferrable-types': 1,
        '@typescript-eslint/no-empty-function': 1,
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/no-require-imports': 1,
        "@typescript-eslint/no-unused-vars": "warn",
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-throw-literal': 1,
        '@typescript-eslint/member-delimiter-style': 1,
        '@typescript-eslint/ban-types': 1,
        '@typescript-eslint/prefer-includes': 1,
        '@typescript-eslint/prefer-optional-chain': 1,
        '@typescript-eslint/consistent-type-definitions': 1,
        '@typescript-eslint/unified-signatures': 1,
        "typescript-sort-keys/interface": 1,
        "typescript-sort-keys/string-enum": 1,

        'react/display-name': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-no-useless-fragment': 0,
        'react/jsx-boolean-value': 1,
        'react/jsx-key': 1,
        'react/prop-types': 1,
        'react/no-unescaped-entities': 1,
        'react-hooks/exhaustive-deps': 1,
        'react/jsx-fragments': 1,
        'react-hooks/rules-of-hooks': 1,
        'react/no-array-index-key': 1,
        'react/no-multi-comp': [1, { ignoreStateless: true }],
        'react/self-closing-comp': [1, { component: true, html: true }],
        'react/destructuring-assignment': [1, 'always', { ignoreClassFields: true }],
        'react/jsx-sort-props': [
            1,
            {
                callbacksLast: true,
                ignoreCase: true,
                noSortAlphabetically: false,
                reservedFirst: false
            }
        ],
        "@next/next/no-html-link-for-pages": "off"
    },
    ignorePatterns: [
        "node_modules",
        "public",
        "styles",
        ".next",
        "coverage",
        "dist",
        ".turbo",
    ],
}