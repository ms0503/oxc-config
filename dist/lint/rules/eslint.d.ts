export declare const eslintRules: {
    readonly rules: {
        readonly "eslint/accessor-pairs": ["error", {
            readonly enforceForClassMembers: true;
            readonly enforceForTSTypes: true;
            readonly getWithoutSet: false;
            readonly setWithoutGet: true;
        }];
        readonly "eslint/array-callback-return": ["error", {
            readonly allowImplicit: true;
            readonly allowVoid: false;
            readonly checkForEach: false;
        }];
        readonly "eslint/arrow-body-style": ["error", "as-needed", {
            readonly requireReturnForObjectLiteral: false;
        }];
        readonly "eslint/block-scoped-var": "error";
        readonly "eslint/capitalized-comments": ["error", "always", {
            readonly block: {
                readonly ignoreConsecutiveComments: true;
                readonly ignoreInlineComments: true;
                readonly ignorePattern: "";
            };
            readonly line: {
                readonly ignoreConsecutiveComments: true;
                readonly ignoreInlineComments: true;
                readonly ignorePattern: "";
            };
        }];
        readonly "eslint/class-methods-use-this": ["error", {
            readonly enforceForClassFields: true;
            readonly exceptMethods: readonly [];
            readonly ignoreClassesWithImplements: null;
            readonly ignoreOverrideMethods: false;
        }];
        readonly "eslint/complexity": "off";
        readonly "eslint/constructor-super": "error";
        readonly "eslint/curly": ["error", "all"];
        readonly "eslint/default-case": ["error", {
            readonly commentPattern: "^checked\\sall\\spatterns";
        }];
        readonly "eslint/default-case-last": "error";
        readonly "eslint/default-param-last": "error";
        readonly "eslint/eqeqeq": ["error", "smart"];
        readonly "eslint/for-direction": "error";
        readonly "eslint/func-names": ["error", "as-needed", {
            readonly generators: null;
        }];
        readonly "eslint/func-style": ["error", "declaration", {
            readonly allowArrowFunctions: true;
            readonly allowTypeAnnotation: true;
            readonly overrides: {
                readonly namedExports: null;
            };
        }];
        readonly "eslint/getter-return": ["error", {
            readonly allowImplicit: true;
        }];
        readonly "eslint/grouped-accessor-pairs": ["error", "getBeforeSet", {
            readonly enforceForTSTypes: true;
        }];
        readonly "eslint/guard-for-in": "error";
        readonly "eslint/id-length": ["error", {
            readonly checkGeneric: true;
            readonly exceptionPatterns: readonly [];
            readonly exceptions: readonly [];
            readonly max: number;
            readonly min: 1;
            readonly properties: "always";
        }];
        readonly "eslint/init-declarations": ["error", "always"];
        readonly "eslint/max-classes-per-file": ["error", {
            readonly ignoreExpressions: false;
            readonly max: 1;
        }];
        readonly "eslint/max-depth": "off";
        readonly "eslint/max-lines": "off";
        readonly "eslint/max-lines-per-function": "off";
        readonly "eslint/max-nested-callbacks": "off";
        readonly "eslint/max-params": "off";
        readonly "eslint/max-statements": "off";
        readonly "eslint/new-cap": ["error", {
            readonly capIsNew: true;
            readonly capIsNewExceptionPattern: "";
            readonly capIsNewExceptions: readonly [];
            readonly newIsCap: true;
            readonly newIsCapExceptionPattern: "";
            readonly newIsCapExceptions: readonly ["BigInt", "Boolean", "Number", "String", "Symbol"];
            readonly properties: true;
        }];
        readonly "eslint/no-alert": "error";
        readonly "eslint/no-array-constructor": "error";
        readonly "eslint/no-async-promise-executor": "error";
        readonly "eslint/no-await-in-loop": "error";
        readonly "eslint/no-bitwise": ["error", {
            readonly allow: readonly [];
            readonly int32Hint: false;
        }];
        readonly "eslint/no-caller": "error";
        readonly "eslint/no-case-declarations": "error";
        readonly "eslint/no-class-assign": "error";
        readonly "eslint/no-compare-neg-zero": "error";
        readonly "eslint/no-cond-assign": ["error", "always"];
        readonly "eslint/no-console": "off";
        readonly "eslint/no-const-assign": "error";
        readonly "eslint/no-constant-binary-expression": "error";
        readonly "eslint/no-constant-condition": ["error", {
            readonly checkLoops: "allExceptWhileTrue";
        }];
        readonly "eslint/no-constructor-return": "error";
        readonly "eslint/no-continue": "error";
        readonly "eslint/no-control-regex": "error";
        readonly "eslint/no-debugger": "error";
        readonly "eslint/no-delete-var": "error";
        readonly "eslint/no-div-regex": "error";
        readonly "eslint/no-dupe-class-members": "error";
        readonly "eslint/no-dupe-else-if": "error";
        readonly "eslint/no-dupe-keys": "error";
        readonly "eslint/no-duplicate-case": "error";
        readonly "eslint/no-duplicate-imports": ["error", {
            readonly allowSeparateTypeImports: true;
            readonly includeExports: false;
        }];
        readonly "eslint/no-else-return": ["error", {
            readonly allowElseIf: false;
        }];
        readonly "eslint/no-empty": ["error", {
            readonly allowEmptyCatch: false;
        }];
        readonly "eslint/no-empty-character-class": "error";
        readonly "eslint/no-empty-function": "error";
        readonly "eslint/no-empty-pattern": "error";
        readonly "eslint/no-empty-static-block": "error";
        readonly "eslint/no-eq-null": "error";
        readonly "eslint/no-eval": ["error", {
            readonly allowIndirect: false;
        }];
        readonly "eslint/no-ex-assign": "error";
        readonly "eslint/no-extend-native": ["error", {
            readonly exceptions: readonly [];
        }];
        readonly "eslint/no-extra-bind": "error";
        readonly "eslint/no-extra-boolean-cast": "error";
        readonly "eslint/no-extra-label": "error";
        readonly "eslint/no-fallthrough": ["error", {
            readonly allowEmptyCase: false;
            readonly commentPattern: null;
            readonly reportUnusedFallthroughComment: false;
        }];
        readonly "eslint/no-func-assign": "error";
        readonly "eslint/no-global-assign": ["error", {
            readonly exceptions: readonly [];
        }];
        readonly "eslint/no-implicit-coercion": ["error", {
            readonly allow: readonly ["!!"];
            readonly boolean: false;
            readonly disallowTemplateShorthand: true;
            readonly number: true;
            readonly string: true;
        }];
        readonly "eslint/no-import-assign": "error";
        readonly "eslint/no-inline-comments": ["error", {
            readonly ignorePattern: null;
        }];
        readonly "eslint/no-inner-declarations": "off";
        readonly "eslint/no-invalid-regexp": ["error", {
            readonly allowConstructorFlags: readonly [];
        }];
        readonly "eslint/no-irregular-whitespace": "error";
        readonly "eslint/no-iterator": "error";
        readonly "eslint/no-label-var": "error";
        readonly "eslint/no-labels": ["error", {
            readonly allowLoop: false;
            readonly allowSwitch: false;
        }];
        readonly "eslint/no-lone-blocks": "error";
        readonly "eslint/no-lonely-if": "error";
        readonly "eslint/no-loop-func": "error";
        readonly "eslint/no-loss-of-precision": "error";
        readonly "eslint/no-magic-numbers": ["error", {
            readonly detectObjects: true;
            readonly enforceConst: true;
            readonly ignore: readonly [100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511, ...number[], 0];
            readonly ignoreArrayIndexes: true;
            readonly ignoreClassFieldInitialValues: false;
            readonly ignoreDefaultValues: true;
            readonly ignoreEnums: false;
            readonly ignoreNumericLiteralTypes: false;
            readonly ignoreReadonlyClassProperties: false;
            readonly ignoreTypeIndexes: true;
        }];
        readonly "eslint/no-misleading-character-class": ["error", {
            readonly allowEscape: false;
        }];
        readonly "eslint/no-multi-assign": ["error", {
            readonly ignoreNonDeclaration: false;
        }];
        readonly "eslint/no-multi-str": "error";
        readonly "eslint/no-negated-condition": "error";
        readonly "eslint/no-nested-ternary": "off";
        readonly "eslint/no-new": "error";
        readonly "eslint/no-new-func": "error";
        readonly "eslint/no-new-native-nonconstructor": "error";
        readonly "eslint/no-new-wrappers": "error";
        readonly "eslint/no-nonoctal-decimal-escape": "error";
        readonly "eslint/no-obj-calls": "error";
        readonly "eslint/no-object-constructor": "error";
        readonly "eslint/no-param-reassign": ["error", {
            readonly ignorePropertyModificationsFor: readonly [];
            readonly ignorePropertyModificationsForRegex: readonly [];
            readonly props: true;
        }];
        readonly "eslint/no-plusplus": "off";
        readonly "eslint/no-promise-executor-return": ["error", {
            readonly allowVoid: false;
        }];
        readonly "eslint/no-proto": "error";
        readonly "eslint/no-prototype-builtins": "error";
        readonly "eslint/no-redeclare": ["error", {
            readonly builtinGlobals: true;
        }];
        readonly "eslint/no-regex-spaces": "error";
        readonly "eslint/no-restricted-globals": ["error", {
            readonly restrictedGlobals: {};
        }];
        readonly "eslint/no-restricted-imports": ["error", {
            readonly paths: readonly [];
            readonly patterns: readonly [];
        }];
        readonly "eslint/no-return-assign": ["error", "always"];
        readonly "eslint/no-script-url": "error";
        readonly "eslint/no-self-assign": ["error", {
            readonly props: true;
        }];
        readonly "eslint/no-self-compare": "error";
        readonly "eslint/no-sequences": ["error", {
            readonly allowInParentheses: false;
        }];
        readonly "eslint/no-setter-return": "error";
        readonly "eslint/no-shadow": "off";
        readonly "eslint/no-shadow-restricted-names": ["error", {
            readonly reportGlobalThis: true;
        }];
        readonly "eslint/no-sparse-arrays": "error";
        readonly "eslint/no-template-curly-in-string": "error";
        readonly "eslint/no-ternary": "off";
        readonly "eslint/no-this-before-super": "error";
        readonly "eslint/no-unassigned-vars": "error";
        readonly "eslint/no-undef": ["error", {
            readonly typeof: true;
        }];
        readonly "eslint/no-undefined": "error";
        readonly "eslint/no-unexpected-multiline": "error";
        readonly "eslint/no-unmodified-loop-condition": "error";
        readonly "eslint/no-unneeded-ternary": ["error", {
            readonly defaultAssignment: false;
        }];
        readonly "eslint/no-unreachable": "error";
        readonly "eslint/no-unsafe-finally": "error";
        readonly "eslint/no-unsafe-negation": ["error", {
            readonly enforceForOrderingRelations: false;
        }];
        readonly "eslint/no-unsafe-optional-chaining": ["error", {
            readonly disallowArithmeticOperators: true;
        }];
        readonly "eslint/no-unused-expressions": ["error", {
            readonly allowShortCircuit: false;
            readonly allowTaggedTemplates: false;
            readonly allowTernary: false;
            readonly enforceForJSX: true;
        }];
        readonly "eslint/no-unused-labels": "error";
        readonly "eslint/no-unused-private-class-members": "error";
        readonly "eslint/no-unused-vars": ["error", {
            readonly args: "all";
            readonly argsIgnorePattern: "^_";
            readonly caughtErrors: "all";
            readonly caughtErrorsIgnorePattern: "^(_|ignore)";
            readonly destructuredArrayIgnorePattern: "^_";
            readonly fix: {
                readonly imports: "fix";
                readonly variables: "fix";
            };
            readonly ignoreClassWithStaticInitBlock: false;
            readonly ignoreRestSiblings: false;
            readonly ignoreUsingDeclarations: false;
            readonly reportUsedIgnorePattern: true;
            readonly reportVarsOnlyUsedAsTypes: true;
            readonly vars: "all";
            readonly varsIgnorePattern: "^_";
        }];
        readonly "eslint/no-use-before-define": ["error", {
            readonly allowNamedExports: false;
            readonly classes: true;
            readonly enums: true;
            readonly functions: false;
            readonly ignoreTypeReferences: true;
            readonly typedefs: false;
            readonly variables: true;
        }];
        readonly "eslint/no-useless-backreference": "error";
        readonly "eslint/no-useless-call": "error";
        readonly "eslint/no-useless-catch": "error";
        readonly "eslint/no-useless-computed-key": ["error", {
            readonly enforceForClassMembers: true;
        }];
        readonly "eslint/no-useless-concat": "error";
        readonly "eslint/no-useless-constructor": "error";
        readonly "eslint/no-useless-escape": ["error", {
            readonly allowRegexCharacters: readonly [];
        }];
        readonly "eslint/no-useless-rename": ["error", {
            readonly ignoreDestructuring: false;
            readonly ignoreExport: false;
            readonly ignoreImport: false;
        }];
        readonly "eslint/no-useless-return": "error";
        readonly "eslint/no-var": "error";
        readonly "eslint/no-void": ["error", {
            readonly allowAsStatement: false;
        }];
        readonly "eslint/no-warning-comments": "off";
        readonly "eslint/no-with": "error";
        readonly "eslint/operator-assignment": ["error", "always"];
        readonly "eslint/prefer-const": ["error", {
            readonly destructuring: "all";
            readonly ignoreReadBeforeAssign: false;
        }];
        readonly "eslint/prefer-destructuring": ["error", {
            readonly AssignmentExpression: {
                readonly array: false;
                readonly object: false;
            };
            readonly VariableDeclarator: {
                readonly array: true;
                readonly object: true;
            };
            readonly enforceForRenamedProperties: true;
        }];
        readonly "eslint/prefer-exponentiation-operator": "error";
        readonly "eslint/prefer-numeric-literals": "error";
        readonly "eslint/prefer-object-has-own": "error";
        readonly "eslint/prefer-object-spread": "error";
        readonly "eslint/prefer-promise-reject-errors": ["error", {
            readonly allowEmptyReject: false;
        }];
        readonly "eslint/prefer-rest-params": "error";
        readonly "eslint/prefer-spread": "error";
        readonly "eslint/prefer-template": "error";
        readonly "eslint/preserve-caught-error": ["error", {
            readonly requireCatchParameter: false;
        }];
        readonly "eslint/radix": "error";
        readonly "eslint/require-await": "off";
        readonly "eslint/require-yield": "error";
        readonly "eslint/sort-imports": "off";
        readonly "eslint/sort-keys": ["error", "asc", {
            readonly allowLineSeparatedGroups: false;
            readonly caseSensitive: true;
            readonly minKeys: 1;
            readonly natural: false;
        }];
        readonly "eslint/sort-vars": ["error", {
            readonly ignoreCase: false;
        }];
        readonly "eslint/symbol-description": "error";
        readonly "eslint/unicode-bom": ["error", "never"];
        readonly "eslint/use-isnan": ["error", {
            readonly enforceForIndexOf: true;
            readonly enforceForSwitchCase: true;
        }];
        readonly "eslint/valid-typeof": ["error", {
            readonly requireStringLiterals: true;
        }];
        readonly "eslint/vars-on-top": "error";
        readonly "eslint/yoda": ["error", "never", {
            readonly exceptRange: true;
            readonly onlyEquality: false;
        }];
    };
};
