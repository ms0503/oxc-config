import { defineConfig } from 'oxlint';

export const promiseRules = defineConfig({
    rules: {
        'promise/always-return': [
            'error',
            {
                ignoreAssignmentVariable: ['global', 'globalThis', 'window'],
                ignoreLastCallback: true
            }
        ],
        'promise/avoid-new': 'error',
        'promise/catch-or-return': [
            'error',
            {
                allowFinally: true,
                allowThen: false,
                terminationMethod: ['catch', 'finally']
            }
        ],
        'promise/no-callback-in-promise': [
            'error',
            {
                callbacks: ['callback', 'cb', 'done', 'next'],
                exceptions: [],
                timeoutsErr: false
            }
        ],
        'promise/no-multiple-resolved': 'error',
        'promise/no-nesting': 'off',
        'promise/no-new-statics': 'error',
        'promise/no-promise-in-callback': 'error',
        'promise/no-return-in-finally': 'error',
        'promise/no-return-wrap': ['error', { allowReject: false }],
        'promise/param-names': [
            'error',
            { rejectPattern: '^_?reject$', resolvePattern: '^_?resolve$' }
        ],
        'promise/prefer-await-to-callbacks': 'error',
        'promise/prefer-await-to-then': ['error', { strict: false }],
        'promise/prefer-catch': 'error',
        'promise/spec-only': ['error', { allowedMethods: [] }],
        'promise/valid-params': 'error'
    }
} as const);
