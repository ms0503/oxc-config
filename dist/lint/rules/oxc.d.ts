export declare const oxcRules: {
    readonly rules: {
        readonly 'oxc/approx-constant': "error";
        readonly 'oxc/bad-array-method-on-arguments': "error";
        readonly 'oxc/bad-bitwise-operator': "error";
        readonly 'oxc/bad-char-at-comparison': "error";
        readonly 'oxc/bad-comparison-sequence': "error";
        readonly 'oxc/bad-min-max-func': "error";
        readonly 'oxc/bad-object-literal-comparison': "error";
        readonly 'oxc/bad-replace-all-arg': "error";
        readonly 'oxc/branches-sharing-code': "error";
        readonly 'oxc/const-comparisons': "error";
        readonly 'oxc/double-comparisons': "error";
        readonly 'oxc/erasing-op': "error";
        readonly 'oxc/misrefactored-assign-op': "error";
        readonly 'oxc/missing-throw': "error";
        readonly 'oxc/no-accumulating-spread': "error";
        readonly 'oxc/no-async-await': "off";
        readonly 'oxc/no-async-endpoint-handlers': ["error", {
            readonly allowedNames: readonly [];
        }];
        readonly 'oxc/no-barrel-file': ["error", {
            readonly threshold: 100;
        }];
        readonly 'oxc/no-const-enum': "error";
        readonly 'oxc/no-map-spread': ["error", {
            readonly ignoreArgs: true;
            readonly ignoreRereads: true;
        }];
        readonly 'oxc/no-optional-chaining': "off";
        readonly 'oxc/no-rest-spread-properties': "off";
        readonly 'oxc/no-this-in-exported-function': "error";
        readonly 'oxc/number-arg-out-of-range': "error";
        readonly 'oxc/only-used-in-recursion': "error";
        readonly 'oxc/uninvoked-array-callback': "error";
    };
};
