export declare const vitestRules: {
    readonly rules: {
        readonly 'vitest/consistent-each-for': ["error", {
            readonly describe: "each";
            readonly it: "each";
            readonly suite: "each";
            readonly test: "each";
        }];
        readonly 'vitest/consistent-test-filename': ["error", {
            readonly allTestPattern: "tests";
            readonly pattern: ".*\\.test\\.ts";
        }];
        readonly 'vitest/consistent-vitest-vi': ["error", {
            readonly fn: "vi";
        }];
        readonly 'vitest/hoisted-apis-on-top': "error";
        readonly 'vitest/no-conditional-tests': "error";
        readonly 'vitest/no-import-node-test': "error";
        readonly 'vitest/no-importing-vitest-globals': "error";
        readonly 'vitest/prefer-called-once': "error";
        readonly 'vitest/prefer-called-times': "off";
        readonly 'vitest/prefer-describe-function-title': "error";
        readonly 'vitest/prefer-expect-type-of': "error";
        readonly 'vitest/prefer-import-in-mock': ["error", {
            readonly fixable: true;
        }];
        readonly 'vitest/prefer-to-be-falsy': "error";
        readonly 'vitest/prefer-to-be-object': "error";
        readonly 'vitest/prefer-to-be-truthy': "error";
        readonly 'vitest/require-local-test-context-for-concurrent-snapshots': "error";
        readonly 'vitest/warn-todo': "error";
    };
};
