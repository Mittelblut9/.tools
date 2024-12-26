module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    plugins: [
        '@typescript-eslint',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug', 'log'] }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'consistent-return': 1,
        'no-else-return': 1,
        'no-undef': 0,
        'no-async-promise-executor': 0,
        'sort-imports': [
            'error',
            {
                'ignoreDeclarationSort': true,
            },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'no-unused-vars': 'off',
    },
    ignorePatterns: [
        'node_modules/**/*',
        'dist/**/*',
    ],
};
