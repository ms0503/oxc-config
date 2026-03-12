import { defineConfig } from 'oxlint';

export const importRules = defineConfig({
    overrides: [
        {
            files: [
                '*.config.cjs',
                '*.config.js',
                '*.config.mjs',
                '*.config.ts'
            ],
            rules: { 'import/no-default-export': 'off' }
        }
    ],
    rules: {
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'import/default': 'error',
        'import/export': 'error',
        'import/exports-last': 'off',
        'import/extensions': [
            'error',
            'never',
            {
                checkTypeImports: true,
                ignorePackages: false,
                pathGroupOverrides: []
            }
        ],
        'import/first': ['error', 'disable-absolute-first'],
        'import/group-exports': 'off',
        'import/max-dependencies': 'off',
        'import/named': 'error',
        'import/namespace': ['error', { allowComputed: true }],
        'import/no-absolute-path': [
            'error',
            { amd: false, commonjs: true, esmodule: true }
        ],
        'import/no-amd': 'error',
        'import/no-anonymous-default-export': [
            'error',
            {
                allowAnonymousClass: false,
                allowAnonymousFunction: false,
                allowArray: true,
                allowArrowFunction: false,
                allowCallExpression: true,
                allowLiteral: false,
                allowNew: false,
                allowObject: true
            }
        ],
        'import/no-commonjs': 'error',
        'import/no-cycle': [
            'error',
            {
                allowUnsafeDynamicCyclicDependency: false,
                ignoreExternal: false,
                ignoreTypes: true,
                maxDepth: 2 ** 32 - 1
            }
        ],
        'import/no-default-export': 'error',
        'import/no-duplicates': [
            'error',
            { considerQueryString: true, preferInline: false }
        ],
        'import/no-dynamic-require': ['error', { esmodule: false }],
        'import/no-empty-named-blocks': 'error',
        'import/no-mutable-exports': 'error',
        'import/no-named-as-default': 'error',
        'import/no-named-as-default-member': 'error',
        'import/no-named-default': 'error',
        'import/no-named-export': 'off',
        'import/no-namespace': ['error', { ignore: [] }],
        'import/no-nodejs-modules': 'off',
        'import/no-relative-parent-imports': 'error',
        'import/no-self-import': 'error',
        'import/no-unassigned-import': 'off',
        'import/no-webpack-loader-syntax': 'error',
        'import/prefer-default-export': 'off',
        'import/unambiguous': 'error'
    }
});
