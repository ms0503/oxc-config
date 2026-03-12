export declare const vitestRules: {
    rules: {
        'vitest/consistent-each-for': (string | {
            describe: string;
            it: string;
            suite: string;
            test: string;
        })[];
        'vitest/consistent-test-filename': (string | {
            allTestPattern: string;
            pattern: string;
        })[];
        'vitest/consistent-vitest-vi': (string | {
            fn: string;
        })[];
        'vitest/hoisted-apis-on-top': "error";
        'vitest/no-conditional-tests': "error";
        'vitest/no-import-node-test': "error";
        'vitest/no-importing-vitest-globals': "error";
        'vitest/prefer-called-once': "error";
        'vitest/prefer-called-times': "off";
        'vitest/prefer-describe-function-title': "error";
        'vitest/prefer-expect-type-of': "error";
        'vitest/prefer-import-in-mock': (string | {
            fixable: boolean;
        })[];
        'vitest/prefer-to-be-falsy': "error";
        'vitest/prefer-to-be-object': "error";
        'vitest/prefer-to-be-truthy': "error";
        'vitest/require-local-test-context-for-concurrent-snapshots': "error";
        'vitest/warn-todo': "error";
    };
};
