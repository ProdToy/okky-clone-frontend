module.exports = {
    root: true,
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
    },
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-unused-vars': 'warn',
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'sort-imports': 'off',
        'import/order': 'off',
        'react/react-in-jsx-scope': 'off',
        'prettier/prettier': [
            'warn',
            {
                tabWidth: 4,
                printWidth: 80,
                trailingComma: 'es5',
                semi: false,
                singleQuote: true,
                endOfLine: 'auto',
                arrowParens: 'always',
                bracketSpacing: true,
                jsxBracketSameLine: true,
            },
        ],
    },
    plugins: ['simple-import-sort'],
}
