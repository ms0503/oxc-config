import { defineConfig } from 'oxlint';
export const vitestRules = defineConfig({
    rules: {
        'vitest/consistent-each-for': [
            'error',
            { describe: 'each', it: 'each', suite: 'each', test: 'each' }
        ],
        'vitest/consistent-test-filename': [
            'error',
            { allTestPattern: 'tests', pattern: '.*\\.test\\.ts' }
        ],
        'vitest/consistent-vitest-vi': ['error', { fn: 'vi' }],
        'vitest/hoisted-apis-on-top': 'error',
        'vitest/no-conditional-tests': 'error',
        'vitest/no-import-node-test': 'error',
        'vitest/no-importing-vitest-globals': 'error',
        'vitest/prefer-called-once': 'error',
        'vitest/prefer-called-times': 'off',
        'vitest/prefer-describe-function-title': 'error',
        'vitest/prefer-expect-type-of': 'error',
        'vitest/prefer-import-in-mock': ['error', { fixable: true }],
        'vitest/prefer-to-be-falsy': 'error',
        'vitest/prefer-to-be-object': 'error',
        'vitest/prefer-to-be-truthy': 'error',
        'vitest/require-local-test-context-for-concurrent-snapshots': 'error',
        'vitest/warn-todo': 'error'
    }
});
