export declare const coreRules: {
    readonly extends: [{
        readonly rules: {
            readonly 'eslint/accessor-pairs': ["error", {
                readonly enforceForClassMembers: true;
                readonly enforceForTSTypes: true;
                readonly getWithoutSet: false;
                readonly setWithoutGet: true;
            }];
            readonly 'eslint/array-callback-return': ["error", {
                readonly allowImplicit: true;
                readonly allowVoid: false;
                readonly checkForEach: false;
            }];
            readonly 'eslint/arrow-body-style': ["error", "as-needed", {
                readonly requireReturnForObjectLiteral: false;
            }];
            readonly 'eslint/block-scoped-var': "error";
            readonly 'eslint/capitalized-comments': ["error", "always", {
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
            readonly 'eslint/class-methods-use-this': ["error", {
                readonly enforceForClassFields: true;
                readonly exceptMethods: readonly [];
                readonly ignoreClassesWithImplements: null;
                readonly ignoreOverrideMethods: false;
            }];
            readonly 'eslint/complexity': "off";
            readonly 'eslint/constructor-super': "error";
            readonly 'eslint/curly': ["error", "all"];
            readonly 'eslint/default-case': ["error", {
                readonly commentPattern: "^checked\\sall\\spatterns";
            }];
            readonly 'eslint/default-case-last': "error";
            readonly 'eslint/default-param-last': "error";
            readonly 'eslint/eqeqeq': ["error", "smart"];
            readonly 'eslint/for-direction': "error";
            readonly 'eslint/func-names': ["error", "as-needed", {
                readonly generators: null;
            }];
            readonly 'eslint/func-style': ["error", "declaration", {
                readonly allowArrowFunctions: true;
                readonly allowTypeAnnotation: true;
                readonly overrides: {
                    readonly namedExports: null;
                };
            }];
            readonly 'eslint/getter-return': ["error", {
                readonly allowImplicit: true;
            }];
            readonly 'eslint/grouped-accessor-pairs': ["error", "getBeforeSet", {
                readonly enforceForTSTypes: true;
            }];
            readonly 'eslint/guard-for-in': "error";
            readonly 'eslint/id-length': ["error", {
                readonly checkGeneric: true;
                readonly exceptionPatterns: readonly [];
                readonly exceptions: readonly [];
                readonly max: number;
                readonly min: 1;
                readonly properties: "always";
            }];
            readonly 'eslint/init-declarations': ["error", "always"];
            readonly 'eslint/max-classes-per-file': ["error", {
                readonly ignoreExpressions: false;
                readonly max: 1;
            }];
            readonly 'eslint/max-depth': "off";
            readonly 'eslint/max-lines': "off";
            readonly 'eslint/max-lines-per-function': "off";
            readonly 'eslint/max-nested-callbacks': "off";
            readonly 'eslint/max-params': "off";
            readonly 'eslint/max-statements': "off";
            readonly 'eslint/new-cap': ["error", {
                readonly capIsNew: true;
                readonly capIsNewExceptionPattern: "";
                readonly capIsNewExceptions: readonly [];
                readonly newIsCap: true;
                readonly newIsCapExceptionPattern: "";
                readonly newIsCapExceptions: readonly ["BigInt", "Boolean", "Number", "String", "Symbol"];
                readonly properties: true;
            }];
            readonly 'eslint/no-alert': "error";
            readonly 'eslint/no-array-constructor': "error";
            readonly 'eslint/no-async-promise-executor': "error";
            readonly 'eslint/no-await-in-loop': "error";
            readonly 'eslint/no-bitwise': ["error", {
                readonly allow: readonly [];
                readonly int32Hint: false;
            }];
            readonly 'eslint/no-caller': "error";
            readonly 'eslint/no-case-declarations': "error";
            readonly 'eslint/no-class-assign': "error";
            readonly 'eslint/no-compare-neg-zero': "error";
            readonly 'eslint/no-cond-assign': ["error", "always"];
            readonly 'eslint/no-console': "off";
            readonly 'eslint/no-const-assign': "error";
            readonly 'eslint/no-constant-binary-expression': "error";
            readonly 'eslint/no-constant-condition': ["error", {
                readonly checkLoops: "allExceptWhileTrue";
            }];
            readonly 'eslint/no-constructor-return': "error";
            readonly 'eslint/no-continue': "error";
            readonly 'eslint/no-control-regex': "error";
            readonly 'eslint/no-debugger': "error";
            readonly 'eslint/no-delete-var': "error";
            readonly 'eslint/no-div-regex': "error";
            readonly 'eslint/no-dupe-class-members': "error";
            readonly 'eslint/no-dupe-else-if': "error";
            readonly 'eslint/no-dupe-keys': "error";
            readonly 'eslint/no-duplicate-case': "error";
            readonly 'eslint/no-duplicate-imports': ["error", {
                readonly allowSeparateTypeImports: true;
                readonly includeExports: false;
            }];
            readonly 'eslint/no-else-return': ["error", {
                readonly allowElseIf: false;
            }];
            readonly 'eslint/no-empty': ["error", {
                readonly allowEmptyCatch: false;
            }];
            readonly 'eslint/no-empty-character-class': "error";
            readonly 'eslint/no-empty-function': "error";
            readonly 'eslint/no-empty-pattern': "error";
            readonly 'eslint/no-empty-static-block': "error";
            readonly 'eslint/no-eq-null': "error";
            readonly 'eslint/no-eval': ["error", {
                readonly allowIndirect: false;
            }];
            readonly 'eslint/no-ex-assign': "error";
            readonly 'eslint/no-extend-native': ["error", {
                readonly exceptions: readonly [];
            }];
            readonly 'eslint/no-extra-bind': "error";
            readonly 'eslint/no-extra-boolean-cast': "error";
            readonly 'eslint/no-extra-label': "error";
            readonly 'eslint/no-fallthrough': ["error", {
                readonly allowEmptyCase: false;
                readonly commentPattern: null;
                readonly reportUnusedFallthroughComment: false;
            }];
            readonly 'eslint/no-func-assign': "error";
            readonly 'eslint/no-global-assign': ["error", {
                readonly exceptions: readonly [];
            }];
            readonly 'eslint/no-implicit-coercion': ["error", {
                readonly allow: readonly ["!!"];
                readonly boolean: false;
                readonly disallowTemplateShorthand: true;
                readonly number: true;
                readonly string: true;
            }];
            readonly 'eslint/no-import-assign': "error";
            readonly 'eslint/no-inline-comments': ["error", {
                readonly ignorePattern: null;
            }];
            readonly 'eslint/no-inner-declarations': "off";
            readonly 'eslint/no-invalid-regexp': ["error", {
                readonly allowConstructorFlags: readonly [];
            }];
            readonly 'eslint/no-irregular-whitespace': "error";
            readonly 'eslint/no-iterator': "error";
            readonly 'eslint/no-label-var': "error";
            readonly 'eslint/no-labels': ["error", {
                readonly allowLoop: false;
                readonly allowSwitch: false;
            }];
            readonly 'eslint/no-lone-blocks': "error";
            readonly 'eslint/no-lonely-if': "error";
            readonly 'eslint/no-loop-func': "error";
            readonly 'eslint/no-loss-of-precision': "error";
            readonly 'eslint/no-magic-numbers': ["error", {
                readonly detectObjects: true;
                readonly enforceConst: true;
                readonly ignore: readonly [0, ...number[]];
                readonly ignoreArrayIndexes: true;
                readonly ignoreClassFieldInitialValues: false;
                readonly ignoreDefaultValues: true;
                readonly ignoreEnums: false;
                readonly ignoreNumericLiteralTypes: false;
                readonly ignoreReadonlyClassProperties: false;
                readonly ignoreTypeIndexes: true;
            }];
            readonly 'eslint/no-misleading-character-class': ["error", {
                readonly allowEscape: false;
            }];
            readonly 'eslint/no-multi-assign': ["error", {
                readonly ignoreNonDeclaration: false;
            }];
            readonly 'eslint/no-multi-str': "error";
            readonly 'eslint/no-negated-condition': "error";
            readonly 'eslint/no-nested-ternary': "error";
            readonly 'eslint/no-new': "error";
            readonly 'eslint/no-new-func': "error";
            readonly 'eslint/no-new-native-nonconstructor': "error";
            readonly 'eslint/no-new-wrappers': "error";
            readonly 'eslint/no-nonoctal-decimal-escape': "error";
            readonly 'eslint/no-obj-calls': "error";
            readonly 'eslint/no-object-constructor': "error";
            readonly 'eslint/no-param-reassign': ["error", {
                readonly ignorePropertyModificationsFor: readonly [];
                readonly ignorePropertyModificationsForRegex: readonly [];
                readonly props: true;
            }];
            readonly 'eslint/no-plusplus': "off";
            readonly 'eslint/no-promise-executor-return': ["error", {
                readonly allowVoid: false;
            }];
            readonly 'eslint/no-proto': "error";
            readonly 'eslint/no-prototype-builtins': "error";
            readonly 'eslint/no-redeclare': ["error", {
                readonly builtinGlobals: true;
            }];
            readonly 'eslint/no-regex-spaces': "error";
            readonly 'eslint/no-restricted-globals': ["error", {
                readonly restrictedGlobals: {};
            }];
            readonly 'eslint/no-restricted-imports': ["error", {
                readonly paths: readonly [];
                readonly patterns: readonly [];
            }];
            readonly 'eslint/no-return-assign': ["error", "always"];
            readonly 'eslint/no-script-url': "error";
            readonly 'eslint/no-self-assign': ["error", {
                readonly props: true;
            }];
            readonly 'eslint/no-self-compare': "error";
            readonly 'eslint/no-sequences': ["error", {
                readonly allowInParentheses: false;
            }];
            readonly 'eslint/no-setter-return': "error";
            readonly 'eslint/no-shadow': "off";
            readonly 'eslint/no-shadow-restricted-names': ["error", {
                readonly reportGlobalThis: true;
            }];
            readonly 'eslint/no-sparse-arrays': "error";
            readonly 'eslint/no-template-curly-in-string': "error";
            readonly 'eslint/no-ternary': "off";
            readonly 'eslint/no-this-before-super': "error";
            readonly 'eslint/no-unassigned-vars': "error";
            readonly 'eslint/no-undef': ["error", {
                readonly typeof: true;
            }];
            readonly 'eslint/no-undefined': "error";
            readonly 'eslint/no-unexpected-multiline': "error";
            readonly 'eslint/no-unmodified-loop-condition': "error";
            readonly 'eslint/no-unneeded-ternary': ["error", {
                readonly defaultAssignment: false;
            }];
            readonly 'eslint/no-unreachable': "error";
            readonly 'eslint/no-unsafe-finally': "error";
            readonly 'eslint/no-unsafe-negation': ["error", {
                readonly enforceForOrderingRelations: false;
            }];
            readonly 'eslint/no-unsafe-optional-chaining': ["error", {
                readonly disallowArithmeticOperators: true;
            }];
            readonly 'eslint/no-unused-expressions': ["error", {
                readonly allowShortCircuit: false;
                readonly allowTaggedTemplates: false;
                readonly allowTernary: false;
                readonly enforceForJSX: true;
            }];
            readonly 'eslint/no-unused-labels': "error";
            readonly 'eslint/no-unused-private-class-members': "error";
            readonly 'eslint/no-unused-vars': ["error", {
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
            readonly 'eslint/no-use-before-define': ["error", {
                readonly allowNamedExports: false;
                readonly classes: true;
                readonly enums: true;
                readonly functions: false;
                readonly ignoreTypeReferences: true;
                readonly typedefs: false;
                readonly variables: true;
            }];
            readonly 'eslint/no-useless-backreference': "error";
            readonly 'eslint/no-useless-call': "error";
            readonly 'eslint/no-useless-catch': "error";
            readonly 'eslint/no-useless-computed-key': ["error", {
                readonly enforceForClassMembers: true;
            }];
            readonly 'eslint/no-useless-concat': "error";
            readonly 'eslint/no-useless-constructor': "error";
            readonly 'eslint/no-useless-escape': ["error", {
                readonly allowRegexCharacters: readonly [];
            }];
            readonly 'eslint/no-useless-rename': ["error", {
                readonly ignoreDestructuring: false;
                readonly ignoreExport: false;
                readonly ignoreImport: false;
            }];
            readonly 'eslint/no-useless-return': "error";
            readonly 'eslint/no-var': "error";
            readonly 'eslint/no-void': ["error", {
                readonly allowAsStatement: false;
            }];
            readonly 'eslint/no-warning-comments': "off";
            readonly 'eslint/no-with': "error";
            readonly 'eslint/operator-assignment': ["error", "always"];
            readonly 'eslint/prefer-const': ["error", {
                readonly destructuring: "all";
                readonly ignoreReadBeforeAssign: false;
            }];
            readonly 'eslint/prefer-destructuring': ["error", {
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
            readonly 'eslint/prefer-exponentiation-operator': "error";
            readonly 'eslint/prefer-numeric-literals': "error";
            readonly 'eslint/prefer-object-has-own': "error";
            readonly 'eslint/prefer-object-spread': "error";
            readonly 'eslint/prefer-promise-reject-errors': ["error", {
                readonly allowEmptyReject: false;
            }];
            readonly 'eslint/prefer-rest-params': "error";
            readonly 'eslint/prefer-spread': "error";
            readonly 'eslint/prefer-template': "error";
            readonly 'eslint/preserve-caught-error': ["error", {
                readonly requireCatchParameter: false;
            }];
            readonly 'eslint/radix': "error";
            readonly 'eslint/require-await': "off";
            readonly 'eslint/require-yield': "error";
            readonly 'eslint/sort-imports': "off";
            readonly 'eslint/sort-keys': ["error", "asc", {
                readonly allowLineSeparatedGroups: false;
                readonly caseSensitive: true;
                readonly minKeys: 1;
                readonly natural: false;
            }];
            readonly 'eslint/sort-vars': ["error", {
                readonly ignoreCase: false;
            }];
            readonly 'eslint/symbol-description': "error";
            readonly 'eslint/unicode-bom': ["error", "never"];
            readonly 'eslint/use-isnan': ["error", {
                readonly enforceForIndexOf: true;
                readonly enforceForSwitchCase: true;
            }];
            readonly 'eslint/valid-typeof': ["error", {
                readonly requireStringLiterals: true;
            }];
            readonly 'eslint/vars-on-top': "error";
            readonly 'eslint/yoda': ["error", "never", {
                readonly exceptRange: true;
                readonly onlyEquality: false;
            }];
        };
    }, {
        readonly overrides: [{
            readonly files: ["*.config.cjs", "*.config.js", "*.config.mjs", "*.config.ts"];
            readonly rules: {
                readonly 'import/no-default-export': "off";
            };
        }];
        readonly rules: {
            readonly 'import/consistent-type-specifier-style': ["error", "prefer-top-level"];
            readonly 'import/default': "error";
            readonly 'import/export': "error";
            readonly 'import/exports-last': "off";
            readonly 'import/extensions': ["error", "never", {
                readonly checkTypeImports: true;
                readonly ignorePackages: false;
                readonly pathGroupOverrides: readonly [];
            }];
            readonly 'import/first': ["error", "disable-absolute-first"];
            readonly 'import/group-exports': "off";
            readonly 'import/max-dependencies': "off";
            readonly 'import/named': "error";
            readonly 'import/namespace': ["error", {
                readonly allowComputed: true;
            }];
            readonly 'import/no-absolute-path': ["error", {
                readonly amd: false;
                readonly commonjs: true;
                readonly esmodule: true;
            }];
            readonly 'import/no-amd': "error";
            readonly 'import/no-anonymous-default-export': ["error", {
                readonly allowAnonymousClass: false;
                readonly allowAnonymousFunction: false;
                readonly allowArray: true;
                readonly allowArrowFunction: false;
                readonly allowCallExpression: true;
                readonly allowLiteral: false;
                readonly allowNew: false;
                readonly allowObject: true;
            }];
            readonly 'import/no-commonjs': "error";
            readonly 'import/no-cycle': ["error", {
                readonly allowUnsafeDynamicCyclicDependency: false;
                readonly ignoreExternal: false;
                readonly ignoreTypes: true;
                readonly maxDepth: number;
            }];
            readonly 'import/no-default-export': "error";
            readonly 'import/no-duplicates': ["error", {
                readonly considerQueryString: true;
                readonly preferInline: false;
            }];
            readonly 'import/no-dynamic-require': ["error", {
                readonly esmodule: false;
            }];
            readonly 'import/no-empty-named-blocks': "error";
            readonly 'import/no-mutable-exports': "error";
            readonly 'import/no-named-as-default': "error";
            readonly 'import/no-named-as-default-member': "error";
            readonly 'import/no-named-default': "error";
            readonly 'import/no-named-export': "off";
            readonly 'import/no-namespace': ["error", {
                readonly ignore: readonly [];
            }];
            readonly 'import/no-nodejs-modules': "off";
            readonly 'import/no-relative-parent-imports': "error";
            readonly 'import/no-self-import': "error";
            readonly 'import/no-unassigned-import': "off";
            readonly 'import/no-webpack-loader-syntax': "error";
            readonly 'import/prefer-default-export': "off";
            readonly 'import/unambiguous': "error";
        };
    }, {
        readonly rules: {
            readonly 'node/global-require': "error";
            readonly 'node/no-exports-assign': "error";
            readonly 'node/no-new-require': "error";
            readonly 'node/no-path-concat': "error";
            readonly 'node/no-process-env': "off";
        };
    }, {
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
    }, {
        readonly rules: {
            readonly 'perfectionist/sort-array-includes': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly ["literal"];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-classes': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly ["index-signature", {
                    readonly newlinesBetween: 1;
                }, readonly ["static-readonly-accessor-property", "static-readonly-property"], readonly ["protected-static-readonly-accessor-property", "protected-static-readonly-property"], readonly ["private-static-readonly-accessor-property", "private-static-readonly-property"], {
                    readonly newlinesBetween: 1;
                }, readonly ["static-accessor-property", "static-property"], readonly ["protected-static-accessor-property", "protected-static-property"], readonly ["private-static-accessor-property", "private-static-property"], {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: readonly ["static-get-method", "static-set-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["protected-static-get-method", "protected-static-set-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["private-static-get-method", "private-static-set-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly newlinesBetween: 1;
                }, "static-block", {
                    readonly newlinesBetween: 1;
                }, readonly ["accessor-property", "property"], readonly ["protected-accessor-property", "protected-property"], readonly ["private-accessor-property", "private-property"], {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: readonly ["get-method", "set-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["protected-get-method", "protected-set-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["private-get-method", "private-set-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: "constructor";
                    readonly newlinesInside: 1;
                }, {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: readonly ["static-function-property", "static-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["protected-static-function-property", "protected-static-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["private-static-function-property", "private-static-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["function-property", "method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["protected-function-property", "protected-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly group: readonly ["private-function-property", "private-method"];
                    readonly newlinesInside: 1;
                }, {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: "unknown";
                    readonly newlinesInside: 1;
                }];
                readonly ignoreCallbackDependenciesPatterns: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
                readonly useExperimentalDependencyDetection: true;
            }];
            readonly 'perfectionist/sort-decorators': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly sortOnAccessors: true;
                readonly sortOnClasses: true;
                readonly sortOnMethods: true;
                readonly sortOnParameters: true;
                readonly sortOnProperties: true;
            }];
            readonly 'perfectionist/sort-enums': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly sortByValue: "never";
                readonly useConfigurationIf: {};
                readonly useExperimentalDependencyDetection: true;
            }];
            readonly 'perfectionist/sort-export-attributes': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-exports': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
            }];
            readonly 'perfectionist/sort-heritage-clauses': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-import-attributes': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-imports': "off";
            readonly 'perfectionist/sort-interfaces': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly ["index-signature", {
                    readonly newlinesBetween: 1;
                }, "property", {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: "method";
                    readonly newlinesInside: 1;
                }, {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: "unknown";
                    readonly newlinesInside: 1;
                }];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly sortBy: "name";
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-intersection-types': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-jsx-props': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-maps': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-modules': "off";
            readonly 'perfectionist/sort-named-exports': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly ignoreAlias: false;
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-named-imports': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly ["value-import", "type-import", {
                    readonly newlinesBetween: 1;
                }, "unknown"];
                readonly ignoreAlias: false;
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-object-types': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly ["index-signature", {
                    readonly newlinesBetween: 1;
                }, "property", {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: "method";
                    readonly newlinesInside: 1;
                }, {
                    readonly newlinesBetween: 1;
                }, {
                    readonly group: "unknown";
                    readonly newlinesInside: 1;
                }];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly sortBy: "name";
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-objects': "off";
            readonly 'perfectionist/sort-sets': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly ["literal"];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-switch-case': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
            }];
            readonly 'perfectionist/sort-union-types': ["error", {
                readonly fallbackSort: {
                    readonly type: "unsorted";
                };
                readonly ignoreCase: false;
                readonly locales: "en-US";
                readonly order: "asc";
                readonly specialCharacters: "keep";
                readonly type: "alphabetical";
                readonly customGroups: readonly [];
                readonly groups: readonly [];
                readonly newlinesBetween: 0;
                readonly newlinesInside: 0;
                readonly partitionByComment: false;
                readonly partitionByNewLine: false;
                readonly useConfigurationIf: {};
            }];
            readonly 'perfectionist/sort-variable-declarations': "off";
        };
    }, {
        readonly rules: {
            readonly 'promise/always-return': ["error", {
                readonly ignoreAssignmentVariable: readonly ["global", "globalThis", "window"];
                readonly ignoreLastCallback: true;
            }];
            readonly 'promise/avoid-new': "error";
            readonly 'promise/catch-or-return': ["error", {
                readonly allowFinally: true;
                readonly allowThen: false;
                readonly terminationMethod: readonly ["catch", "finally"];
            }];
            readonly 'promise/no-callback-in-promise': ["error", {
                readonly callbacks: readonly ["callback", "cb", "done", "next"];
                readonly exceptions: readonly [];
                readonly timeoutsErr: false;
            }];
            readonly 'promise/no-multiple-resolved': "error";
            readonly 'promise/no-nesting': "error";
            readonly 'promise/no-new-statics': "error";
            readonly 'promise/no-promise-in-callback': "error";
            readonly 'promise/no-return-in-finally': "error";
            readonly 'promise/no-return-wrap': ["error", {
                readonly allowReject: false;
            }];
            readonly 'promise/param-names': ["error", {
                readonly rejectPattern: "^_?reject$";
                readonly resolvePattern: "^_?resolve$";
            }];
            readonly 'promise/prefer-await-to-callbacks': "error";
            readonly 'promise/prefer-await-to-then': ["error", {
                readonly strict: false;
            }];
            readonly 'promise/prefer-catch': "error";
            readonly 'promise/spec-only': ["error", {
                readonly allowedMethods: readonly [];
            }];
            readonly 'promise/valid-params': "error";
        };
    }, {
        readonly rules: {
            readonly "typescript/adjacent-overload-signatures": "error";
            readonly "typescript/array-type": ["error", {
                readonly default: "generic";
                readonly readonly: "generic";
            }];
            readonly "typescript/await-thenable": "error";
            readonly "typescript/ban-ts-comment": ["error", {
                readonly minimumDescriptionLength: 1;
                readonly "ts-check": false;
                readonly "ts-expect-error": "allow-with-description";
                readonly "ts-ignore": true;
                readonly "ts-nocheck": "allow-with-description";
            }];
            readonly "typescript/ban-tslint-comment": "error";
            readonly "typescript/class-literal-property-style": ["error", "fields"];
            readonly "typescript/consistent-generic-constructors": ["error", {
                readonly option: "constructor";
            }];
            readonly "typescript/consistent-indexed-object-style": ["error", "record"];
            readonly "typescript/consistent-return": ["error", {
                readonly treatUndefinedAsUnspecified: false;
            }];
            readonly "typescript/consistent-type-assertions": ["error", {
                readonly assertionStyle: "never";
            }];
            readonly "typescript/consistent-type-definitions": ["error", "interface"];
            readonly "typescript/consistent-type-exports": ["error", {
                readonly fixMixedExportsWithInlineTypeSpecifier: false;
            }];
            readonly "typescript/consistent-type-imports": ["error", {
                readonly disallowTypeAnnotations: true;
                readonly fixStyle: "separate-type-imports";
                readonly prefer: "type-imports";
            }];
            readonly "typescript/dot-notation": ["error", {
                readonly allowIndexSignaturePropertyAccess: false;
                readonly allowKeywords: true;
                readonly allowPattern: "";
                readonly allowPrivateClassPropertyAccess: false;
                readonly allowProtectedClassPropertyAccess: false;
            }];
            readonly "typescript/explicit-function-return-type": ["error", {
                readonly allowConciseArrowFunctionExpressionsStartingWithVoid: false;
                readonly allowDirectConstAssertionInArrowFunctions: true;
                readonly allowExpressions: true;
                readonly allowFunctionsWithoutTypeParameters: true;
                readonly allowHigherOrderFunctions: true;
                readonly allowIIFEs: true;
                readonly allowTypedFunctionExpressions: true;
                readonly allowedNames: readonly [];
            }];
            readonly "typescript/explicit-module-boundary-types": ["error", {
                readonly allowArgumentsExplicitlyTypedAsAny: false;
                readonly allowDirectConstAssertionInArrowFunctions: true;
                readonly allowHigherOrderFunctions: true;
                readonly allowOverloadFunctions: false;
                readonly allowTypedFunctionExpressions: true;
                readonly allowedNames: readonly [];
            }];
            readonly "typescript/no-array-delete": "error";
            readonly "typescript/no-base-to-string": ["error", {
                readonly checkUnknown: false;
                readonly ignoredTypeNames: readonly ["Error", "RegExp", "URL", "URLSearchParams"];
            }];
            readonly "typescript/no-confusing-non-null-assertion": "error";
            readonly "typescript/no-confusing-void-expression": ["error", {
                readonly ignoreArrowShorthand: false;
                readonly ignoreVoidOperator: false;
                readonly ignoreVoidReturningFunctions: false;
            }];
            readonly "typescript/no-deprecated": ["error", {
                readonly allow: readonly [];
            }];
            readonly "typescript/no-duplicate-enum-values": "error";
            readonly "typescript/no-duplicate-type-constituents": ["error", {
                readonly ignoreIntersections: false;
                readonly ignoreUnions: false;
            }];
            readonly "typescript/no-dynamic-delete": "error";
            readonly "typescript/no-empty-interface": ["error", {
                readonly allowSingleExtends: true;
            }];
            readonly "typescript/no-empty-object-type": ["error", {
                readonly allowInterfaces: "with-single-extends";
                readonly allowObjectTypes: "never";
                readonly allowWithName: "Props$";
            }];
            readonly "typescript/no-explicit-any": ["error", {
                readonly fixToUnknown: true;
                readonly ignoreRestArgs: false;
            }];
            readonly "typescript/no-extra-non-null-assertion": "error";
            readonly "typescript/no-extraneous-class": ["error", {
                readonly allowConstructorOnly: false;
                readonly allowEmpty: false;
                readonly allowStaticOnly: false;
                readonly allowWithDecorator: false;
            }];
            readonly "typescript/no-floating-promises": ["error", {
                readonly allowForKnownSafeCalls: readonly [];
                readonly allowForKnownSafePromises: readonly [];
                readonly checkThenables: true;
                readonly ignoreIIFE: false;
                readonly ignoreVoid: false;
            }];
            readonly "typescript/no-for-in-array": "error";
            readonly "typescript/no-implied-eval": "error";
            readonly "typescript/no-import-type-side-effects": "error";
            readonly "typescript/no-inferrable-types": ["error", {
                readonly ignoreParameters: false;
                readonly ignoreProperties: false;
            }];
            readonly "typescript/no-invalid-void-type": ["error", {
                readonly allowAsThisParameter: false;
                readonly allowInGenericTypeArguments: true;
            }];
            readonly "typescript/no-meaningless-void-operator": ["error", {
                readonly checkNever: true;
            }];
            readonly "typescript/no-misused-new": "error";
            readonly "typescript/no-misused-promises": ["error", {
                readonly checksConditionals: true;
                readonly checksSpreads: true;
                readonly checksVoidReturn: {
                    readonly arguments: true;
                    readonly attributes: true;
                    readonly inheritedMethods: true;
                    readonly properties: true;
                    readonly returns: true;
                    readonly variables: true;
                };
            }];
            readonly "typescript/no-misused-spread": ["error", {
                readonly allow: readonly [];
            }];
            readonly "typescript/no-mixed-enums": "error";
            readonly "typescript/no-namespace": ["error", {
                readonly allowDeclarations: false;
                readonly allowDefinitionFiles: false;
            }];
            readonly "typescript/no-non-null-asserted-nullish-coalescing": "error";
            readonly "typescript/no-non-null-asserted-optional-chain": "error";
            readonly "typescript/no-non-null-assertion": "off";
            readonly "typescript/no-redundant-type-constituents": "error";
            readonly "typescript/no-require-imports": ["error", {
                readonly allow: readonly [];
                readonly allowAsImport: false;
            }];
            readonly "typescript/no-restricted-types": ["error", {
                readonly types: {};
            }];
            readonly "typescript/no-this-alias": ["error", {
                readonly allowDestructuring: false;
                readonly allowedNames: readonly [];
            }];
            readonly "typescript/no-unnecessary-boolean-literal-compare": ["error", {
                readonly allowComparingNullableBooleansToFalse: true;
                readonly allowComparingNullableBooleansToTrue: true;
            }];
            readonly "typescript/no-unnecessary-condition": ["error", {
                readonly allowConstantLoopConditions: "only-allowed-literals";
                readonly checkTypePredicates: true;
            }];
            readonly "typescript/no-unnecessary-parameter-property-assignment": "error";
            readonly "typescript/no-unnecessary-qualifier": "error";
            readonly "typescript/no-unnecessary-template-expression": "error";
            readonly "typescript/no-unnecessary-type-arguments": "error";
            readonly "typescript/no-unnecessary-type-assertion": ["error", {
                readonly checkLiteralConstAssertions: true;
                readonly typesToIgnore: readonly [];
            }];
            readonly "typescript/no-unnecessary-type-constraint": "error";
            readonly "typescript/no-unnecessary-type-convertion": "error";
            readonly "typescript/no-unnecessary-type-parameters": "error";
            readonly "typescript/no-unsafe-argument": "error";
            readonly "typescript/no-unsafe-assignment": "error";
            readonly "typescript/no-unsafe-call": "error";
            readonly "typescript/no-unsafe-declaration-merging": "error";
            readonly "typescript/no-unsafe-enum-comparison": "error";
            readonly "typescript/no-unsafe-function-type": "error";
            readonly "typescript/no-unsafe-member-access": ["error", {
                readonly allowOptionalChaining: false;
            }];
            readonly "typescript/no-unsafe-return": "error";
            readonly "typescript/no-unsafe-type-assertion": "error";
            readonly "typescript/no-unsafe-unary-minus": "error";
            readonly "typescript/no-useless-default-assignment": "error";
            readonly "typescript/no-useless-empty-export": "error";
            readonly "typescript/no-var-requires": "error";
            readonly "typescript/no-wrapper-object-types": "error";
            readonly "typescript/non-nullable-type-assertion-style": "error";
            readonly "typescript/only-throw-error": ["error", {
                readonly allow: readonly [{
                    readonly from: "lib";
                    readonly name: "Response";
                }];
                readonly allowRethrowing: true;
                readonly allowThrowingAny: true;
                readonly allowThrowingUnknown: true;
            }];
            readonly "typescript/parameter-properties": ["error", {
                readonly allow: readonly [];
                readonly prefer: "class-property";
            }];
            readonly "typescript/prefer-as-const": "error";
            readonly "typescript/prefer-enum-initializers": "error";
            readonly "typescript/prefer-find": "error";
            readonly "typescript/prefer-for-of": "error";
            readonly "typescript/prefer-function-type": "error";
            readonly "typescript/prefer-includes": "error";
            readonly "typescript/prefer-literal-enum-member": ["error", {
                readonly allowBitwiseExpressions: true;
            }];
            readonly "typescript/prefer-nullish-coalescing": ["error", {
                readonly ignoreBooleanCoercion: false;
                readonly ignoreConditionalTests: false;
                readonly ignoreIfStatements: false;
                readonly ignoreMixedLogicalExpressions: false;
                readonly ignorePrimitives: {
                    readonly bigint: false;
                    readonly boolean: false;
                    readonly number: false;
                    readonly string: false;
                };
                readonly ignoreTernaryTests: false;
            }];
            readonly "typescript/prefer-optional-chain": ["error", {
                readonly allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: true;
                readonly checkAny: true;
                readonly checkBigInt: true;
                readonly checkBoolean: true;
                readonly checkNumber: true;
                readonly checkString: true;
                readonly checkUnknown: true;
                readonly requireNullish: true;
            }];
            readonly "typescript/prefer-promise-reject-errors": ["error", {
                readonly allowEmptyReject: false;
                readonly allowThrowingAny: false;
                readonly allowThrowingUnknown: false;
            }];
            readonly "typescript/prefer-readonly": ["error", {
                readonly onlyInlineLambdas: false;
            }];
            readonly "typescript/prefer-readonly-parameter-types": "off";
            readonly "typescript/prefer-reduce-type-parameter": "error";
            readonly "typescript/prefer-regexp-exec": "error";
            readonly "typescript/prefer-return-this-type": "error";
            readonly "typescript/prefer-string-starts-ends-with": ["error", {
                readonly allowSingleElementEquality: "never";
            }];
            readonly "typescript/prefer-ts-expect-error": "error";
            readonly "typescript/promise-function-async": ["error", {
                readonly allowAny: false;
                readonly allowedPromiseNames: readonly [];
                readonly checkArrowFunctions: true;
                readonly checkFunctionDeclarations: true;
                readonly checkFunctionExpressions: true;
                readonly checkMethodDeclarations: true;
            }];
            readonly "typescript/related-getter-setter-pairs": "error";
            readonly "typescript/require-array-sort-compare": "off";
            readonly "typescript/require-await": "error";
            readonly "typescript/restrict-plus-operands": ["error", {
                readonly allowAny: false;
                readonly allowBoolean: false;
                readonly allowNullish: false;
                readonly allowNumberAndString: false;
                readonly allowRegExp: false;
                readonly skipCompoundAssignments: false;
            }];
            readonly "typescript/restrict-template-expressions": ["error", {
                readonly allow: readonly [{
                    readonly from: "lib";
                    readonly name: readonly ["Error", "URL", "URLSearchParams"];
                }];
                readonly allowAny: false;
                readonly allowArray: false;
                readonly allowBoolean: true;
                readonly allowNever: false;
                readonly allowNullish: true;
                readonly allowNumber: true;
                readonly allowRegExp: true;
            }];
            readonly "typescript/return-await": ["error", "never"];
            readonly "typescript/strict-boolean-expressions": "off";
            readonly "typescript/strict-void-return": ["error", {
                readonly allowReturnAny: false;
            }];
            readonly "typescript/switch-exhaustiveness-check": ["error", {
                readonly allowDefaultCaseForExhaustiveSwitch: true;
                readonly considerDefaultExhaustiveForUnions: true;
                readonly defaultCaseCommentPattern: "^$";
                readonly requireDefaultForNonUnion: true;
            }];
            readonly "typescript/triple-slash-reference": ["error", {
                readonly lib: "never";
                readonly path: "never";
                readonly types: "prefer-import";
            }];
            readonly "typescript/unbound-method": ["error", {
                readonly ignoreStatic: false;
            }];
            readonly "typescript/unified-signatures": ["error", {
                readonly ignoreDifferentlyNamedParameters: false;
                readonly ignoreOverloadsWithDifferentJSDoc: false;
            }];
            readonly "typescript/use-unknown-in-catch-callback-variable": "error";
        };
    }, {
        readonly rules: {
            readonly 'unicorn/catch-error-name': ["error", {
                readonly ignore: readonly [];
                readonly name: "err";
            }];
            readonly 'unicorn/consistent-assert': "error";
            readonly 'unicorn/consistent-date-clone': "error";
            readonly 'unicorn/consistent-empty-array-spread': "error";
            readonly 'unicorn/consistent-existence-index-check': "error";
            readonly 'unicorn/consistent-function-scoping': ["error", {
                readonly checkArrowFunctions: true;
            }];
            readonly 'unicorn/empty-brace-spaces': "error";
            readonly 'unicorn/error-message': "error";
            readonly 'unicorn/escape-case': "error";
            readonly 'unicorn/explicit-length-check': ["error", {
                readonly 'non-zero': "not-equal";
            }];
            readonly 'unicorn/filename-case': ["error", {
                readonly case: "kebabCase";
                readonly ignore: "^.*\\.[jt]sx$";
                readonly multipleFileExtensions: true;
            }];
            readonly 'unicorn/new-for-builtins': "error";
            readonly 'unicorn/no-abusive-eslint-disable': "error";
            readonly 'unicorn/no-accessor-recursion': "error";
            readonly 'unicorn/no-anonymous-default-export': "off";
            readonly 'unicorn/no-array-callback-reference': "error";
            readonly 'unicorn/no-array-for-each': "error";
            readonly 'unicorn/no-array-method-this-argument': "error";
            readonly 'unicorn/no-array-reduce': "off";
            readonly 'unicorn/no-array-reverse': "error";
            readonly 'unicorn/no-array-sort': "error";
            readonly 'unicorn/no-await-expression-member': "error";
            readonly 'unicorn/no-await-in-promise-methods': "error";
            readonly 'unicorn/no-console-spaces': "error";
            readonly 'unicorn/no-document-cookie': "error";
            readonly 'unicorn/no-empty-file': "error";
            readonly 'unicorn/no-hex-escape': "error";
            readonly 'unicorn/no-immediate-mutation': "error";
            readonly 'unicorn/no-instanceof-array': "error";
            readonly 'unicorn/no-instanceof-builtins': ["error", {
                readonly exclude: readonly [];
                readonly include: readonly [];
                readonly strategy: "strict";
                readonly useErrorIsError: false;
            }];
            readonly 'unicorn/no-invalid-fetch-options': "error";
            readonly 'unicorn/no-invalid-remove-event-listener': "error";
            readonly 'unicorn/no-length-as-slice-end': "error";
            readonly 'unicorn/no-lonely-if': "error";
            readonly 'unicorn/no-magic-array-flat-depth': "error";
            readonly 'unicorn/no-negation-in-equality-check': "error";
            readonly 'unicorn/no-nested-ternary': "error";
            readonly 'unicorn/no-new-array': "error";
            readonly 'unicorn/no-new-buffer': "error";
            readonly 'unicorn/no-null': "off";
            readonly 'unicorn/no-object-as-default-parameter': "error";
            readonly 'unicorn/no-process-exit': "error";
            readonly 'unicorn/no-single-promise-in-promise-methods': "error";
            readonly 'unicorn/no-static-only-class': "error";
            readonly 'unicorn/no-thenable': "error";
            readonly 'unicorn/no-this-assignment': "error";
            readonly 'unicorn/no-typeof-undefined': ["error", {
                readonly checkGlobalVariables: true;
            }];
            readonly 'unicorn/no-unnecessary-array-flat-depth': "error";
            readonly 'unicorn/no-unnecessary-array-splice-count': "error";
            readonly 'unicorn/no-unnecessary-await': "error";
            readonly 'unicorn/no-unnecessary-slice-end': "error";
            readonly 'unicorn/no-unreadable-array-destructuring': "error";
            readonly 'unicorn/no-unreadable-iife': "error";
            readonly 'unicorn/no-useless-collection-argument': "error";
            readonly 'unicorn/no-useless-error-capture-stack-trace': "error";
            readonly 'unicorn/no-useless-fallback-in-spread': "error";
            readonly 'unicorn/no-useless-length-check': "error";
            readonly 'unicorn/no-useless-promise-resolve-reject': ["error", {
                readonly allowReject: false;
            }];
            readonly 'unicorn/no-useless-spread': "error";
            readonly 'unicorn/no-useless-switch-case': "error";
            readonly 'unicorn/no-useless-undefined': ["error", {
                readonly checkArguments: true;
                readonly checkArrowFunctionBody: true;
            }];
            readonly 'unicorn/no-zero-fractions': "error";
            readonly 'unicorn/number-literal-case': "off";
            readonly 'unicorn/numeric-separators-style': ["error", {
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
            readonly 'unicorn/prefer-add-event-listener': "error";
            readonly 'unicorn/prefer-array-find': "error";
            readonly 'unicorn/prefer-array-flat': "error";
            readonly 'unicorn/prefer-array-flat-map': "error";
            readonly 'unicorn/prefer-array-index-of': "error";
            readonly 'unicorn/prefer-array-some': "error";
            readonly 'unicorn/prefer-at': ["error", {
                readonly checkAllIndexAccess: false;
                readonly getLastElementFunctions: readonly [];
            }];
            readonly 'unicorn/prefer-bigint-literals': "error";
            readonly 'unicorn/prefer-blob-reading-methods': "error";
            readonly 'unicorn/prefer-class-fields': "error";
            readonly 'unicorn/prefer-classlist-toggle': "error";
            readonly 'unicorn/prefer-code-point': "error";
            readonly 'unicorn/prefer-date-now': "error";
            readonly 'unicorn/prefer-default-parameters': "error";
            readonly 'unicorn/prefer-dom-node-append': "error";
            readonly 'unicorn/prefer-dom-node-dataset': "error";
            readonly 'unicorn/prefer-dom-node-remove': "error";
            readonly 'unicorn/prefer-dom-node-text-content': "error";
            readonly 'unicorn/prefer-event-target': "error";
            readonly 'unicorn/prefer-global-this': "error";
            readonly 'unicorn/prefer-includes': "error";
            readonly 'unicorn/prefer-keyboard-event-key': "error";
            readonly 'unicorn/prefer-logical-operator-over-ternary': "error";
            readonly 'unicorn/prefer-math-min-max': "error";
            readonly 'unicorn/prefer-math-trunc': "error";
            readonly 'unicorn/prefer-modern-dom-apis': "error";
            readonly 'unicorn/prefer-modern-math-apis': "error";
            readonly 'unicorn/prefer-module': "error";
            readonly 'unicorn/prefer-native-coercion-functions': "error";
            readonly 'unicorn/prefer-negative-index': "error";
            readonly 'unicorn/prefer-node-protocol': "error";
            readonly 'unicorn/prefer-number-properties': ["error", {
                readonly checkInfinity: true;
                readonly checkNaN: true;
            }];
            readonly 'unicorn/prefer-object-from-entries': ["error", {
                readonly functions: readonly ["_.fromPairs", "lodash.fromPairs"];
            }];
            readonly 'unicorn/prefer-optional-catch-binding': "error";
            readonly 'unicorn/prefer-prototype-methods': "error";
            readonly 'unicorn/prefer-query-selector': "error";
            readonly 'unicorn/prefer-reflect-apply': "error";
            readonly 'unicorn/prefer-regexp-test': "error";
            readonly 'unicorn/prefer-response-static-json': "error";
            readonly 'unicorn/prefer-set-has': "error";
            readonly 'unicorn/prefer-set-size': "error";
            readonly 'unicorn/prefer-spread': "error";
            readonly 'unicorn/prefer-string-raw': "error";
            readonly 'unicorn/prefer-string-replace-all': "error";
            readonly 'unicorn/prefer-string-slice': "error";
            readonly 'unicorn/prefer-string-starts-ends-with': "error";
            readonly 'unicorn/prefer-string-trim-start-end': "error";
            readonly 'unicorn/prefer-structured-clone': ["error", {
                readonly functions: readonly ["cloneDeep", "utils.clone"];
            }];
            readonly 'unicorn/prefer-ternary': ["error", "always"];
            readonly 'unicorn/prefer-top-level-await': "error";
            readonly 'unicorn/prefer-type-error': "error";
            readonly 'unicorn/relative-url-style': ["error", "always"];
            readonly 'unicorn/require-array-join-separator': "error";
            readonly 'unicorn/require-module-attributes': "error";
            readonly 'unicorn/require-module-specifiers': "error";
            readonly 'unicorn/require-number-to-fixed-digits-argument': "error";
            readonly 'unicorn/require-post-message-target-origin': "error";
            readonly 'unicorn/switch-case-braces': ["error", "avoid"];
            readonly 'unicorn/text-encoding-identifier-case': ["error", {
                readonly withDash: false;
            }];
            readonly 'unicorn/throw-new-error': "error";
        };
    }, {
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
    }];
};
export declare const jsxRules: {
    readonly extends: [{
        readonly rules: {
            readonly 'jsx-a11y/alt-text': ["error", {
                readonly area: readonly [];
                readonly img: readonly ["Image", "NextImage"];
                readonly 'input[type="image"]': readonly [];
                readonly object: readonly [];
            }];
            readonly 'jsx-a11y/anchor-ambiguous-text': ["error", {
                readonly words: readonly ["a link", "click here", "here", "learn more", "link", "こいつ", "ここ", "こちら", "こちらのリンク", "この", "このリンク", "こやつ", "これ", "コイツ", "ココ", "コチラ", "コチラのリンク", "コヤツ", "コレ", "リンク", "ｺｲﾂ", "ｺｺ", "ｺﾁﾗ", "ｺﾔﾂ", "ｺﾚ"];
            }];
            readonly 'jsx-a11y/anchor-has-content': "error";
            readonly 'jsx-a11y/anchor-is-valid': ["error", {
                readonly validHrefs: readonly [];
            }];
            readonly 'jsx-a11y/aria-activedescendant-has-tabindex': "error";
            readonly 'jsx-a11y/aria-props': "error";
            readonly 'jsx-a11y/aria-proptypes': "error";
            readonly 'jsx-a11y/aria-role': ["error", {
                readonly allowedInvalidRoles: readonly [];
                readonly ignoreNonDOM: false;
            }];
            readonly 'jsx-a11y/aria-unsupported-elements': "error";
            readonly 'jsx-a11y/autocomplete-valid': ["error", {
                readonly inputComponents: readonly ["input"];
            }];
            readonly 'jsx-a11y/click-events-have-key-events': "error";
            readonly 'jsx-a11y/heading-has-content': ["error", {
                readonly components: readonly [];
            }];
            readonly 'jsx-a11y/html-has-lang': "error";
            readonly 'jsx-a11y/iframe-has-title': "error";
            readonly 'jsx-a11y/img-redundant-alt': ["error", {
                readonly components: readonly ["Image", "NextImage", "img"];
                readonly words: readonly ["image", "photo", "picture"];
            }];
            readonly 'jsx-a11y/label-has-associated-control': ["error", {
                readonly assert: "htmlFor";
                readonly controlComponents: readonly [];
                readonly depth: 2;
                readonly labelAttributes: readonly ["alt", "aria-label", "aria-labelledby"];
                readonly labelComponents: readonly ["label"];
            }];
            readonly 'jsx-a11y/lang': "error";
            readonly 'jsx-a11y/media-has-caption': ["error", {
                readonly audio: readonly ["audio"];
                readonly track: readonly ["track"];
                readonly video: readonly ["video"];
            }];
            readonly 'jsx-a11y/mouse-events-have-key-events': ["error", {
                readonly hoverInHandlers: readonly ["onMouseOver"];
                readonly hoverOutHandlers: readonly ["onMouseOut"];
            }];
            readonly 'jsx-a11y/no-access-key': "error";
            readonly 'jsx-a11y/no-aria-hidden-on-focusable': "error";
            readonly 'jsx-a11y/no-autofocus': ["error", {
                readonly ignoreNonDOM: false;
            }];
            readonly 'jsx-a11y/no-distracting-elements': ["error", {
                readonly elements: readonly ["blink", "marquee"];
            }];
            readonly 'jsx-a11y/no-noninteractive-tabindex': ["error", {
                readonly allowExpressionValues: true;
                readonly roles: readonly ["tabpanel"];
                readonly tags: readonly [];
            }];
            readonly 'jsx-a11y/no-redundant-roles': "error";
            readonly 'jsx-a11y/no-static-element-interactions': "error";
            readonly 'jsx-a11y/prefer-tag-over-role': "error";
            readonly 'jsx-a11y/role-has-required-aria-props': "error";
            readonly 'jsx-a11y/role-supports-aria-props': "error";
            readonly 'jsx-a11y/scope': "error";
            readonly 'jsx-a11y/tabindex-no-positive': "error";
        };
    }, {
        readonly rules: {
            readonly 'react/jsx-boolean-value': ["error", "never", {
                readonly always: readonly [];
                readonly assumeUndefinedIsFalse: true;
            }];
            readonly 'react/jsx-curly-brace-presence': ["error", {
                readonly children: "never";
                readonly propElementValues: "always";
                readonly props: "never";
            }];
            readonly 'react/jsx-filename-extension': "off";
            readonly 'react/jsx-fragments': ["error", "syntax"];
            readonly 'react/jsx-handler-names': ["error", {
                readonly checkInlineFunctions: true;
                readonly checkLocalVariables: true;
                readonly eventHandlerPrefixes: "handle";
                readonly eventHandlerPropPrefixes: "on";
                readonly eventHandlerPropRegex: "";
                readonly eventHandlerRegex: "";
                readonly ignoreComponentNames: readonly [];
            }];
            readonly 'react/jsx-key': ["error", {
                readonly checkFragmentShorthand: true;
                readonly checkKeyMustBeforeSpread: true;
                readonly warnOnDuplicates: true;
            }];
            readonly 'react/jsx-max-depth': ["error", {
                readonly max: number;
            }];
            readonly 'react/jsx-no-comment-textnodes': "error";
            readonly 'react/jsx-no-constructed-context-values': "error";
            readonly 'react/jsx-no-duplicate-props': "error";
            readonly 'react/jsx-no-script-url': ["error", {
                readonly components: {};
                readonly includeFromSettings: false;
            }];
            readonly 'react/jsx-no-target-blank': ["error", {
                readonly allowReferrer: false;
                readonly enforceDynamicLinks: "always";
                readonly forms: false;
                readonly links: true;
                readonly warnOnSpreadAttributes: false;
            }];
            readonly 'react/jsx-no-undef': "error";
            readonly 'react/jsx-no-useless-fragment': ["error", {
                readonly allowExpressions: true;
            }];
            readonly 'react/jsx-pascal-case': ["error", {
                readonly allowAllCaps: false;
                readonly allowLeadingUnderscore: false;
                readonly allowNamespace: true;
                readonly ignore: readonly [];
            }];
            readonly 'react/jsx-props-no-spread-multi': "error";
            readonly 'react/jsx-props-no-spreading': "off";
        };
    }, {
        readonly rules: {
            readonly 'react-perf/jsx-no-jsx-as-prop': "error";
            readonly 'react-perf/jsx-no-new-array-as-prop': "error";
            readonly 'react-perf/jsx-no-new-function-as-prop': "error";
            readonly 'react-perf/jsx-no-new-object-as-prop': "error";
        };
    }];
};
export declare const nextjsRules: {
    readonly extends: [{
        readonly rules: {
            readonly 'nextjs/google-font-display': "error";
            readonly 'nextjs/google-font-preconnect': "error";
            readonly 'nextjs/inline-script-id': "error";
            readonly 'nextjs/next-script-for-ga': "error";
            readonly 'nextjs/no-assign-module-variable': "error";
            readonly 'nextjs/no-async-client-component': "error";
            readonly 'nextjs/no-before-interactive-script-outside-document': "error";
            readonly 'nextjs/no-css-tags': "error";
            readonly 'nextjs/no-document-import-in-page': "error";
            readonly 'nextjs/no-duplicate-head': "error";
            readonly 'nextjs/no-head-element': "error";
            readonly 'nextjs/no-head-import-in-document': "error";
            readonly 'nextjs/no-html-link-for-pages': "error";
            readonly 'nextjs/no-img-element': "error";
            readonly 'nextjs/no-page-custom-font': "error";
            readonly 'nextjs/no-script-component-in-head': "error";
            readonly 'nextjs/no-styled-jsx-in-document': "error";
            readonly 'nextjs/no-sync-scripts': "error";
            readonly 'nextjs/no-title-in-document-head': "error";
            readonly 'nextjs/no-typos': "error";
            readonly 'nextjs/no-unwanted-polyfillio': "error";
        };
    }];
};
export declare const reactRules: {
    readonly extends: [{
        readonly rules: {};
    }, {
        readonly rules: {
            readonly 'react/button-has-type': ["error", {
                readonly button: true;
                readonly reset: true;
                readonly submit: true;
            }];
            readonly 'react/checked-requires-onchange-or-readonly': ["error", {
                readonly ignoreExclusiveCheckedAttribute: false;
                readonly ignoreMissingProperties: false;
            }];
            readonly 'react/display-name': ["error", {
                readonly checkContextObjects: true;
                readonly ignoreTranspilerName: false;
            }];
            readonly 'react/exhaustive-deps': ["error", {
                readonly additionalHooks: null;
            }];
            readonly 'react/forbid-dom-props': ["error", {
                readonly forbid: readonly [{
                    readonly message: "Use className instead";
                    readonly propName: "class";
                }];
            }];
            readonly 'react/forbid-elements': ["error", {
                readonly forbid: readonly [];
            }];
            readonly 'react/forward-ref-uses-ref': "error";
            readonly 'react/iframe-missing-sandbox': "error";
            readonly 'react/no-array-index-key': "error";
            readonly 'react/no-children-prop': "error";
            readonly 'react/no-danger': "error";
            readonly 'react/no-danger-with-children': "error";
            readonly 'react/no-did-mount-set-state': ["error", "allowed"];
            readonly 'react/no-direct-mutation-state': "error";
            readonly 'react/no-find-dom-node': "error";
            readonly 'react/no-is-mounted': "error";
            readonly 'react/no-multi-comp': "off";
            readonly 'react/no-namespace': "error";
            readonly 'react/no-redundant-should-component-update': "error";
            readonly 'react/no-render-return-value': "error";
            readonly 'react/no-set-state': "error";
            readonly 'react/no-string-refs': ["error", {
                readonly noTemplateLiterals: true;
            }];
            readonly 'react/no-this-in-sfc': "error";
            readonly 'react/no-unescaped-entities': "error";
            readonly 'react/no-unknown-property': ["error", {
                readonly ignore: readonly [];
                readonly requireDataLowercase: false;
            }];
            readonly 'react/no-unsafe': ["error", {
                readonly checkAliases: true;
            }];
            readonly 'react/no-will-update-set-state': ["error", "disallow-in-func"];
            readonly 'react/only-export-components': ["error", {
                readonly allowConstantExport: false;
                readonly allowExportNames: readonly ["action", "clientAction", "clientLoader", "headers", "generateImageMetadata", "generateMetadata", "generateStaticParams", "generateViewport", "getInitialProps", "getServerSideProps", "getStaticPaths", "getStaticProps", "links", "loader", "meta", "metadata", "shouldRevalidate", "viewport"];
                readonly checkJS: false;
                readonly customHOCs: readonly [];
            }];
            readonly 'react/prefer-es6-class': ["error", "always"];
            readonly 'react/react-in-jsx-scope': "off";
            readonly 'react/require-render-return': "error";
            readonly 'react/rules-of-hooks': "error";
            readonly 'react/self-closing-comp': ["error", {
                readonly component: true;
                readonly html: true;
            }];
            readonly 'react/state-in-constructor': ["error", "never"];
            readonly 'react/style-prop-object': ["error", {
                readonly allow: readonly [];
            }];
            readonly 'react/void-dom-elements-no-children': "error";
        };
    }];
    readonly overrides: [{
        readonly files: ["*.jsx", "*.tsx"];
        readonly rules: {
            readonly 'import/no-default-export': "off";
        };
    }];
    readonly rules: {
        readonly 'react/jsx-filename-extension': ["error", {
            readonly allow: "as-needed";
            readonly extensions: readonly ["jsx", "tsx"];
            readonly ignoreFilesWithoutCode: true;
        }];
    };
};
export declare const vueRules: {
    readonly extends: [{
        readonly rules: {
            readonly 'vue/define-emits-declaration': ["error", "type-literal"];
            readonly 'vue/define-props-declaration': ["error", "type-based"];
            readonly 'vue/define-props-destructuring': ["error", {
                readonly destructure: "always";
            }];
            readonly 'vue/max-props': "off";
            readonly 'vue/no-arrow-functions-in-watch': "error";
            readonly 'vue/no-deprecated-destroyed-lifecycle': "error";
            readonly 'vue/no-export-in-script-setup': "error";
            readonly 'vue/no-import-compiler-macros': "error";
            readonly 'vue/no-lifecycle-after-await': "error";
            readonly 'vue/no-multiple-slot-args': "error";
            readonly 'vue/no-required-prop-with-default': "error";
            readonly 'vue/no-this-in-before-route-enter': "error";
            readonly 'vue/prefer-import-from-vue': "error";
            readonly 'vue/require-default-export': "error";
            readonly 'vue/require-typed-ref': "error";
            readonly 'vue/valid-define-emits': "error";
            readonly 'vue/valid-define-props': "error";
        };
    }];
};
