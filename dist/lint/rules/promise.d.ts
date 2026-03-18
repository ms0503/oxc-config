export declare const promiseRules: {
    readonly rules: {
        readonly "promise/always-return": ["error", {
            readonly ignoreAssignmentVariable: readonly ["global", "globalThis", "window"];
            readonly ignoreLastCallback: true;
        }];
        readonly "promise/avoid-new": "error";
        readonly "promise/catch-or-return": ["error", {
            readonly allowFinally: true;
            readonly allowThen: false;
            readonly terminationMethod: readonly ["catch", "finally"];
        }];
        readonly "promise/no-callback-in-promise": ["error", {
            readonly callbacks: readonly ["callback", "cb", "done", "next"];
            readonly exceptions: readonly [];
            readonly timeoutsErr: false;
        }];
        readonly "promise/no-multiple-resolved": "error";
        readonly "promise/no-nesting": "error";
        readonly "promise/no-new-statics": "error";
        readonly "promise/no-promise-in-callback": "error";
        readonly "promise/no-return-in-finally": "error";
        readonly "promise/no-return-wrap": ["error", {
            readonly allowReject: false;
        }];
        readonly "promise/param-names": ["error", {
            readonly rejectPattern: "^_?reject$";
            readonly resolvePattern: "^_?resolve$";
        }];
        readonly "promise/prefer-await-to-callbacks": "error";
        readonly "promise/prefer-await-to-then": ["error", {
            readonly strict: false;
        }];
        readonly "promise/prefer-catch": "error";
        readonly "promise/spec-only": ["error", {
            readonly allowedMethods: readonly [];
        }];
        readonly "promise/valid-params": "error";
    };
};
