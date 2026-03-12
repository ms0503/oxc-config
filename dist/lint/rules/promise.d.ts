export declare const promiseRules: {
    rules: {
        'promise/always-return': (string | {
            ignoreAssignmentVariable: string[];
            ignoreLastCallback: boolean;
        })[];
        'promise/avoid-new': "error";
        'promise/catch-or-return': (string | {
            allowFinally: boolean;
            allowThen: boolean;
            terminationMethod: string[];
        })[];
        'promise/no-callback-in-promise': (string | {
            callbacks: string[];
            exceptions: never[];
            timeoutsErr: boolean;
        })[];
        'promise/no-multiple-resolved': "error";
        'promise/no-nesting': "error";
        'promise/no-new-statics': "error";
        'promise/no-promise-in-callback': "error";
        'promise/no-return-in-finally': "error";
        'promise/no-return-wrap': (string | {
            allowReject: boolean;
        })[];
        'promise/param-names': (string | {
            rejectPattern: string;
            resolvePattern: string;
        })[];
        'promise/prefer-await-to-callbacks': "error";
        'promise/prefer-await-to-then': (string | {
            strict: boolean;
        })[];
        'promise/prefer-catch': "error";
        'promise/spec-only': (string | {
            allowedMethods: never[];
        })[];
        'promise/valid-params': "error";
    };
};
