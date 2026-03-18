export declare const unicornRules: {
    readonly rules: {
        readonly "unicorn/catch-error-name": ["error", {
            readonly ignore: readonly [];
            readonly name: "err";
        }];
        readonly "unicorn/consistent-assert": "error";
        readonly "unicorn/consistent-date-clone": "error";
        readonly "unicorn/consistent-empty-array-spread": "error";
        readonly "unicorn/consistent-existence-index-check": "error";
        readonly "unicorn/consistent-function-scoping": ["error", {
            readonly checkArrowFunctions: true;
        }];
        readonly "unicorn/empty-brace-spaces": "error";
        readonly "unicorn/error-message": "error";
        readonly "unicorn/escape-case": "error";
        readonly "unicorn/explicit-length-check": ["error", {
            readonly "non-zero": "not-equal";
        }];
        readonly "unicorn/filename-case": ["error", {
            readonly case: "kebabCase";
            readonly ignore: "^.*\\.[jt]sx$";
            readonly multipleFileExtensions: true;
        }];
        readonly "unicorn/new-for-builtins": "error";
        readonly "unicorn/no-abusive-eslint-disable": "error";
        readonly "unicorn/no-accessor-recursion": "error";
        readonly "unicorn/no-anonymous-default-export": "off";
        readonly "unicorn/no-array-callback-reference": "error";
        readonly "unicorn/no-array-for-each": "error";
        readonly "unicorn/no-array-method-this-argument": "error";
        readonly "unicorn/no-array-reduce": "off";
        readonly "unicorn/no-array-reverse": "error";
        readonly "unicorn/no-array-sort": "error";
        readonly "unicorn/no-await-expression-member": "error";
        readonly "unicorn/no-await-in-promise-methods": "error";
        readonly "unicorn/no-console-spaces": "error";
        readonly "unicorn/no-document-cookie": "error";
        readonly "unicorn/no-empty-file": "error";
        readonly "unicorn/no-hex-escape": "error";
        readonly "unicorn/no-immediate-mutation": "error";
        readonly "unicorn/no-instanceof-array": "error";
        readonly "unicorn/no-instanceof-builtins": ["error", {
            readonly exclude: readonly ["Promise"];
            readonly include: readonly [];
            readonly strategy: "strict";
            readonly useErrorIsError: false;
        }];
        readonly "unicorn/no-invalid-fetch-options": "error";
        readonly "unicorn/no-invalid-remove-event-listener": "error";
        readonly "unicorn/no-length-as-slice-end": "error";
        readonly "unicorn/no-lonely-if": "error";
        readonly "unicorn/no-magic-array-flat-depth": "error";
        readonly "unicorn/no-negation-in-equality-check": "error";
        readonly "unicorn/no-nested-ternary": "error";
        readonly "unicorn/no-new-array": "error";
        readonly "unicorn/no-new-buffer": "error";
        readonly "unicorn/no-null": "off";
        readonly "unicorn/no-object-as-default-parameter": "error";
        readonly "unicorn/no-process-exit": "error";
        readonly "unicorn/no-single-promise-in-promise-methods": "error";
        readonly "unicorn/no-static-only-class": "error";
        readonly "unicorn/no-thenable": "error";
        readonly "unicorn/no-this-assignment": "error";
        readonly "unicorn/no-typeof-undefined": ["error", {
            readonly checkGlobalVariables: true;
        }];
        readonly "unicorn/no-unnecessary-array-flat-depth": "error";
        readonly "unicorn/no-unnecessary-array-splice-count": "error";
        readonly "unicorn/no-unnecessary-await": "error";
        readonly "unicorn/no-unnecessary-slice-end": "error";
        readonly "unicorn/no-unreadable-array-destructuring": "error";
        readonly "unicorn/no-unreadable-iife": "error";
        readonly "unicorn/no-useless-collection-argument": "error";
        readonly "unicorn/no-useless-error-capture-stack-trace": "error";
        readonly "unicorn/no-useless-fallback-in-spread": "error";
        readonly "unicorn/no-useless-length-check": "error";
        readonly "unicorn/no-useless-promise-resolve-reject": ["error", {
            readonly allowReject: false;
        }];
        readonly "unicorn/no-useless-spread": "error";
        readonly "unicorn/no-useless-switch-case": "error";
        readonly "unicorn/no-useless-undefined": ["error", {
            readonly checkArguments: true;
            readonly checkArrowFunctionBody: true;
        }];
        readonly "unicorn/no-zero-fractions": "error";
        readonly "unicorn/number-literal-case": "off";
        readonly "unicorn/numeric-separators-style": ["error", {
            readonly binary: {
                readonly groupLength: 4;
                readonly minimumDigits: 1;
            };
            readonly hexadecimal: {
                readonly groupLength: 4;
                readonly minimumDigits: 1;
            };
            readonly number: {
                readonly groupLength: 3;
                readonly minimumDigits: 7;
            };
            readonly octal: {
                readonly groupLength: 0;
                readonly minimumDigits: number;
            };
            readonly onlyIfContainsSeparator: false;
        }];
        readonly "unicorn/prefer-add-event-listener": "error";
        readonly "unicorn/prefer-array-find": "error";
        readonly "unicorn/prefer-array-flat": "error";
        readonly "unicorn/prefer-array-flat-map": "error";
        readonly "unicorn/prefer-array-index-of": "error";
        readonly "unicorn/prefer-array-some": "error";
        readonly "unicorn/prefer-at": ["error", {
            readonly checkAllIndexAccess: false;
            readonly getLastElementFunctions: readonly [];
        }];
        readonly "unicorn/prefer-bigint-literals": "error";
        readonly "unicorn/prefer-blob-reading-methods": "error";
        readonly "unicorn/prefer-class-fields": "error";
        readonly "unicorn/prefer-classlist-toggle": "error";
        readonly "unicorn/prefer-code-point": "error";
        readonly "unicorn/prefer-date-now": "error";
        readonly "unicorn/prefer-default-parameters": "error";
        readonly "unicorn/prefer-dom-node-append": "error";
        readonly "unicorn/prefer-dom-node-dataset": "error";
        readonly "unicorn/prefer-dom-node-remove": "error";
        readonly "unicorn/prefer-dom-node-text-content": "error";
        readonly "unicorn/prefer-event-target": "error";
        readonly "unicorn/prefer-global-this": "error";
        readonly "unicorn/prefer-includes": "error";
        readonly "unicorn/prefer-keyboard-event-key": "error";
        readonly "unicorn/prefer-logical-operator-over-ternary": "error";
        readonly "unicorn/prefer-math-min-max": "error";
        readonly "unicorn/prefer-math-trunc": "error";
        readonly "unicorn/prefer-modern-dom-apis": "error";
        readonly "unicorn/prefer-modern-math-apis": "error";
        readonly "unicorn/prefer-module": "error";
        readonly "unicorn/prefer-native-coercion-functions": "error";
        readonly "unicorn/prefer-negative-index": "error";
        readonly "unicorn/prefer-node-protocol": "error";
        readonly "unicorn/prefer-number-properties": ["error", {
            readonly checkInfinity: true;
            readonly checkNaN: true;
        }];
        readonly "unicorn/prefer-object-from-entries": ["error", {
            readonly functions: readonly ["_.fromPairs", "lodash.fromPairs"];
        }];
        readonly "unicorn/prefer-optional-catch-binding": "error";
        readonly "unicorn/prefer-prototype-methods": "error";
        readonly "unicorn/prefer-query-selector": "error";
        readonly "unicorn/prefer-reflect-apply": "error";
        readonly "unicorn/prefer-regexp-test": "error";
        readonly "unicorn/prefer-response-static-json": "error";
        readonly "unicorn/prefer-set-has": "error";
        readonly "unicorn/prefer-set-size": "error";
        readonly "unicorn/prefer-spread": "error";
        readonly "unicorn/prefer-string-raw": "error";
        readonly "unicorn/prefer-string-replace-all": "error";
        readonly "unicorn/prefer-string-slice": "error";
        readonly "unicorn/prefer-string-starts-ends-with": "error";
        readonly "unicorn/prefer-string-trim-start-end": "error";
        readonly "unicorn/prefer-structured-clone": ["error", {
            readonly functions: readonly ["cloneDeep", "utils.clone"];
        }];
        readonly "unicorn/prefer-ternary": ["error", "always"];
        readonly "unicorn/prefer-top-level-await": "error";
        readonly "unicorn/prefer-type-error": "error";
        readonly "unicorn/relative-url-style": ["error", "always"];
        readonly "unicorn/require-array-join-separator": "error";
        readonly "unicorn/require-module-attributes": "error";
        readonly "unicorn/require-module-specifiers": "error";
        readonly "unicorn/require-number-to-fixed-digits-argument": "error";
        readonly "unicorn/require-post-message-target-origin": "error";
        readonly "unicorn/switch-case-braces": ["error", "avoid"];
        readonly "unicorn/text-encoding-identifier-case": ["error", {
            readonly withDash: false;
        }];
        readonly "unicorn/throw-new-error": "error";
    };
};
