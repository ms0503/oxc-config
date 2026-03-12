import { defineConfig } from 'oxlint';

export const oxcRules = defineConfig({
    rules: {
        'oxc/approx-constant': 'error',
        'oxc/bad-array-method-on-arguments': 'error',
        'oxc/bad-bitwise-operator': 'error',
        'oxc/bad-char-at-comparison': 'error',
        'oxc/bad-comparison-sequence': 'error',
        'oxc/bad-min-max-func': 'error',
        'oxc/bad-object-literal-comparison': 'error',
        'oxc/bad-replace-all-arg': 'error',
        'oxc/branches-sharing-code': 'error',
        'oxc/const-comparisons': 'error',
        'oxc/double-comparisons': 'error',
        'oxc/erasing-op': 'error',
        'oxc/misrefactored-assign-op': 'error',
        'oxc/missing-throw': 'error',
        'oxc/no-accumulating-spread': 'error',
        'oxc/no-async-await': 'off',
        'oxc/no-async-endpoint-handlers': ['error', { allowedNames: [] }],
        'oxc/no-barrel-file': ['error', { threshold: 100 }],
        'oxc/no-const-enum': 'error',
        'oxc/no-map-spread': [
            'error',
            { ignoreArgs: true, ignoreRereads: true }
        ],
        'oxc/no-optional-chaining': 'off',
        'oxc/no-rest-spread-properties': 'off',
        'oxc/no-this-in-exported-function': 'error',
        'oxc/number-arg-out-of-range': 'error',
        'oxc/only-used-in-recursion': 'error',
        'oxc/uninvoked-array-callback': 'error'
    }
});
