export declare const core: {
    extends: {
        extends: ({
            rules: {
                'eslint/accessor-pairs': (string | {
                    enforceForClassMembers: boolean;
                    enforceForTSTypes: boolean;
                    getWithoutSet: boolean;
                    setWithoutGet: boolean;
                })[];
                'eslint/array-callback-return': (string | {
                    allowImplicit: boolean;
                    allowVoid: boolean;
                    checkForEach: boolean;
                })[];
                'eslint/arrow-body-style': (string | {
                    requireReturnForObjectLiteral: boolean;
                })[];
                'eslint/block-scoped-var': "error";
                'eslint/capitalized-comments': (string | {
                    block: {
                        ignoreConsecutiveComments: boolean;
                        ignoreInlineComments: boolean;
                        ignorePattern: string;
                    };
                    line: {
                        ignoreConsecutiveComments: boolean;
                        ignoreInlineComments: boolean;
                        ignorePattern: string;
                    };
                })[];
                'eslint/class-methods-use-this': (string | {
                    enforceForClassFields: boolean;
                    exceptMethods: never[];
                    ignoreClassesWithImplements: null;
                    ignoreOverrideMethods: boolean;
                })[];
                'eslint/complexity': "off";
                'eslint/constructor-super': "error";
                'eslint/curly': string[];
                'eslint/default-case': (string | {
                    commentPattern: string;
                })[];
                'eslint/default-case-last': "error";
                'eslint/default-param-last': "error";
                'eslint/eqeqeq': string[];
                'eslint/for-direction': "error";
                'eslint/func-names': (string | {
                    generators: null;
                })[];
                'eslint/func-style': (string | {
                    allowArrowFunctions: boolean;
                    allowTypeAnnotation: boolean;
                    overrides: {
                        namedExports: null;
                    };
                })[];
                'eslint/getter-return': (string | {
                    allowImplicit: boolean;
                })[];
                'eslint/grouped-accessor-pairs': (string | {
                    enforceForTSTypes: boolean;
                })[];
                'eslint/guard-for-in': "error";
                'eslint/id-length': (string | {
                    checkGeneric: boolean;
                    exceptionPatterns: never[];
                    exceptions: never[];
                    max: number;
                    min: number;
                    properties: string;
                })[];
                'eslint/init-declarations': string[];
                'eslint/max-classes-per-file': (string | {
                    ignoreExpressions: boolean;
                    max: number;
                })[];
                'eslint/max-depth': "off";
                'eslint/max-lines': "off";
                'eslint/max-lines-per-function': "off";
                'eslint/max-nested-callbacks': "off";
                'eslint/max-params': "off";
                'eslint/max-statements': "off";
                'eslint/new-cap': (string | {
                    capIsNew: boolean;
                    capIsNewExceptionPattern: string;
                    capIsNewExceptions: never[];
                    newIsCap: boolean;
                    newIsCapExceptionPattern: string;
                    newIsCapExceptions: string[];
                    properties: boolean;
                })[];
                'eslint/no-alert': "error";
                'eslint/no-array-constructor': "error";
                'eslint/no-async-promise-executor': "error";
                'eslint/no-await-in-loop': "error";
                'eslint/no-bitwise': (string | {
                    allow: never[];
                    int32Hint: boolean;
                })[];
                'eslint/no-caller': "error";
                'eslint/no-case-declarations': "error";
                'eslint/no-class-assign': "error";
                'eslint/no-compare-neg-zero': "error";
                'eslint/no-cond-assign': string[];
                'eslint/no-console': "off";
                'eslint/no-const-assign': "error";
                'eslint/no-constant-binary-expression': "error";
                'eslint/no-constant-condition': (string | {
                    checkLoops: string;
                })[];
                'eslint/no-constructor-return': "error";
                'eslint/no-continue': "error";
                'eslint/no-control-regex': "error";
                'eslint/no-debugger': "error";
                'eslint/no-delete-var': "error";
                'eslint/no-div-regex': "error";
                'eslint/no-dupe-class-members': "error";
                'eslint/no-dupe-else-if': "error";
                'eslint/no-dupe-keys': "error";
                'eslint/no-duplicate-case': "error";
                'eslint/no-duplicate-imports': (string | {
                    allowSeparateTypeImports: boolean;
                    includeExports: boolean;
                })[];
                'eslint/no-else-return': (string | {
                    allowElseIf: boolean;
                })[];
                'eslint/no-empty': (string | {
                    allowEmptyCatch: boolean;
                })[];
                'eslint/no-empty-character-class': "error";
                'eslint/no-empty-function': "error";
                'eslint/no-empty-pattern': "error";
                'eslint/no-empty-static-block': "error";
                'eslint/no-eq-null': "error";
                'eslint/no-eval': (string | {
                    allowIndirect: boolean;
                })[];
                'eslint/no-ex-assign': "error";
                'eslint/no-extend-native': (string | {
                    exceptions: never[];
                })[];
                'eslint/no-extra-bind': "error";
                'eslint/no-extra-boolean-cast': "error";
                'eslint/no-extra-label': "error";
                'eslint/no-fallthrough': (string | {
                    allowEmptyCase: boolean;
                    commentPattern: null;
                    reportUnusedFallthroughComment: boolean;
                })[];
                'eslint/no-func-assign': "error";
                'eslint/no-global-assign': (string | {
                    exceptions: never[];
                })[];
                'eslint/no-implicit-coercion': (string | {
                    allow: string[];
                    boolean: boolean;
                    disallowTemplateShorthand: boolean;
                    number: boolean;
                    string: boolean;
                })[];
                'eslint/no-import-assign': "error";
                'eslint/no-inline-comments': (string | {
                    ignorePattern: null;
                })[];
                'eslint/no-inner-declarations': "off";
                'eslint/no-invalid-regexp': (string | {
                    allowConstructorFlags: never[];
                })[];
                'eslint/no-irregular-whitespace': "error";
                'eslint/no-iterator': "error";
                'eslint/no-label-var': "error";
                'eslint/no-labels': (string | {
                    allowLoop: boolean;
                    allowSwitch: boolean;
                })[];
                'eslint/no-lone-blocks': "error";
                'eslint/no-lonely-if': "error";
                'eslint/no-loop-func': "error";
                'eslint/no-loss-of-precision': "error";
                'eslint/no-magic-numbers': (string | {
                    detectObjects: boolean;
                    enforceConst: boolean;
                    ignore: number[];
                    ignoreArrayIndexes: boolean;
                    ignoreClassFieldInitialValues: boolean;
                    ignoreDefaultValues: boolean;
                    ignoreEnums: boolean;
                    ignoreNumericLiteralTypes: boolean;
                    ignoreReadonlyClassProperties: boolean;
                    ignoreTypeIndexes: boolean;
                })[];
                'eslint/no-misleading-character-class': (string | {
                    allowEscape: boolean;
                })[];
                'eslint/no-multi-assign': (string | {
                    ignoreNonDeclaration: boolean;
                })[];
                'eslint/no-multi-str': "error";
                'eslint/no-negated-condition': "error";
                'eslint/no-nested-ternary': "error";
                'eslint/no-new': "error";
                'eslint/no-new-func': "error";
                'eslint/no-new-native-nonconstructor': "error";
                'eslint/no-new-wrappers': "error";
                'eslint/no-nonoctal-decimal-escape': "error";
                'eslint/no-obj-calls': "error";
                'eslint/no-object-constructor': "error";
                'eslint/no-param-reassign': (string | {
                    ignorePropertyModificationsFor: never[];
                    ignorePropertyModificationsForRegex: never[];
                    props: boolean;
                })[];
                'eslint/no-plusplus': "off";
                'eslint/no-promise-executor-return': (string | {
                    allowVoid: boolean;
                })[];
                'eslint/no-proto': "error";
                'eslint/no-prototype-builtins': "error";
                'eslint/no-redeclare': (string | {
                    builtinGlobals: boolean;
                })[];
                'eslint/no-regex-spaces': "error";
                'eslint/no-restricted-globals': (string | {
                    restrictedGlobals: {};
                })[];
                'eslint/no-restricted-imports': (string | {
                    paths: never[];
                    patterns: never[];
                })[];
                'eslint/no-return-assign': string[];
                'eslint/no-script-url': "error";
                'eslint/no-self-assign': (string | {
                    props: boolean;
                })[];
                'eslint/no-self-compare': "error";
                'eslint/no-sequences': (string | {
                    allowInParentheses: boolean;
                })[];
                'eslint/no-setter-return': "error";
                'eslint/no-shadow': "off";
                'eslint/no-shadow-restricted-names': (string | {
                    reportGlobalThis: boolean;
                })[];
                'eslint/no-sparse-arrays': "error";
                'eslint/no-template-curly-in-string': "error";
                'eslint/no-ternary': "off";
                'eslint/no-this-before-super': "error";
                'eslint/no-unassigned-vars': "error";
                'eslint/no-undef': (string | {
                    typeof: boolean;
                })[];
                'eslint/no-undefined': "error";
                'eslint/no-unexpected-multiline': "error";
                'eslint/no-unmodified-loop-condition': "error";
                'eslint/no-unneeded-ternary': (string | {
                    defaultAssignment: boolean;
                })[];
                'eslint/no-unreachable': "error";
                'eslint/no-unsafe-finally': "error";
                'eslint/no-unsafe-negation': (string | {
                    enforceForOrderingRelations: boolean;
                })[];
                'eslint/no-unsafe-optional-chaining': (string | {
                    disallowArithmeticOperators: boolean;
                })[];
                'eslint/no-unused-expressions': (string | {
                    allowShortCircuit: boolean;
                    allowTaggedTemplates: boolean;
                    allowTernary: boolean;
                    enforceForJSX: boolean;
                })[];
                'eslint/no-unused-labels': "error";
                'eslint/no-unused-private-class-members': "error";
                'eslint/no-unused-vars': (string | {
                    args: string;
                    argsIgnorePattern: string;
                    caughtErrors: string;
                    caughtErrorsIgnorePattern: string;
                    destructuredArrayIgnorePattern: string;
                    fix: {
                        imports: string;
                        variables: string;
                    };
                    ignoreClassWithStaticInitBlock: boolean;
                    ignoreRestSiblings: boolean;
                    ignoreUsingDeclarations: boolean;
                    reportUsedIgnorePattern: boolean;
                    reportVarsOnlyUsedAsTypes: boolean;
                    vars: string;
                    varsIgnorePattern: string;
                })[];
                'eslint/no-use-before-define': (string | {
                    allowNamedExports: boolean;
                    classes: boolean;
                    enums: boolean;
                    functions: boolean;
                    ignoreTypeReferences: boolean;
                    typedefs: boolean;
                    variables: boolean;
                })[];
                'eslint/no-useless-backreference': "error";
                'eslint/no-useless-call': "error";
                'eslint/no-useless-catch': "error";
                'eslint/no-useless-computed-key': (string | {
                    enforceForClassMembers: boolean;
                })[];
                'eslint/no-useless-concat': "error";
                'eslint/no-useless-constructor': "error";
                'eslint/no-useless-escape': (string | {
                    allowRegexCharacters: never[];
                })[];
                'eslint/no-useless-rename': (string | {
                    ignoreDestructuring: boolean;
                    ignoreExport: boolean;
                    ignoreImport: boolean;
                })[];
                'eslint/no-useless-return': "error";
                'eslint/no-var': "error";
                'eslint/no-void': (string | {
                    allowAsStatement: boolean;
                })[];
                'eslint/no-warning-comments': "off";
                'eslint/no-with': "error";
                'eslint/operator-assignment': string[];
                'eslint/prefer-const': (string | {
                    destructuring: string;
                    ignoreReadBeforeAssign: boolean;
                })[];
                'eslint/prefer-destructuring': (string | {
                    AssignmentExpression: {
                        array: boolean;
                        object: boolean;
                    };
                    VariableDeclarator: {
                        array: boolean;
                        object: boolean;
                    };
                    enforceForRenamedProperties: boolean;
                })[];
                'eslint/prefer-exponentiation-operator': "error";
                'eslint/prefer-numeric-literals': "error";
                'eslint/prefer-object-has-own': "error";
                'eslint/prefer-object-spread': "error";
                'eslint/prefer-promise-reject-errors': (string | {
                    allowEmptyReject: boolean;
                })[];
                'eslint/prefer-rest-params': "error";
                'eslint/prefer-spread': "error";
                'eslint/prefer-template': "error";
                'eslint/preserve-caught-error': (string | {
                    requireCatchParameter: boolean;
                })[];
                'eslint/radix': "error";
                'eslint/require-await': "off";
                'eslint/require-yield': "error";
                'eslint/sort-imports': (string | {
                    allowSeparatedGroups: boolean;
                    ignoreCase: boolean;
                    ignoreDeclarationSort: boolean;
                    ignoreMemberSort: boolean;
                    memberSyntaxSortOrder: string[];
                })[];
                'eslint/sort-keys': (string | {
                    allowLineSeparatedGroups: boolean;
                    caseSensitive: boolean;
                    minKeys: number;
                    natural: boolean;
                })[];
                'eslint/sort-vars': (string | {
                    ignoreCase: boolean;
                })[];
                'eslint/symbol-description': "error";
                'eslint/unicode-bom': string[];
                'eslint/use-isnan': (string | {
                    enforceForIndexOf: boolean;
                    enforceForSwitchCase: boolean;
                })[];
                'eslint/valid-typeof': (string | {
                    requireStringLiterals: boolean;
                })[];
                'eslint/vars-on-top': "error";
                'eslint/yoda': (string | {
                    exceptRange: boolean;
                    onlyEquality: boolean;
                })[];
            };
        } | {
            overrides: {
                files: string[];
                rules: {
                    'import/no-default-export': "off";
                };
            }[];
            rules: {
                'import/consistent-type-specifier-style': string[];
                'import/default': "error";
                'import/export': "error";
                'import/exports-last': "off";
                'import/extensions': (string | {
                    checkTypeImports: boolean;
                    ignorePackages: boolean;
                    pathGroupOverrides: never[];
                })[];
                'import/first': string[];
                'import/group-exports': "off";
                'import/max-dependencies': "off";
                'import/named': "error";
                'import/namespace': (string | {
                    allowComputed: boolean;
                })[];
                'import/no-absolute-path': (string | {
                    amd: boolean;
                    commonjs: boolean;
                    esmodule: boolean;
                })[];
                'import/no-amd': "error";
                'import/no-anonymous-default-export': (string | {
                    allowAnonymousClass: boolean;
                    allowAnonymousFunction: boolean;
                    allowArray: boolean;
                    allowArrowFunction: boolean;
                    allowCallExpression: boolean;
                    allowLiteral: boolean;
                    allowNew: boolean;
                    allowObject: boolean;
                })[];
                'import/no-commonjs': "error";
                'import/no-cycle': (string | {
                    allowUnsafeDynamicCyclicDependency: boolean;
                    ignoreExternal: boolean;
                    ignoreTypes: boolean;
                    maxDepth: number;
                })[];
                'import/no-default-export': "error";
                'import/no-duplicates': (string | {
                    considerQueryString: boolean;
                    preferInline: boolean;
                })[];
                'import/no-dynamic-require': (string | {
                    esmodule: boolean;
                })[];
                'import/no-empty-named-blocks': "error";
                'import/no-mutable-exports': "error";
                'import/no-named-as-default': "error";
                'import/no-named-as-default-member': "error";
                'import/no-named-default': "error";
                'import/no-named-export': "off";
                'import/no-namespace': (string | {
                    ignore: never[];
                })[];
                'import/no-nodejs-modules': "off";
                'import/no-relative-parent-imports': "error";
                'import/no-self-import': "error";
                'import/no-unassigned-import': "off";
                'import/no-webpack-loader-syntax': "error";
                'import/prefer-default-export': "off";
                'import/unambiguous': "error";
            };
        } | {
            rules: {
                'node/global-require': "error";
                'node/no-exports-assign': "error";
                'node/no-new-require': "error";
                'node/no-path-concat': "error";
                'node/no-process-env': "off";
            };
        } | {
            rules: {
                'oxc/approx-constant': "error";
                'oxc/bad-array-method-on-arguments': "error";
                'oxc/bad-bitwise-operator': "error";
                'oxc/bad-char-at-comparison': "error";
                'oxc/bad-comparison-sequence': "error";
                'oxc/bad-min-max-func': "error";
                'oxc/bad-object-literal-comparison': "error";
                'oxc/bad-replace-all-arg': "error";
                'oxc/branches-sharing-code': "error";
                'oxc/const-comparisons': "error";
                'oxc/double-comparisons': "error";
                'oxc/erasing-op': "error";
                'oxc/misrefactored-assign-op': "error";
                'oxc/missing-throw': "error";
                'oxc/no-accumulating-spread': "error";
                'oxc/no-async-await': "off";
                'oxc/no-async-endpoint-handlers': (string | {
                    allowedNames: never[];
                })[];
                'oxc/no-barrel-file': (string | {
                    threshold: number;
                })[];
                'oxc/no-const-enum': "error";
                'oxc/no-map-spread': (string | {
                    ignoreArgs: boolean;
                    ignoreRereads: boolean;
                })[];
                'oxc/no-optional-chaining': "off";
                'oxc/no-rest-spread-properties': "off";
                'oxc/no-this-in-exported-function': "error";
                'oxc/number-arg-out-of-range': "error";
                'oxc/only-used-in-recursion': "error";
                'oxc/uninvoked-array-callback': "error";
            };
        } | {
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
        } | {
            rules: {
                'typescript/adjacent-overload-signatures': "error";
                'typescript/array-type': (string | {
                    default: string;
                    readonly: string;
                })[];
                'typescript/await-thenable': "error";
                'typescript/ban-ts-comment': (string | {
                    minimumDescriptionLength: number;
                    'ts-check': boolean;
                    'ts-expect-error': string;
                    'ts-ignore': boolean;
                    'ts-nocheck': string;
                })[];
                'typescript/ban-tslint-comment': "error";
                'typescript/class-literal-property-style': string[];
                'typescript/consistent-generic-constructors': (string | {
                    option: string;
                })[];
                'typescript/consistent-indexed-object-style': string[];
                'typescript/consistent-return': (string | {
                    treatUndefinedAsUnspecified: boolean;
                })[];
                'typescript/consistent-type-assertions': (string | {
                    assertionStyle: string;
                })[];
                'typescript/consistent-type-definitions': string[];
                'typescript/consistent-type-exports': (string | {
                    fixMixedExportsWithInlineTypeSpecifier: boolean;
                })[];
                'typescript/consistent-type-imports': (string | {
                    disallowTypeAnnotations: boolean;
                    fixStyle: string;
                    prefer: string;
                })[];
                'typescript/dot-notation': (string | {
                    allowIndexSignaturePropertyAccess: boolean;
                    allowKeywords: boolean;
                    allowPattern: string;
                    allowPrivateClassPropertyAccess: boolean;
                    allowProtectedClassPropertyAccess: boolean;
                })[];
                'typescript/explicit-function-return-type': (string | {
                    allowConciseArrowFunctionExpressionsStartingWithVoid: boolean;
                    allowDirectConstAssertionInArrowFunctions: boolean;
                    allowExpressions: boolean;
                    allowFunctionsWithoutTypeParameters: boolean;
                    allowHigherOrderFunctions: boolean;
                    allowIIFEs: boolean;
                    allowTypedFunctionExpressions: boolean;
                    allowedNames: never[];
                })[];
                'typescript/explicit-module-boundary-types': (string | {
                    allowArgumentsExplicitlyTypedAsAny: boolean;
                    allowDirectConstAssertionInArrowFunctions: boolean;
                    allowHigherOrderFunctions: boolean;
                    allowOverloadFunctions: boolean;
                    allowTypedFunctionExpressions: boolean;
                    allowedNames: never[];
                })[];
                'typescript/no-array-delete': "error";
                'typescript/no-base-to-string': (string | {
                    checkUnknown: boolean;
                    ignoredTypeNames: string[];
                })[];
                'typescript/no-confusing-non-null-assertion': "error";
                'typescript/no-confusing-void-expression': (string | {
                    ignoreArrowShorthand: boolean;
                    ignoreVoidOperator: boolean;
                    ignoreVoidReturningFunctions: boolean;
                })[];
                'typescript/no-deprecated': (string | {
                    allow: never[];
                })[];
                'typescript/no-duplicate-enum-values': "error";
                'typescript/no-duplicate-type-constituents': (string | {
                    ignoreIntersections: boolean;
                    ignoreUnions: boolean;
                })[];
                'typescript/no-dynamic-delete': "error";
                'typescript/no-empty-interface': (string | {
                    allowSingleExtends: boolean;
                })[];
                'typescript/no-empty-object-type': (string | {
                    allowInterfaces: string;
                    allowObjectTypes: string;
                    allowWithName: string;
                })[];
                'typescript/no-explicit-any': (string | {
                    fixToUnknown: boolean;
                    ignoreRestArgs: boolean;
                })[];
                'typescript/no-extra-non-null-assertion': "error";
                'typescript/no-extraneous-class': (string | {
                    allowConstructorOnly: boolean;
                    allowEmpty: boolean;
                    allowStaticOnly: boolean;
                    allowWithDecorator: boolean;
                })[];
                'typescript/no-floating-promises': (string | {
                    allowForKnownSafeCalls: never[];
                    allowForKnownSafePromises: never[];
                    checkThenables: boolean;
                    ignoreIIFE: boolean;
                    ignoreVoid: boolean;
                })[];
                'typescript/no-for-in-array': "error";
                'typescript/no-implied-eval': "error";
                'typescript/no-import-type-side-effects': "error";
                'typescript/no-inferrable-types': (string | {
                    ignoreParameters: boolean;
                    ignoreProperties: boolean;
                })[];
                'typescript/no-invalid-void-type': (string | {
                    allowAsThisParameter: boolean;
                    allowInGenericTypeArguments: boolean;
                })[];
                'typescript/no-meaningless-void-operator': (string | {
                    checkNever: boolean;
                })[];
                'typescript/no-misused-new': "error";
                'typescript/no-misused-promises': (string | {
                    checksConditionals: boolean;
                    checksSpreads: boolean;
                    checksVoidReturn: {
                        arguments: boolean;
                        attributes: boolean;
                        inheritedMethods: boolean;
                        properties: boolean;
                        returns: boolean;
                        variables: boolean;
                    };
                })[];
                'typescript/no-misused-spread': (string | {
                    allow: never[];
                })[];
                'typescript/no-mixed-enums': "error";
                'typescript/no-namespace': (string | {
                    allowDeclarations: boolean;
                    allowDefinitionFiles: boolean;
                })[];
                'typescript/no-non-null-asserted-nullish-coalescing': "error";
                'typescript/no-non-null-asserted-optional-chain': "error";
                'typescript/no-non-null-assertion': "off";
                'typescript/no-redundant-type-constituents': "error";
                'typescript/no-require-imports': (string | {
                    allow: never[];
                    allowAsImport: boolean;
                })[];
                'typescript/no-restricted-types': (string | {
                    types: {};
                })[];
                'typescript/no-this-alias': (string | {
                    allowDestructuring: boolean;
                    allowedNames: never[];
                })[];
                'typescript/no-unnecessary-boolean-literal-compare': (string | {
                    allowComparingNullableBooleansToFalse: boolean;
                    allowComparingNullableBooleansToTrue: boolean;
                })[];
                'typescript/no-unnecessary-condition': (string | {
                    allowConstantLoopConditions: string;
                    checkTypePredicates: boolean;
                })[];
                'typescript/no-unnecessary-parameter-property-assignment': "error";
                'typescript/no-unnecessary-qualifier': "error";
                'typescript/no-unnecessary-template-expression': "error";
                'typescript/no-unnecessary-type-arguments': "error";
                'typescript/no-unnecessary-type-assertion': (string | {
                    checkLiteralConstAssertions: boolean;
                    typesToIgnore: never[];
                })[];
                'typescript/no-unnecessary-type-constraint': "error";
                'typescript/no-unnecessary-type-convertion': "error";
                'typescript/no-unnecessary-type-parameters': "error";
                'typescript/no-unsafe-argument': "error";
                'typescript/no-unsafe-assignment': "error";
                'typescript/no-unsafe-call': "error";
                'typescript/no-unsafe-declaration-merging': "error";
                'typescript/no-unsafe-enum-comparison': "error";
                'typescript/no-unsafe-function-type': "error";
                'typescript/no-unsafe-member-access': (string | {
                    allowOptionalChaining: boolean;
                })[];
                'typescript/no-unsafe-return': "error";
                'typescript/no-unsafe-type-assertion': "error";
                'typescript/no-unsafe-unary-minus': "error";
                'typescript/no-useless-default-assignment': "error";
                'typescript/no-useless-empty-export': "error";
                'typescript/no-var-requires': "error";
                'typescript/no-wrapper-object-types': "error";
                'typescript/non-nullable-type-assertion-style': "error";
                'typescript/only-throw-error': (string | {
                    allow: {
                        from: string;
                        name: string;
                    }[];
                    allowRethrowing: boolean;
                    allowThrowingAny: boolean;
                    allowThrowingUnknown: boolean;
                })[];
                'typescript/parameter-properties': (string | {
                    allow: never[];
                    prefer: string;
                })[];
                'typescript/prefer-as-const': "error";
                'typescript/prefer-enum-initializers': "error";
                'typescript/prefer-find': "error";
                'typescript/prefer-for-of': "error";
                'typescript/prefer-function-type': "error";
                'typescript/prefer-includes': "error";
                'typescript/prefer-literal-enum-member': (string | {
                    allowBitwiseExpressions: boolean;
                })[];
                'typescript/prefer-nullish-coalescing': (string | {
                    ignoreBooleanCoercion: boolean;
                    ignoreConditionalTests: boolean;
                    ignoreIfStatements: boolean;
                    ignoreMixedLogicalExpressions: boolean;
                    ignorePrimitives: {
                        bigint: boolean;
                        boolean: boolean;
                        number: boolean;
                        string: boolean;
                    };
                    ignoreTernaryTests: boolean;
                })[];
                'typescript/prefer-optional-chain': (string | {
                    allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: boolean;
                    checkAny: boolean;
                    checkBigInt: boolean;
                    checkBoolean: boolean;
                    checkNumber: boolean;
                    checkString: boolean;
                    checkUnknown: boolean;
                    requireNullish: boolean;
                })[];
                'typescript/prefer-promise-reject-errors': (string | {
                    allowEmptyReject: boolean;
                    allowThrowingAny: boolean;
                    allowThrowingUnknown: boolean;
                })[];
                'typescript/prefer-readonly': (string | {
                    onlyInlineLambdas: boolean;
                })[];
                'typescript/prefer-readonly-parameter-types': (string | {
                    allow: never[];
                    checkParameterProperties: boolean;
                    ignoreInferredTypes: boolean;
                    treatMethodsAsReadonly: boolean;
                })[];
                'typescript/prefer-reduce-type-parameter': "error";
                'typescript/prefer-regexp-exec': "error";
                'typescript/prefer-return-this-type': "error";
                'typescript/prefer-string-starts-ends-with': (string | {
                    allowSingleElementEquality: string;
                })[];
                'typescript/prefer-ts-expect-error': "error";
                'typescript/promise-function-async': (string | {
                    allowAny: boolean;
                    allowedPromiseNames: never[];
                    checkArrowFunctions: boolean;
                    checkFunctionDeclarations: boolean;
                    checkFunctionExpressions: boolean;
                    checkMethodDeclarations: boolean;
                })[];
                'typescript/related-getter-setter-pairs': "error";
                'typescript/require-array-sort-compare': "off";
                'typescript/require-await': "error";
                'typescript/restrict-plus-operands': (string | {
                    allowAny: boolean;
                    allowBoolean: boolean;
                    allowNullish: boolean;
                    allowNumberAndString: boolean;
                    allowRegExp: boolean;
                    skipCompoundAssignments: boolean;
                })[];
                'typescript/restrict-template-expressions': (string | {
                    allow: {
                        from: string;
                        name: string[];
                    }[];
                    allowAny: boolean;
                    allowArray: boolean;
                    allowBoolean: boolean;
                    allowNever: boolean;
                    allowNullish: boolean;
                    allowNumber: boolean;
                    allowRegExp: boolean;
                })[];
                'typescript/return-await': string[];
                'typescript/strict-boolean-expressions': "off";
                'typescript/strict-void-return': (string | {
                    allowReturnAny: boolean;
                })[];
                'typescript/switch-exhaustiveness-check': (string | {
                    allowDefaultCaseForExhaustiveSwitch: boolean;
                    considerDefaultExhaustiveForUnions: boolean;
                    defaultCaseCommentPattern: string;
                    requireDefaultForNonUnion: boolean;
                })[];
                'typescript/triple-slash-reference': (string | {
                    lib: string;
                    path: string;
                    types: string;
                })[];
                'typescript/unbound-method': (string | {
                    ignoreStatic: boolean;
                })[];
                'typescript/unified-signatures': (string | {
                    ignoreDifferentlyNamedParameters: boolean;
                    ignoreOverloadsWithDifferentJSDoc: boolean;
                })[];
                'typescript/use-unknown-in-catch-callback-variable': "error";
            };
        } | {
            rules: {
                'unicorn/catch-error-name': (string | {
                    ignore: never[];
                    name: string;
                })[];
                'unicorn/consistent-assert': "error";
                'unicorn/consistent-date-clone': "error";
                'unicorn/consistent-empty-array-spread': "error";
                'unicorn/consistent-existence-index-check': "error";
                'unicorn/consistent-function-scoping': (string | {
                    checkArrowFunctions: boolean;
                })[];
                'unicorn/empty-brace-spaces': "error";
                'unicorn/error-message': "error";
                'unicorn/escape-case': "error";
                'unicorn/explicit-length-check': (string | {
                    'non-zero': string;
                })[];
                'unicorn/filename-case': (string | {
                    case: string;
                    ignore: string;
                    multipleFileExtensions: boolean;
                })[];
                'unicorn/new-for-builtins': "error";
                'unicorn/no-abusive-eslint-disable': "error";
                'unicorn/no-accessor-recursion': "error";
                'unicorn/no-anonymous-default-export': "off";
                'unicorn/no-array-callback-reference': "error";
                'unicorn/no-array-for-each': "error";
                'unicorn/no-array-method-this-argument': "error";
                'unicorn/no-array-reduce': "off";
                'unicorn/no-array-reverse': "error";
                'unicorn/no-array-sort': "error";
                'unicorn/no-await-expression-member': "error";
                'unicorn/no-await-in-promise-methods': "error";
                'unicorn/no-console-spaces': "error";
                'unicorn/no-document-cookie': "error";
                'unicorn/no-empty-file': "error";
                'unicorn/no-hex-escape': "error";
                'unicorn/no-immediate-mutation': "error";
                'unicorn/no-instanceof-array': "error";
                'unicorn/no-instanceof-builtins': (string | {
                    exclude: never[];
                    include: never[];
                    strategy: string;
                    useErrorIsError: boolean;
                })[];
                'unicorn/no-invalid-fetch-options': "error";
                'unicorn/no-invalid-remove-event-listener': "error";
                'unicorn/no-length-as-slice-end': "error";
                'unicorn/no-lonely-if': "error";
                'unicorn/no-magic-array-flat-depth': "error";
                'unicorn/no-negation-in-equality-check': "error";
                'unicorn/no-nested-ternary': "error";
                'unicorn/no-new-array': "error";
                'unicorn/no-new-buffer': "error";
                'unicorn/no-null': "off";
                'unicorn/no-object-as-default-parameter': "error";
                'unicorn/no-process-exit': "error";
                'unicorn/no-single-promise-in-promise-methods': "error";
                'unicorn/no-static-only-class': "error";
                'unicorn/no-thenable': "error";
                'unicorn/no-this-assignment': "error";
                'unicorn/no-typeof-undefined': (string | {
                    checkGlobalVariables: boolean;
                })[];
                'unicorn/no-unnecessary-array-flat-depth': "error";
                'unicorn/no-unnecessary-array-splice-count': "error";
                'unicorn/no-unnecessary-await': "error";
                'unicorn/no-unnecessary-slice-end': "error";
                'unicorn/no-unreadable-array-destructuring': "error";
                'unicorn/no-unreadable-iife': "error";
                'unicorn/no-useless-collection-argument': "error";
                'unicorn/no-useless-error-capture-stack-trace': "error";
                'unicorn/no-useless-fallback-in-spread': "error";
                'unicorn/no-useless-length-check': "error";
                'unicorn/no-useless-promise-resolve-reject': (string | {
                    allowReject: boolean;
                })[];
                'unicorn/no-useless-spread': "error";
                'unicorn/no-useless-switch-case': "error";
                'unicorn/no-useless-undefined': (string | {
                    checkArguments: boolean;
                    checkArrowFunctionBody: boolean;
                })[];
                'unicorn/no-zero-fractions': "error";
                'unicorn/number-literal-case': "off";
                'unicorn/numeric-separators-style': (string | {
                    binary: {
                        groupLength: number;
                        minimumDigits: number;
                    };
                    hexadecimal: {
                        groupLength: number;
                        minimumDigits: number;
                    };
                    number: {
                        groupLength: number;
                        minimumDigits: number;
                    };
                    octal: {
                        groupLength: number;
                        minimumDigits: number;
                    };
                    onlyIfContainsSeparator: boolean;
                })[];
                'unicorn/prefer-add-event-listener': "error";
                'unicorn/prefer-array-find': "error";
                'unicorn/prefer-array-flat': "error";
                'unicorn/prefer-array-flat-map': "error";
                'unicorn/prefer-array-index-of': "error";
                'unicorn/prefer-array-some': "error";
                'unicorn/prefer-at': (string | {
                    checkAllIndexAccess: boolean;
                    getLastElementFunctions: never[];
                })[];
                'unicorn/prefer-bigint-literals': "error";
                'unicorn/prefer-blob-reading-methods': "error";
                'unicorn/prefer-class-fields': "error";
                'unicorn/prefer-classlist-toggle': "error";
                'unicorn/prefer-code-point': "error";
                'unicorn/prefer-date-now': "error";
                'unicorn/prefer-default-parameters': "error";
                'unicorn/prefer-dom-node-append': "error";
                'unicorn/prefer-dom-node-dataset': "error";
                'unicorn/prefer-dom-node-remove': "error";
                'unicorn/prefer-dom-node-text-content': "error";
                'unicorn/prefer-event-target': "error";
                'unicorn/prefer-global-this': "error";
                'unicorn/prefer-includes': "error";
                'unicorn/prefer-keyboard-event-key': "error";
                'unicorn/prefer-logical-operator-over-ternary': "error";
                'unicorn/prefer-math-min-max': "error";
                'unicorn/prefer-math-trunc': "error";
                'unicorn/prefer-modern-dom-apis': "error";
                'unicorn/prefer-modern-math-apis': "error";
                'unicorn/prefer-module': "error";
                'unicorn/prefer-native-coercion-functions': "error";
                'unicorn/prefer-negative-index': "error";
                'unicorn/prefer-node-protocol': "error";
                'unicorn/prefer-number-properties': (string | {
                    checkInfinity: boolean;
                    checkNaN: boolean;
                })[];
                'unicorn/prefer-object-from-entries': (string | {
                    functions: string[];
                })[];
                'unicorn/prefer-optional-catch-binding': "error";
                'unicorn/prefer-prototype-methods': "error";
                'unicorn/prefer-query-selector': "error";
                'unicorn/prefer-reflect-apply': "error";
                'unicorn/prefer-regexp-test': "error";
                'unicorn/prefer-response-static-json': "error";
                'unicorn/prefer-set-has': "error";
                'unicorn/prefer-set-size': "error";
                'unicorn/prefer-spread': "error";
                'unicorn/prefer-string-raw': "error";
                'unicorn/prefer-string-replace-all': "error";
                'unicorn/prefer-string-slice': "error";
                'unicorn/prefer-string-starts-ends-with': "error";
                'unicorn/prefer-string-trim-start-end': "error";
                'unicorn/prefer-structured-clone': (string | {
                    functions: string[];
                })[];
                'unicorn/prefer-ternary': string[];
                'unicorn/prefer-top-level-await': "error";
                'unicorn/prefer-type-error': "error";
                'unicorn/relative-url-style': string[];
                'unicorn/require-array-join-separator': "error";
                'unicorn/require-module-attributes': "error";
                'unicorn/require-module-specifiers': "error";
                'unicorn/require-number-to-fixed-digits-argument': "error";
                'unicorn/require-post-message-target-origin': "error";
                'unicorn/switch-case-braces': string[];
                'unicorn/text-encoding-identifier-case': (string | {
                    withDash: boolean;
                })[];
                'unicorn/throw-new-error': "error";
            };
        } | {
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
        })[];
    }[];
    plugins: ("eslint" | "import" | "node" | "oxc" | "promise" | "typescript" | "unicorn" | "vitest")[];
};
export declare const jsx: {
    extends: {
        extends: ({
            rules: {
                "jsx-a11y/alt-text": (string | {
                    area: never[];
                    img: string[];
                    'input[type="image"]': never[];
                    object: never[];
                })[];
                "jsx-a11y/anchor-ambiguous-text": (string | {
                    words: string[];
                })[];
                "jsx-a11y/anchor-has-content": "error";
                "jsx-a11y/anchor-is-valid": (string | {
                    validHrefs: never[];
                })[];
                "jsx-a11y/aria-activedescendant-has-tabindex": "error";
                "jsx-a11y/aria-props": "error";
                "jsx-a11y/aria-proptypes": "error";
                "jsx-a11y/aria-role": (string | {
                    allowedInvalidRoles: never[];
                    ignoreNonDOM: boolean;
                })[];
                "jsx-a11y/aria-unsupported-elements": "error";
                "jsx-a11y/autocomplete-valid": (string | {
                    inputComponents: string[];
                })[];
                "jsx-a11y/click-events-have-key-events": "error";
                "jsx-a11y/heading-has-content": (string | {
                    components: never[];
                })[];
                "jsx-a11y/html-has-lang": "error";
                "jsx-a11y/iframe-has-title": "error";
                "jsx-a11y/img-redundant-alt": (string | {
                    components: string[];
                    words: string[];
                })[];
                "jsx-a11y/label-has-associated-control": (string | {
                    assert: string;
                    controlComponents: never[];
                    depth: number;
                    labelAttributes: string[];
                    labelComponents: string[];
                })[];
                "jsx-a11y/lang": "error";
                "jsx-a11y/media-has-caption": (string | {
                    audio: string[];
                    track: string[];
                    video: string[];
                })[];
                "jsx-a11y/mouse-events-have-key-events": (string | {
                    hoverInHandlers: string[];
                    hoverOutHandlers: string[];
                })[];
                "jsx-a11y/no-access-key": "error";
                "jsx-a11y/no-aria-hidden-on-focusable": "error";
                "jsx-a11y/no-autofocus": (string | {
                    ignoreNonDOM: boolean;
                })[];
                "jsx-a11y/no-distracting-elements": (string | {
                    elements: string[];
                })[];
                "jsx-a11y/no-noninteractive-tabindex": (string | {
                    allowExpressionValues: boolean;
                    roles: string[];
                    tags: never[];
                })[];
                "jsx-a11y/no-redundant-roles": "error";
                "jsx-a11y/no-static-element-interactions": "error";
                "jsx-a11y/prefer-tag-over-role": "error";
                "jsx-a11y/role-has-required-aria-props": "error";
                "jsx-a11y/role-supports-aria-props": "error";
                "jsx-a11y/scope": "error";
                "jsx-a11y/tabindex-no-positive": "error";
            };
        } | {
            rules: {
                "react/jsx-boolean-value": (string | {
                    always: never[];
                    assumeUndefinedIsFalse: boolean;
                })[];
                "react/jsx-curly-brace-presence": (string | {
                    children: string;
                    propElementValues: string;
                    props: string;
                })[];
                "react/jsx-filename-extension": "off";
                "react/jsx-fragments": string[];
                "react/jsx-handler-names": (string | {
                    checkInlineFunctions: boolean;
                    checkLocalVariables: boolean;
                    eventHandlerPrefixes: string;
                    eventHandlerPropPrefixes: string;
                    eventHandlerPropRegex: string;
                    eventHandlerRegex: string;
                    ignoreComponentNames: never[];
                })[];
                "react/jsx-key": (string | {
                    checkFragmentShorthand: boolean;
                    checkKeyMustBeforeSpread: boolean;
                    warnOnDuplicates: boolean;
                })[];
                "react/jsx-max-depth": (string | {
                    max: number;
                })[];
                "react/jsx-no-comment-textnodes": "error";
                "react/jsx-no-constructed-context-values": "error";
                "react/jsx-no-duplicate-props": "error";
                "react/jsx-no-script-url": (string | {
                    components: {};
                    includeFromSettings: boolean;
                })[];
                "react/jsx-no-target-blank": (string | {
                    allowReferrer: boolean;
                    enforceDynamicLinks: string;
                    forms: boolean;
                    links: boolean;
                    warnOnSpreadAttributes: boolean;
                })[];
                "react/jsx-no-undef": "error";
                "react/jsx-no-useless-fragment": (string | {
                    allowExpressions: boolean;
                })[];
                "react/jsx-pascal-case": (string | {
                    allowAllCaps: boolean;
                    allowLeadingUnderscore: boolean;
                    allowNamespace: boolean;
                    ignore: never[];
                })[];
                "react/jsx-props-no-spread-multi": "error";
                "react/jsx-props-no-spreading": "off";
            };
        } | {
            rules: {
                'react-perf/jsx-no-jsx-as-prop': "error";
                'react-perf/jsx-no-new-array-as-prop': "error";
                'react-perf/jsx-no-new-function-as-prop': "error";
                'react-perf/jsx-no-new-object-as-prop': "error";
            };
        })[];
    }[];
    plugins: ("jsx-a11y" | "react" | "react-perf")[];
};
export declare const hono: {
    extends: {
        extends: {
            extends: ({
                rules: {
                    "jsx-a11y/alt-text": (string | {
                        area: never[];
                        img: string[];
                        'input[type="image"]': never[];
                        object: never[];
                    })[];
                    "jsx-a11y/anchor-ambiguous-text": (string | {
                        words: string[];
                    })[];
                    "jsx-a11y/anchor-has-content": "error";
                    "jsx-a11y/anchor-is-valid": (string | {
                        validHrefs: never[];
                    })[];
                    "jsx-a11y/aria-activedescendant-has-tabindex": "error";
                    "jsx-a11y/aria-props": "error";
                    "jsx-a11y/aria-proptypes": "error";
                    "jsx-a11y/aria-role": (string | {
                        allowedInvalidRoles: never[];
                        ignoreNonDOM: boolean;
                    })[];
                    "jsx-a11y/aria-unsupported-elements": "error";
                    "jsx-a11y/autocomplete-valid": (string | {
                        inputComponents: string[];
                    })[];
                    "jsx-a11y/click-events-have-key-events": "error";
                    "jsx-a11y/heading-has-content": (string | {
                        components: never[];
                    })[];
                    "jsx-a11y/html-has-lang": "error";
                    "jsx-a11y/iframe-has-title": "error";
                    "jsx-a11y/img-redundant-alt": (string | {
                        components: string[];
                        words: string[];
                    })[];
                    "jsx-a11y/label-has-associated-control": (string | {
                        assert: string;
                        controlComponents: never[];
                        depth: number;
                        labelAttributes: string[];
                        labelComponents: string[];
                    })[];
                    "jsx-a11y/lang": "error";
                    "jsx-a11y/media-has-caption": (string | {
                        audio: string[];
                        track: string[];
                        video: string[];
                    })[];
                    "jsx-a11y/mouse-events-have-key-events": (string | {
                        hoverInHandlers: string[];
                        hoverOutHandlers: string[];
                    })[];
                    "jsx-a11y/no-access-key": "error";
                    "jsx-a11y/no-aria-hidden-on-focusable": "error";
                    "jsx-a11y/no-autofocus": (string | {
                        ignoreNonDOM: boolean;
                    })[];
                    "jsx-a11y/no-distracting-elements": (string | {
                        elements: string[];
                    })[];
                    "jsx-a11y/no-noninteractive-tabindex": (string | {
                        allowExpressionValues: boolean;
                        roles: string[];
                        tags: never[];
                    })[];
                    "jsx-a11y/no-redundant-roles": "error";
                    "jsx-a11y/no-static-element-interactions": "error";
                    "jsx-a11y/prefer-tag-over-role": "error";
                    "jsx-a11y/role-has-required-aria-props": "error";
                    "jsx-a11y/role-supports-aria-props": "error";
                    "jsx-a11y/scope": "error";
                    "jsx-a11y/tabindex-no-positive": "error";
                };
            } | {
                rules: {
                    "react/jsx-boolean-value": (string | {
                        always: never[];
                        assumeUndefinedIsFalse: boolean;
                    })[];
                    "react/jsx-curly-brace-presence": (string | {
                        children: string;
                        propElementValues: string;
                        props: string;
                    })[];
                    "react/jsx-filename-extension": "off";
                    "react/jsx-fragments": string[];
                    "react/jsx-handler-names": (string | {
                        checkInlineFunctions: boolean;
                        checkLocalVariables: boolean;
                        eventHandlerPrefixes: string;
                        eventHandlerPropPrefixes: string;
                        eventHandlerPropRegex: string;
                        eventHandlerRegex: string;
                        ignoreComponentNames: never[];
                    })[];
                    "react/jsx-key": (string | {
                        checkFragmentShorthand: boolean;
                        checkKeyMustBeforeSpread: boolean;
                        warnOnDuplicates: boolean;
                    })[];
                    "react/jsx-max-depth": (string | {
                        max: number;
                    })[];
                    "react/jsx-no-comment-textnodes": "error";
                    "react/jsx-no-constructed-context-values": "error";
                    "react/jsx-no-duplicate-props": "error";
                    "react/jsx-no-script-url": (string | {
                        components: {};
                        includeFromSettings: boolean;
                    })[];
                    "react/jsx-no-target-blank": (string | {
                        allowReferrer: boolean;
                        enforceDynamicLinks: string;
                        forms: boolean;
                        links: boolean;
                        warnOnSpreadAttributes: boolean;
                    })[];
                    "react/jsx-no-undef": "error";
                    "react/jsx-no-useless-fragment": (string | {
                        allowExpressions: boolean;
                    })[];
                    "react/jsx-pascal-case": (string | {
                        allowAllCaps: boolean;
                        allowLeadingUnderscore: boolean;
                        allowNamespace: boolean;
                        ignore: never[];
                    })[];
                    "react/jsx-props-no-spread-multi": "error";
                    "react/jsx-props-no-spreading": "off";
                };
            } | {
                rules: {
                    'react-perf/jsx-no-jsx-as-prop': "error";
                    'react-perf/jsx-no-new-array-as-prop': "error";
                    'react-perf/jsx-no-new-function-as-prop': "error";
                    'react-perf/jsx-no-new-object-as-prop': "error";
                };
            })[];
        }[];
        plugins: ("jsx-a11y" | "react" | "react-perf")[];
    }[];
};
export declare const react: {
    extends: ({
        extends: {}[];
        overrides: {
            files: string[];
            rules: {
                "import/no-default-export": "off";
            };
        }[];
        rules: {
            "react/jsx-filename-extension": (string | {
                allow: string;
                extensions: string[];
                ignoreFilesWithoutCode: boolean;
            })[];
        };
    } | {
        extends: {
            extends: ({
                rules: {
                    'eslint/accessor-pairs': (string | {
                        enforceForClassMembers: boolean;
                        enforceForTSTypes: boolean;
                        getWithoutSet: boolean;
                        setWithoutGet: boolean;
                    })[];
                    'eslint/array-callback-return': (string | {
                        allowImplicit: boolean;
                        allowVoid: boolean;
                        checkForEach: boolean;
                    })[];
                    'eslint/arrow-body-style': (string | {
                        requireReturnForObjectLiteral: boolean;
                    })[];
                    'eslint/block-scoped-var': "error";
                    'eslint/capitalized-comments': (string | {
                        block: {
                            ignoreConsecutiveComments: boolean;
                            ignoreInlineComments: boolean;
                            ignorePattern: string;
                        };
                        line: {
                            ignoreConsecutiveComments: boolean;
                            ignoreInlineComments: boolean;
                            ignorePattern: string;
                        };
                    })[];
                    'eslint/class-methods-use-this': (string | {
                        enforceForClassFields: boolean;
                        exceptMethods: never[];
                        ignoreClassesWithImplements: null;
                        ignoreOverrideMethods: boolean;
                    })[];
                    'eslint/complexity': "off";
                    'eslint/constructor-super': "error";
                    'eslint/curly': string[];
                    'eslint/default-case': (string | {
                        commentPattern: string;
                    })[];
                    'eslint/default-case-last': "error";
                    'eslint/default-param-last': "error";
                    'eslint/eqeqeq': string[];
                    'eslint/for-direction': "error";
                    'eslint/func-names': (string | {
                        generators: null;
                    })[];
                    'eslint/func-style': (string | {
                        allowArrowFunctions: boolean;
                        allowTypeAnnotation: boolean;
                        overrides: {
                            namedExports: null;
                        };
                    })[];
                    'eslint/getter-return': (string | {
                        allowImplicit: boolean;
                    })[];
                    'eslint/grouped-accessor-pairs': (string | {
                        enforceForTSTypes: boolean;
                    })[];
                    'eslint/guard-for-in': "error";
                    'eslint/id-length': (string | {
                        checkGeneric: boolean;
                        exceptionPatterns: never[];
                        exceptions: never[];
                        max: number;
                        min: number;
                        properties: string;
                    })[];
                    'eslint/init-declarations': string[];
                    'eslint/max-classes-per-file': (string | {
                        ignoreExpressions: boolean;
                        max: number;
                    })[];
                    'eslint/max-depth': "off";
                    'eslint/max-lines': "off";
                    'eslint/max-lines-per-function': "off";
                    'eslint/max-nested-callbacks': "off";
                    'eslint/max-params': "off";
                    'eslint/max-statements': "off";
                    'eslint/new-cap': (string | {
                        capIsNew: boolean;
                        capIsNewExceptionPattern: string;
                        capIsNewExceptions: never[];
                        newIsCap: boolean;
                        newIsCapExceptionPattern: string;
                        newIsCapExceptions: string[];
                        properties: boolean;
                    })[];
                    'eslint/no-alert': "error";
                    'eslint/no-array-constructor': "error";
                    'eslint/no-async-promise-executor': "error";
                    'eslint/no-await-in-loop': "error";
                    'eslint/no-bitwise': (string | {
                        allow: never[];
                        int32Hint: boolean;
                    })[];
                    'eslint/no-caller': "error";
                    'eslint/no-case-declarations': "error";
                    'eslint/no-class-assign': "error";
                    'eslint/no-compare-neg-zero': "error";
                    'eslint/no-cond-assign': string[];
                    'eslint/no-console': "off";
                    'eslint/no-const-assign': "error";
                    'eslint/no-constant-binary-expression': "error";
                    'eslint/no-constant-condition': (string | {
                        checkLoops: string;
                    })[];
                    'eslint/no-constructor-return': "error";
                    'eslint/no-continue': "error";
                    'eslint/no-control-regex': "error";
                    'eslint/no-debugger': "error";
                    'eslint/no-delete-var': "error";
                    'eslint/no-div-regex': "error";
                    'eslint/no-dupe-class-members': "error";
                    'eslint/no-dupe-else-if': "error";
                    'eslint/no-dupe-keys': "error";
                    'eslint/no-duplicate-case': "error";
                    'eslint/no-duplicate-imports': (string | {
                        allowSeparateTypeImports: boolean;
                        includeExports: boolean;
                    })[];
                    'eslint/no-else-return': (string | {
                        allowElseIf: boolean;
                    })[];
                    'eslint/no-empty': (string | {
                        allowEmptyCatch: boolean;
                    })[];
                    'eslint/no-empty-character-class': "error";
                    'eslint/no-empty-function': "error";
                    'eslint/no-empty-pattern': "error";
                    'eslint/no-empty-static-block': "error";
                    'eslint/no-eq-null': "error";
                    'eslint/no-eval': (string | {
                        allowIndirect: boolean;
                    })[];
                    'eslint/no-ex-assign': "error";
                    'eslint/no-extend-native': (string | {
                        exceptions: never[];
                    })[];
                    'eslint/no-extra-bind': "error";
                    'eslint/no-extra-boolean-cast': "error";
                    'eslint/no-extra-label': "error";
                    'eslint/no-fallthrough': (string | {
                        allowEmptyCase: boolean;
                        commentPattern: null;
                        reportUnusedFallthroughComment: boolean;
                    })[];
                    'eslint/no-func-assign': "error";
                    'eslint/no-global-assign': (string | {
                        exceptions: never[];
                    })[];
                    'eslint/no-implicit-coercion': (string | {
                        allow: string[];
                        boolean: boolean;
                        disallowTemplateShorthand: boolean;
                        number: boolean;
                        string: boolean;
                    })[];
                    'eslint/no-import-assign': "error";
                    'eslint/no-inline-comments': (string | {
                        ignorePattern: null;
                    })[];
                    'eslint/no-inner-declarations': "off";
                    'eslint/no-invalid-regexp': (string | {
                        allowConstructorFlags: never[];
                    })[];
                    'eslint/no-irregular-whitespace': "error";
                    'eslint/no-iterator': "error";
                    'eslint/no-label-var': "error";
                    'eslint/no-labels': (string | {
                        allowLoop: boolean;
                        allowSwitch: boolean;
                    })[];
                    'eslint/no-lone-blocks': "error";
                    'eslint/no-lonely-if': "error";
                    'eslint/no-loop-func': "error";
                    'eslint/no-loss-of-precision': "error";
                    'eslint/no-magic-numbers': (string | {
                        detectObjects: boolean;
                        enforceConst: boolean;
                        ignore: number[];
                        ignoreArrayIndexes: boolean;
                        ignoreClassFieldInitialValues: boolean;
                        ignoreDefaultValues: boolean;
                        ignoreEnums: boolean;
                        ignoreNumericLiteralTypes: boolean;
                        ignoreReadonlyClassProperties: boolean;
                        ignoreTypeIndexes: boolean;
                    })[];
                    'eslint/no-misleading-character-class': (string | {
                        allowEscape: boolean;
                    })[];
                    'eslint/no-multi-assign': (string | {
                        ignoreNonDeclaration: boolean;
                    })[];
                    'eslint/no-multi-str': "error";
                    'eslint/no-negated-condition': "error";
                    'eslint/no-nested-ternary': "error";
                    'eslint/no-new': "error";
                    'eslint/no-new-func': "error";
                    'eslint/no-new-native-nonconstructor': "error";
                    'eslint/no-new-wrappers': "error";
                    'eslint/no-nonoctal-decimal-escape': "error";
                    'eslint/no-obj-calls': "error";
                    'eslint/no-object-constructor': "error";
                    'eslint/no-param-reassign': (string | {
                        ignorePropertyModificationsFor: never[];
                        ignorePropertyModificationsForRegex: never[];
                        props: boolean;
                    })[];
                    'eslint/no-plusplus': "off";
                    'eslint/no-promise-executor-return': (string | {
                        allowVoid: boolean;
                    })[];
                    'eslint/no-proto': "error";
                    'eslint/no-prototype-builtins': "error";
                    'eslint/no-redeclare': (string | {
                        builtinGlobals: boolean;
                    })[];
                    'eslint/no-regex-spaces': "error";
                    'eslint/no-restricted-globals': (string | {
                        restrictedGlobals: {};
                    })[];
                    'eslint/no-restricted-imports': (string | {
                        paths: never[];
                        patterns: never[];
                    })[];
                    'eslint/no-return-assign': string[];
                    'eslint/no-script-url': "error";
                    'eslint/no-self-assign': (string | {
                        props: boolean;
                    })[];
                    'eslint/no-self-compare': "error";
                    'eslint/no-sequences': (string | {
                        allowInParentheses: boolean;
                    })[];
                    'eslint/no-setter-return': "error";
                    'eslint/no-shadow': "off";
                    'eslint/no-shadow-restricted-names': (string | {
                        reportGlobalThis: boolean;
                    })[];
                    'eslint/no-sparse-arrays': "error";
                    'eslint/no-template-curly-in-string': "error";
                    'eslint/no-ternary': "off";
                    'eslint/no-this-before-super': "error";
                    'eslint/no-unassigned-vars': "error";
                    'eslint/no-undef': (string | {
                        typeof: boolean;
                    })[];
                    'eslint/no-undefined': "error";
                    'eslint/no-unexpected-multiline': "error";
                    'eslint/no-unmodified-loop-condition': "error";
                    'eslint/no-unneeded-ternary': (string | {
                        defaultAssignment: boolean;
                    })[];
                    'eslint/no-unreachable': "error";
                    'eslint/no-unsafe-finally': "error";
                    'eslint/no-unsafe-negation': (string | {
                        enforceForOrderingRelations: boolean;
                    })[];
                    'eslint/no-unsafe-optional-chaining': (string | {
                        disallowArithmeticOperators: boolean;
                    })[];
                    'eslint/no-unused-expressions': (string | {
                        allowShortCircuit: boolean;
                        allowTaggedTemplates: boolean;
                        allowTernary: boolean;
                        enforceForJSX: boolean;
                    })[];
                    'eslint/no-unused-labels': "error";
                    'eslint/no-unused-private-class-members': "error";
                    'eslint/no-unused-vars': (string | {
                        args: string;
                        argsIgnorePattern: string;
                        caughtErrors: string;
                        caughtErrorsIgnorePattern: string;
                        destructuredArrayIgnorePattern: string;
                        fix: {
                            imports: string;
                            variables: string;
                        };
                        ignoreClassWithStaticInitBlock: boolean;
                        ignoreRestSiblings: boolean;
                        ignoreUsingDeclarations: boolean;
                        reportUsedIgnorePattern: boolean;
                        reportVarsOnlyUsedAsTypes: boolean;
                        vars: string;
                        varsIgnorePattern: string;
                    })[];
                    'eslint/no-use-before-define': (string | {
                        allowNamedExports: boolean;
                        classes: boolean;
                        enums: boolean;
                        functions: boolean;
                        ignoreTypeReferences: boolean;
                        typedefs: boolean;
                        variables: boolean;
                    })[];
                    'eslint/no-useless-backreference': "error";
                    'eslint/no-useless-call': "error";
                    'eslint/no-useless-catch': "error";
                    'eslint/no-useless-computed-key': (string | {
                        enforceForClassMembers: boolean;
                    })[];
                    'eslint/no-useless-concat': "error";
                    'eslint/no-useless-constructor': "error";
                    'eslint/no-useless-escape': (string | {
                        allowRegexCharacters: never[];
                    })[];
                    'eslint/no-useless-rename': (string | {
                        ignoreDestructuring: boolean;
                        ignoreExport: boolean;
                        ignoreImport: boolean;
                    })[];
                    'eslint/no-useless-return': "error";
                    'eslint/no-var': "error";
                    'eslint/no-void': (string | {
                        allowAsStatement: boolean;
                    })[];
                    'eslint/no-warning-comments': "off";
                    'eslint/no-with': "error";
                    'eslint/operator-assignment': string[];
                    'eslint/prefer-const': (string | {
                        destructuring: string;
                        ignoreReadBeforeAssign: boolean;
                    })[];
                    'eslint/prefer-destructuring': (string | {
                        AssignmentExpression: {
                            array: boolean;
                            object: boolean;
                        };
                        VariableDeclarator: {
                            array: boolean;
                            object: boolean;
                        };
                        enforceForRenamedProperties: boolean;
                    })[];
                    'eslint/prefer-exponentiation-operator': "error";
                    'eslint/prefer-numeric-literals': "error";
                    'eslint/prefer-object-has-own': "error";
                    'eslint/prefer-object-spread': "error";
                    'eslint/prefer-promise-reject-errors': (string | {
                        allowEmptyReject: boolean;
                    })[];
                    'eslint/prefer-rest-params': "error";
                    'eslint/prefer-spread': "error";
                    'eslint/prefer-template': "error";
                    'eslint/preserve-caught-error': (string | {
                        requireCatchParameter: boolean;
                    })[];
                    'eslint/radix': "error";
                    'eslint/require-await': "off";
                    'eslint/require-yield': "error";
                    'eslint/sort-imports': (string | {
                        allowSeparatedGroups: boolean;
                        ignoreCase: boolean;
                        ignoreDeclarationSort: boolean;
                        ignoreMemberSort: boolean;
                        memberSyntaxSortOrder: string[];
                    })[];
                    'eslint/sort-keys': (string | {
                        allowLineSeparatedGroups: boolean;
                        caseSensitive: boolean;
                        minKeys: number;
                        natural: boolean;
                    })[];
                    'eslint/sort-vars': (string | {
                        ignoreCase: boolean;
                    })[];
                    'eslint/symbol-description': "error";
                    'eslint/unicode-bom': string[];
                    'eslint/use-isnan': (string | {
                        enforceForIndexOf: boolean;
                        enforceForSwitchCase: boolean;
                    })[];
                    'eslint/valid-typeof': (string | {
                        requireStringLiterals: boolean;
                    })[];
                    'eslint/vars-on-top': "error";
                    'eslint/yoda': (string | {
                        exceptRange: boolean;
                        onlyEquality: boolean;
                    })[];
                };
            } | {
                overrides: {
                    files: string[];
                    rules: {
                        'import/no-default-export': "off";
                    };
                }[];
                rules: {
                    'import/consistent-type-specifier-style': string[];
                    'import/default': "error";
                    'import/export': "error";
                    'import/exports-last': "off";
                    'import/extensions': (string | {
                        checkTypeImports: boolean;
                        ignorePackages: boolean;
                        pathGroupOverrides: never[];
                    })[];
                    'import/first': string[];
                    'import/group-exports': "off";
                    'import/max-dependencies': "off";
                    'import/named': "error";
                    'import/namespace': (string | {
                        allowComputed: boolean;
                    })[];
                    'import/no-absolute-path': (string | {
                        amd: boolean;
                        commonjs: boolean;
                        esmodule: boolean;
                    })[];
                    'import/no-amd': "error";
                    'import/no-anonymous-default-export': (string | {
                        allowAnonymousClass: boolean;
                        allowAnonymousFunction: boolean;
                        allowArray: boolean;
                        allowArrowFunction: boolean;
                        allowCallExpression: boolean;
                        allowLiteral: boolean;
                        allowNew: boolean;
                        allowObject: boolean;
                    })[];
                    'import/no-commonjs': "error";
                    'import/no-cycle': (string | {
                        allowUnsafeDynamicCyclicDependency: boolean;
                        ignoreExternal: boolean;
                        ignoreTypes: boolean;
                        maxDepth: number;
                    })[];
                    'import/no-default-export': "error";
                    'import/no-duplicates': (string | {
                        considerQueryString: boolean;
                        preferInline: boolean;
                    })[];
                    'import/no-dynamic-require': (string | {
                        esmodule: boolean;
                    })[];
                    'import/no-empty-named-blocks': "error";
                    'import/no-mutable-exports': "error";
                    'import/no-named-as-default': "error";
                    'import/no-named-as-default-member': "error";
                    'import/no-named-default': "error";
                    'import/no-named-export': "off";
                    'import/no-namespace': (string | {
                        ignore: never[];
                    })[];
                    'import/no-nodejs-modules': "off";
                    'import/no-relative-parent-imports': "error";
                    'import/no-self-import': "error";
                    'import/no-unassigned-import': "off";
                    'import/no-webpack-loader-syntax': "error";
                    'import/prefer-default-export': "off";
                    'import/unambiguous': "error";
                };
            } | {
                rules: {
                    'node/global-require': "error";
                    'node/no-exports-assign': "error";
                    'node/no-new-require': "error";
                    'node/no-path-concat': "error";
                    'node/no-process-env': "off";
                };
            } | {
                rules: {
                    'oxc/approx-constant': "error";
                    'oxc/bad-array-method-on-arguments': "error";
                    'oxc/bad-bitwise-operator': "error";
                    'oxc/bad-char-at-comparison': "error";
                    'oxc/bad-comparison-sequence': "error";
                    'oxc/bad-min-max-func': "error";
                    'oxc/bad-object-literal-comparison': "error";
                    'oxc/bad-replace-all-arg': "error";
                    'oxc/branches-sharing-code': "error";
                    'oxc/const-comparisons': "error";
                    'oxc/double-comparisons': "error";
                    'oxc/erasing-op': "error";
                    'oxc/misrefactored-assign-op': "error";
                    'oxc/missing-throw': "error";
                    'oxc/no-accumulating-spread': "error";
                    'oxc/no-async-await': "off";
                    'oxc/no-async-endpoint-handlers': (string | {
                        allowedNames: never[];
                    })[];
                    'oxc/no-barrel-file': (string | {
                        threshold: number;
                    })[];
                    'oxc/no-const-enum': "error";
                    'oxc/no-map-spread': (string | {
                        ignoreArgs: boolean;
                        ignoreRereads: boolean;
                    })[];
                    'oxc/no-optional-chaining': "off";
                    'oxc/no-rest-spread-properties': "off";
                    'oxc/no-this-in-exported-function': "error";
                    'oxc/number-arg-out-of-range': "error";
                    'oxc/only-used-in-recursion': "error";
                    'oxc/uninvoked-array-callback': "error";
                };
            } | {
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
            } | {
                rules: {
                    'typescript/adjacent-overload-signatures': "error";
                    'typescript/array-type': (string | {
                        default: string;
                        readonly: string;
                    })[];
                    'typescript/await-thenable': "error";
                    'typescript/ban-ts-comment': (string | {
                        minimumDescriptionLength: number;
                        'ts-check': boolean;
                        'ts-expect-error': string;
                        'ts-ignore': boolean;
                        'ts-nocheck': string;
                    })[];
                    'typescript/ban-tslint-comment': "error";
                    'typescript/class-literal-property-style': string[];
                    'typescript/consistent-generic-constructors': (string | {
                        option: string;
                    })[];
                    'typescript/consistent-indexed-object-style': string[];
                    'typescript/consistent-return': (string | {
                        treatUndefinedAsUnspecified: boolean;
                    })[];
                    'typescript/consistent-type-assertions': (string | {
                        assertionStyle: string;
                    })[];
                    'typescript/consistent-type-definitions': string[];
                    'typescript/consistent-type-exports': (string | {
                        fixMixedExportsWithInlineTypeSpecifier: boolean;
                    })[];
                    'typescript/consistent-type-imports': (string | {
                        disallowTypeAnnotations: boolean;
                        fixStyle: string;
                        prefer: string;
                    })[];
                    'typescript/dot-notation': (string | {
                        allowIndexSignaturePropertyAccess: boolean;
                        allowKeywords: boolean;
                        allowPattern: string;
                        allowPrivateClassPropertyAccess: boolean;
                        allowProtectedClassPropertyAccess: boolean;
                    })[];
                    'typescript/explicit-function-return-type': (string | {
                        allowConciseArrowFunctionExpressionsStartingWithVoid: boolean;
                        allowDirectConstAssertionInArrowFunctions: boolean;
                        allowExpressions: boolean;
                        allowFunctionsWithoutTypeParameters: boolean;
                        allowHigherOrderFunctions: boolean;
                        allowIIFEs: boolean;
                        allowTypedFunctionExpressions: boolean;
                        allowedNames: never[];
                    })[];
                    'typescript/explicit-module-boundary-types': (string | {
                        allowArgumentsExplicitlyTypedAsAny: boolean;
                        allowDirectConstAssertionInArrowFunctions: boolean;
                        allowHigherOrderFunctions: boolean;
                        allowOverloadFunctions: boolean;
                        allowTypedFunctionExpressions: boolean;
                        allowedNames: never[];
                    })[];
                    'typescript/no-array-delete': "error";
                    'typescript/no-base-to-string': (string | {
                        checkUnknown: boolean;
                        ignoredTypeNames: string[];
                    })[];
                    'typescript/no-confusing-non-null-assertion': "error";
                    'typescript/no-confusing-void-expression': (string | {
                        ignoreArrowShorthand: boolean;
                        ignoreVoidOperator: boolean;
                        ignoreVoidReturningFunctions: boolean;
                    })[];
                    'typescript/no-deprecated': (string | {
                        allow: never[];
                    })[];
                    'typescript/no-duplicate-enum-values': "error";
                    'typescript/no-duplicate-type-constituents': (string | {
                        ignoreIntersections: boolean;
                        ignoreUnions: boolean;
                    })[];
                    'typescript/no-dynamic-delete': "error";
                    'typescript/no-empty-interface': (string | {
                        allowSingleExtends: boolean;
                    })[];
                    'typescript/no-empty-object-type': (string | {
                        allowInterfaces: string;
                        allowObjectTypes: string;
                        allowWithName: string;
                    })[];
                    'typescript/no-explicit-any': (string | {
                        fixToUnknown: boolean;
                        ignoreRestArgs: boolean;
                    })[];
                    'typescript/no-extra-non-null-assertion': "error";
                    'typescript/no-extraneous-class': (string | {
                        allowConstructorOnly: boolean;
                        allowEmpty: boolean;
                        allowStaticOnly: boolean;
                        allowWithDecorator: boolean;
                    })[];
                    'typescript/no-floating-promises': (string | {
                        allowForKnownSafeCalls: never[];
                        allowForKnownSafePromises: never[];
                        checkThenables: boolean;
                        ignoreIIFE: boolean;
                        ignoreVoid: boolean;
                    })[];
                    'typescript/no-for-in-array': "error";
                    'typescript/no-implied-eval': "error";
                    'typescript/no-import-type-side-effects': "error";
                    'typescript/no-inferrable-types': (string | {
                        ignoreParameters: boolean;
                        ignoreProperties: boolean;
                    })[];
                    'typescript/no-invalid-void-type': (string | {
                        allowAsThisParameter: boolean;
                        allowInGenericTypeArguments: boolean;
                    })[];
                    'typescript/no-meaningless-void-operator': (string | {
                        checkNever: boolean;
                    })[];
                    'typescript/no-misused-new': "error";
                    'typescript/no-misused-promises': (string | {
                        checksConditionals: boolean;
                        checksSpreads: boolean;
                        checksVoidReturn: {
                            arguments: boolean;
                            attributes: boolean;
                            inheritedMethods: boolean;
                            properties: boolean;
                            returns: boolean;
                            variables: boolean;
                        };
                    })[];
                    'typescript/no-misused-spread': (string | {
                        allow: never[];
                    })[];
                    'typescript/no-mixed-enums': "error";
                    'typescript/no-namespace': (string | {
                        allowDeclarations: boolean;
                        allowDefinitionFiles: boolean;
                    })[];
                    'typescript/no-non-null-asserted-nullish-coalescing': "error";
                    'typescript/no-non-null-asserted-optional-chain': "error";
                    'typescript/no-non-null-assertion': "off";
                    'typescript/no-redundant-type-constituents': "error";
                    'typescript/no-require-imports': (string | {
                        allow: never[];
                        allowAsImport: boolean;
                    })[];
                    'typescript/no-restricted-types': (string | {
                        types: {};
                    })[];
                    'typescript/no-this-alias': (string | {
                        allowDestructuring: boolean;
                        allowedNames: never[];
                    })[];
                    'typescript/no-unnecessary-boolean-literal-compare': (string | {
                        allowComparingNullableBooleansToFalse: boolean;
                        allowComparingNullableBooleansToTrue: boolean;
                    })[];
                    'typescript/no-unnecessary-condition': (string | {
                        allowConstantLoopConditions: string;
                        checkTypePredicates: boolean;
                    })[];
                    'typescript/no-unnecessary-parameter-property-assignment': "error";
                    'typescript/no-unnecessary-qualifier': "error";
                    'typescript/no-unnecessary-template-expression': "error";
                    'typescript/no-unnecessary-type-arguments': "error";
                    'typescript/no-unnecessary-type-assertion': (string | {
                        checkLiteralConstAssertions: boolean;
                        typesToIgnore: never[];
                    })[];
                    'typescript/no-unnecessary-type-constraint': "error";
                    'typescript/no-unnecessary-type-convertion': "error";
                    'typescript/no-unnecessary-type-parameters': "error";
                    'typescript/no-unsafe-argument': "error";
                    'typescript/no-unsafe-assignment': "error";
                    'typescript/no-unsafe-call': "error";
                    'typescript/no-unsafe-declaration-merging': "error";
                    'typescript/no-unsafe-enum-comparison': "error";
                    'typescript/no-unsafe-function-type': "error";
                    'typescript/no-unsafe-member-access': (string | {
                        allowOptionalChaining: boolean;
                    })[];
                    'typescript/no-unsafe-return': "error";
                    'typescript/no-unsafe-type-assertion': "error";
                    'typescript/no-unsafe-unary-minus': "error";
                    'typescript/no-useless-default-assignment': "error";
                    'typescript/no-useless-empty-export': "error";
                    'typescript/no-var-requires': "error";
                    'typescript/no-wrapper-object-types': "error";
                    'typescript/non-nullable-type-assertion-style': "error";
                    'typescript/only-throw-error': (string | {
                        allow: {
                            from: string;
                            name: string;
                        }[];
                        allowRethrowing: boolean;
                        allowThrowingAny: boolean;
                        allowThrowingUnknown: boolean;
                    })[];
                    'typescript/parameter-properties': (string | {
                        allow: never[];
                        prefer: string;
                    })[];
                    'typescript/prefer-as-const': "error";
                    'typescript/prefer-enum-initializers': "error";
                    'typescript/prefer-find': "error";
                    'typescript/prefer-for-of': "error";
                    'typescript/prefer-function-type': "error";
                    'typescript/prefer-includes': "error";
                    'typescript/prefer-literal-enum-member': (string | {
                        allowBitwiseExpressions: boolean;
                    })[];
                    'typescript/prefer-nullish-coalescing': (string | {
                        ignoreBooleanCoercion: boolean;
                        ignoreConditionalTests: boolean;
                        ignoreIfStatements: boolean;
                        ignoreMixedLogicalExpressions: boolean;
                        ignorePrimitives: {
                            bigint: boolean;
                            boolean: boolean;
                            number: boolean;
                            string: boolean;
                        };
                        ignoreTernaryTests: boolean;
                    })[];
                    'typescript/prefer-optional-chain': (string | {
                        allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: boolean;
                        checkAny: boolean;
                        checkBigInt: boolean;
                        checkBoolean: boolean;
                        checkNumber: boolean;
                        checkString: boolean;
                        checkUnknown: boolean;
                        requireNullish: boolean;
                    })[];
                    'typescript/prefer-promise-reject-errors': (string | {
                        allowEmptyReject: boolean;
                        allowThrowingAny: boolean;
                        allowThrowingUnknown: boolean;
                    })[];
                    'typescript/prefer-readonly': (string | {
                        onlyInlineLambdas: boolean;
                    })[];
                    'typescript/prefer-readonly-parameter-types': (string | {
                        allow: never[];
                        checkParameterProperties: boolean;
                        ignoreInferredTypes: boolean;
                        treatMethodsAsReadonly: boolean;
                    })[];
                    'typescript/prefer-reduce-type-parameter': "error";
                    'typescript/prefer-regexp-exec': "error";
                    'typescript/prefer-return-this-type': "error";
                    'typescript/prefer-string-starts-ends-with': (string | {
                        allowSingleElementEquality: string;
                    })[];
                    'typescript/prefer-ts-expect-error': "error";
                    'typescript/promise-function-async': (string | {
                        allowAny: boolean;
                        allowedPromiseNames: never[];
                        checkArrowFunctions: boolean;
                        checkFunctionDeclarations: boolean;
                        checkFunctionExpressions: boolean;
                        checkMethodDeclarations: boolean;
                    })[];
                    'typescript/related-getter-setter-pairs': "error";
                    'typescript/require-array-sort-compare': "off";
                    'typescript/require-await': "error";
                    'typescript/restrict-plus-operands': (string | {
                        allowAny: boolean;
                        allowBoolean: boolean;
                        allowNullish: boolean;
                        allowNumberAndString: boolean;
                        allowRegExp: boolean;
                        skipCompoundAssignments: boolean;
                    })[];
                    'typescript/restrict-template-expressions': (string | {
                        allow: {
                            from: string;
                            name: string[];
                        }[];
                        allowAny: boolean;
                        allowArray: boolean;
                        allowBoolean: boolean;
                        allowNever: boolean;
                        allowNullish: boolean;
                        allowNumber: boolean;
                        allowRegExp: boolean;
                    })[];
                    'typescript/return-await': string[];
                    'typescript/strict-boolean-expressions': "off";
                    'typescript/strict-void-return': (string | {
                        allowReturnAny: boolean;
                    })[];
                    'typescript/switch-exhaustiveness-check': (string | {
                        allowDefaultCaseForExhaustiveSwitch: boolean;
                        considerDefaultExhaustiveForUnions: boolean;
                        defaultCaseCommentPattern: string;
                        requireDefaultForNonUnion: boolean;
                    })[];
                    'typescript/triple-slash-reference': (string | {
                        lib: string;
                        path: string;
                        types: string;
                    })[];
                    'typescript/unbound-method': (string | {
                        ignoreStatic: boolean;
                    })[];
                    'typescript/unified-signatures': (string | {
                        ignoreDifferentlyNamedParameters: boolean;
                        ignoreOverloadsWithDifferentJSDoc: boolean;
                    })[];
                    'typescript/use-unknown-in-catch-callback-variable': "error";
                };
            } | {
                rules: {
                    'unicorn/catch-error-name': (string | {
                        ignore: never[];
                        name: string;
                    })[];
                    'unicorn/consistent-assert': "error";
                    'unicorn/consistent-date-clone': "error";
                    'unicorn/consistent-empty-array-spread': "error";
                    'unicorn/consistent-existence-index-check': "error";
                    'unicorn/consistent-function-scoping': (string | {
                        checkArrowFunctions: boolean;
                    })[];
                    'unicorn/empty-brace-spaces': "error";
                    'unicorn/error-message': "error";
                    'unicorn/escape-case': "error";
                    'unicorn/explicit-length-check': (string | {
                        'non-zero': string;
                    })[];
                    'unicorn/filename-case': (string | {
                        case: string;
                        ignore: string;
                        multipleFileExtensions: boolean;
                    })[];
                    'unicorn/new-for-builtins': "error";
                    'unicorn/no-abusive-eslint-disable': "error";
                    'unicorn/no-accessor-recursion': "error";
                    'unicorn/no-anonymous-default-export': "off";
                    'unicorn/no-array-callback-reference': "error";
                    'unicorn/no-array-for-each': "error";
                    'unicorn/no-array-method-this-argument': "error";
                    'unicorn/no-array-reduce': "off";
                    'unicorn/no-array-reverse': "error";
                    'unicorn/no-array-sort': "error";
                    'unicorn/no-await-expression-member': "error";
                    'unicorn/no-await-in-promise-methods': "error";
                    'unicorn/no-console-spaces': "error";
                    'unicorn/no-document-cookie': "error";
                    'unicorn/no-empty-file': "error";
                    'unicorn/no-hex-escape': "error";
                    'unicorn/no-immediate-mutation': "error";
                    'unicorn/no-instanceof-array': "error";
                    'unicorn/no-instanceof-builtins': (string | {
                        exclude: never[];
                        include: never[];
                        strategy: string;
                        useErrorIsError: boolean;
                    })[];
                    'unicorn/no-invalid-fetch-options': "error";
                    'unicorn/no-invalid-remove-event-listener': "error";
                    'unicorn/no-length-as-slice-end': "error";
                    'unicorn/no-lonely-if': "error";
                    'unicorn/no-magic-array-flat-depth': "error";
                    'unicorn/no-negation-in-equality-check': "error";
                    'unicorn/no-nested-ternary': "error";
                    'unicorn/no-new-array': "error";
                    'unicorn/no-new-buffer': "error";
                    'unicorn/no-null': "off";
                    'unicorn/no-object-as-default-parameter': "error";
                    'unicorn/no-process-exit': "error";
                    'unicorn/no-single-promise-in-promise-methods': "error";
                    'unicorn/no-static-only-class': "error";
                    'unicorn/no-thenable': "error";
                    'unicorn/no-this-assignment': "error";
                    'unicorn/no-typeof-undefined': (string | {
                        checkGlobalVariables: boolean;
                    })[];
                    'unicorn/no-unnecessary-array-flat-depth': "error";
                    'unicorn/no-unnecessary-array-splice-count': "error";
                    'unicorn/no-unnecessary-await': "error";
                    'unicorn/no-unnecessary-slice-end': "error";
                    'unicorn/no-unreadable-array-destructuring': "error";
                    'unicorn/no-unreadable-iife': "error";
                    'unicorn/no-useless-collection-argument': "error";
                    'unicorn/no-useless-error-capture-stack-trace': "error";
                    'unicorn/no-useless-fallback-in-spread': "error";
                    'unicorn/no-useless-length-check': "error";
                    'unicorn/no-useless-promise-resolve-reject': (string | {
                        allowReject: boolean;
                    })[];
                    'unicorn/no-useless-spread': "error";
                    'unicorn/no-useless-switch-case': "error";
                    'unicorn/no-useless-undefined': (string | {
                        checkArguments: boolean;
                        checkArrowFunctionBody: boolean;
                    })[];
                    'unicorn/no-zero-fractions': "error";
                    'unicorn/number-literal-case': "off";
                    'unicorn/numeric-separators-style': (string | {
                        binary: {
                            groupLength: number;
                            minimumDigits: number;
                        };
                        hexadecimal: {
                            groupLength: number;
                            minimumDigits: number;
                        };
                        number: {
                            groupLength: number;
                            minimumDigits: number;
                        };
                        octal: {
                            groupLength: number;
                            minimumDigits: number;
                        };
                        onlyIfContainsSeparator: boolean;
                    })[];
                    'unicorn/prefer-add-event-listener': "error";
                    'unicorn/prefer-array-find': "error";
                    'unicorn/prefer-array-flat': "error";
                    'unicorn/prefer-array-flat-map': "error";
                    'unicorn/prefer-array-index-of': "error";
                    'unicorn/prefer-array-some': "error";
                    'unicorn/prefer-at': (string | {
                        checkAllIndexAccess: boolean;
                        getLastElementFunctions: never[];
                    })[];
                    'unicorn/prefer-bigint-literals': "error";
                    'unicorn/prefer-blob-reading-methods': "error";
                    'unicorn/prefer-class-fields': "error";
                    'unicorn/prefer-classlist-toggle': "error";
                    'unicorn/prefer-code-point': "error";
                    'unicorn/prefer-date-now': "error";
                    'unicorn/prefer-default-parameters': "error";
                    'unicorn/prefer-dom-node-append': "error";
                    'unicorn/prefer-dom-node-dataset': "error";
                    'unicorn/prefer-dom-node-remove': "error";
                    'unicorn/prefer-dom-node-text-content': "error";
                    'unicorn/prefer-event-target': "error";
                    'unicorn/prefer-global-this': "error";
                    'unicorn/prefer-includes': "error";
                    'unicorn/prefer-keyboard-event-key': "error";
                    'unicorn/prefer-logical-operator-over-ternary': "error";
                    'unicorn/prefer-math-min-max': "error";
                    'unicorn/prefer-math-trunc': "error";
                    'unicorn/prefer-modern-dom-apis': "error";
                    'unicorn/prefer-modern-math-apis': "error";
                    'unicorn/prefer-module': "error";
                    'unicorn/prefer-native-coercion-functions': "error";
                    'unicorn/prefer-negative-index': "error";
                    'unicorn/prefer-node-protocol': "error";
                    'unicorn/prefer-number-properties': (string | {
                        checkInfinity: boolean;
                        checkNaN: boolean;
                    })[];
                    'unicorn/prefer-object-from-entries': (string | {
                        functions: string[];
                    })[];
                    'unicorn/prefer-optional-catch-binding': "error";
                    'unicorn/prefer-prototype-methods': "error";
                    'unicorn/prefer-query-selector': "error";
                    'unicorn/prefer-reflect-apply': "error";
                    'unicorn/prefer-regexp-test': "error";
                    'unicorn/prefer-response-static-json': "error";
                    'unicorn/prefer-set-has': "error";
                    'unicorn/prefer-set-size': "error";
                    'unicorn/prefer-spread': "error";
                    'unicorn/prefer-string-raw': "error";
                    'unicorn/prefer-string-replace-all': "error";
                    'unicorn/prefer-string-slice': "error";
                    'unicorn/prefer-string-starts-ends-with': "error";
                    'unicorn/prefer-string-trim-start-end': "error";
                    'unicorn/prefer-structured-clone': (string | {
                        functions: string[];
                    })[];
                    'unicorn/prefer-ternary': string[];
                    'unicorn/prefer-top-level-await': "error";
                    'unicorn/prefer-type-error': "error";
                    'unicorn/relative-url-style': string[];
                    'unicorn/require-array-join-separator': "error";
                    'unicorn/require-module-attributes': "error";
                    'unicorn/require-module-specifiers': "error";
                    'unicorn/require-number-to-fixed-digits-argument': "error";
                    'unicorn/require-post-message-target-origin': "error";
                    'unicorn/switch-case-braces': string[];
                    'unicorn/text-encoding-identifier-case': (string | {
                        withDash: boolean;
                    })[];
                    'unicorn/throw-new-error': "error";
                };
            } | {
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
            })[];
        }[];
        plugins: ("eslint" | "import" | "node" | "oxc" | "promise" | "typescript" | "unicorn" | "vitest")[];
    } | {
        extends: {
            extends: ({
                rules: {
                    "jsx-a11y/alt-text": (string | {
                        area: never[];
                        img: string[];
                        'input[type="image"]': never[];
                        object: never[];
                    })[];
                    "jsx-a11y/anchor-ambiguous-text": (string | {
                        words: string[];
                    })[];
                    "jsx-a11y/anchor-has-content": "error";
                    "jsx-a11y/anchor-is-valid": (string | {
                        validHrefs: never[];
                    })[];
                    "jsx-a11y/aria-activedescendant-has-tabindex": "error";
                    "jsx-a11y/aria-props": "error";
                    "jsx-a11y/aria-proptypes": "error";
                    "jsx-a11y/aria-role": (string | {
                        allowedInvalidRoles: never[];
                        ignoreNonDOM: boolean;
                    })[];
                    "jsx-a11y/aria-unsupported-elements": "error";
                    "jsx-a11y/autocomplete-valid": (string | {
                        inputComponents: string[];
                    })[];
                    "jsx-a11y/click-events-have-key-events": "error";
                    "jsx-a11y/heading-has-content": (string | {
                        components: never[];
                    })[];
                    "jsx-a11y/html-has-lang": "error";
                    "jsx-a11y/iframe-has-title": "error";
                    "jsx-a11y/img-redundant-alt": (string | {
                        components: string[];
                        words: string[];
                    })[];
                    "jsx-a11y/label-has-associated-control": (string | {
                        assert: string;
                        controlComponents: never[];
                        depth: number;
                        labelAttributes: string[];
                        labelComponents: string[];
                    })[];
                    "jsx-a11y/lang": "error";
                    "jsx-a11y/media-has-caption": (string | {
                        audio: string[];
                        track: string[];
                        video: string[];
                    })[];
                    "jsx-a11y/mouse-events-have-key-events": (string | {
                        hoverInHandlers: string[];
                        hoverOutHandlers: string[];
                    })[];
                    "jsx-a11y/no-access-key": "error";
                    "jsx-a11y/no-aria-hidden-on-focusable": "error";
                    "jsx-a11y/no-autofocus": (string | {
                        ignoreNonDOM: boolean;
                    })[];
                    "jsx-a11y/no-distracting-elements": (string | {
                        elements: string[];
                    })[];
                    "jsx-a11y/no-noninteractive-tabindex": (string | {
                        allowExpressionValues: boolean;
                        roles: string[];
                        tags: never[];
                    })[];
                    "jsx-a11y/no-redundant-roles": "error";
                    "jsx-a11y/no-static-element-interactions": "error";
                    "jsx-a11y/prefer-tag-over-role": "error";
                    "jsx-a11y/role-has-required-aria-props": "error";
                    "jsx-a11y/role-supports-aria-props": "error";
                    "jsx-a11y/scope": "error";
                    "jsx-a11y/tabindex-no-positive": "error";
                };
            } | {
                rules: {
                    "react/jsx-boolean-value": (string | {
                        always: never[];
                        assumeUndefinedIsFalse: boolean;
                    })[];
                    "react/jsx-curly-brace-presence": (string | {
                        children: string;
                        propElementValues: string;
                        props: string;
                    })[];
                    "react/jsx-filename-extension": "off";
                    "react/jsx-fragments": string[];
                    "react/jsx-handler-names": (string | {
                        checkInlineFunctions: boolean;
                        checkLocalVariables: boolean;
                        eventHandlerPrefixes: string;
                        eventHandlerPropPrefixes: string;
                        eventHandlerPropRegex: string;
                        eventHandlerRegex: string;
                        ignoreComponentNames: never[];
                    })[];
                    "react/jsx-key": (string | {
                        checkFragmentShorthand: boolean;
                        checkKeyMustBeforeSpread: boolean;
                        warnOnDuplicates: boolean;
                    })[];
                    "react/jsx-max-depth": (string | {
                        max: number;
                    })[];
                    "react/jsx-no-comment-textnodes": "error";
                    "react/jsx-no-constructed-context-values": "error";
                    "react/jsx-no-duplicate-props": "error";
                    "react/jsx-no-script-url": (string | {
                        components: {};
                        includeFromSettings: boolean;
                    })[];
                    "react/jsx-no-target-blank": (string | {
                        allowReferrer: boolean;
                        enforceDynamicLinks: string;
                        forms: boolean;
                        links: boolean;
                        warnOnSpreadAttributes: boolean;
                    })[];
                    "react/jsx-no-undef": "error";
                    "react/jsx-no-useless-fragment": (string | {
                        allowExpressions: boolean;
                    })[];
                    "react/jsx-pascal-case": (string | {
                        allowAllCaps: boolean;
                        allowLeadingUnderscore: boolean;
                        allowNamespace: boolean;
                        ignore: never[];
                    })[];
                    "react/jsx-props-no-spread-multi": "error";
                    "react/jsx-props-no-spreading": "off";
                };
            } | {
                rules: {
                    'react-perf/jsx-no-jsx-as-prop': "error";
                    'react-perf/jsx-no-new-array-as-prop': "error";
                    'react-perf/jsx-no-new-function-as-prop': "error";
                    'react-perf/jsx-no-new-object-as-prop': "error";
                };
            })[];
        }[];
        plugins: ("jsx-a11y" | "react" | "react-perf")[];
    })[];
};
export declare const vue: {
    extends: ({
        extends: {
            rules: {
                'vue/define-emits-declaration': string[];
                'vue/define-props-declaration': string[];
                'vue/define-props-destructuring': (string | {
                    destructure: string;
                })[];
                'vue/max-props': "off";
                'vue/no-arrow-functions-in-watch': "error";
                'vue/no-deprecated-destroyed-lifecycle': "error";
                'vue/no-export-in-script-setup': "error";
                'vue/no-import-compiler-macros': "error";
                'vue/no-lifecycle-after-await': "error";
                'vue/no-multiple-slot-args': "error";
                'vue/no-required-prop-with-default': "error";
                'vue/no-this-in-before-route-enter': "error";
                'vue/prefer-import-from-vue': "error";
                'vue/require-default-export': "error";
                'vue/require-typed-ref': "error";
                'vue/valid-define-emits': "error";
                'vue/valid-define-props': "error";
            };
        }[];
    } | {
        extends: {
            extends: ({
                rules: {
                    'eslint/accessor-pairs': (string | {
                        enforceForClassMembers: boolean;
                        enforceForTSTypes: boolean;
                        getWithoutSet: boolean;
                        setWithoutGet: boolean;
                    })[];
                    'eslint/array-callback-return': (string | {
                        allowImplicit: boolean;
                        allowVoid: boolean;
                        checkForEach: boolean;
                    })[];
                    'eslint/arrow-body-style': (string | {
                        requireReturnForObjectLiteral: boolean;
                    })[];
                    'eslint/block-scoped-var': "error";
                    'eslint/capitalized-comments': (string | {
                        block: {
                            ignoreConsecutiveComments: boolean;
                            ignoreInlineComments: boolean;
                            ignorePattern: string;
                        };
                        line: {
                            ignoreConsecutiveComments: boolean;
                            ignoreInlineComments: boolean;
                            ignorePattern: string;
                        };
                    })[];
                    'eslint/class-methods-use-this': (string | {
                        enforceForClassFields: boolean;
                        exceptMethods: never[];
                        ignoreClassesWithImplements: null;
                        ignoreOverrideMethods: boolean;
                    })[];
                    'eslint/complexity': "off";
                    'eslint/constructor-super': "error";
                    'eslint/curly': string[];
                    'eslint/default-case': (string | {
                        commentPattern: string;
                    })[];
                    'eslint/default-case-last': "error";
                    'eslint/default-param-last': "error";
                    'eslint/eqeqeq': string[];
                    'eslint/for-direction': "error";
                    'eslint/func-names': (string | {
                        generators: null;
                    })[];
                    'eslint/func-style': (string | {
                        allowArrowFunctions: boolean;
                        allowTypeAnnotation: boolean;
                        overrides: {
                            namedExports: null;
                        };
                    })[];
                    'eslint/getter-return': (string | {
                        allowImplicit: boolean;
                    })[];
                    'eslint/grouped-accessor-pairs': (string | {
                        enforceForTSTypes: boolean;
                    })[];
                    'eslint/guard-for-in': "error";
                    'eslint/id-length': (string | {
                        checkGeneric: boolean;
                        exceptionPatterns: never[];
                        exceptions: never[];
                        max: number;
                        min: number;
                        properties: string;
                    })[];
                    'eslint/init-declarations': string[];
                    'eslint/max-classes-per-file': (string | {
                        ignoreExpressions: boolean;
                        max: number;
                    })[];
                    'eslint/max-depth': "off";
                    'eslint/max-lines': "off";
                    'eslint/max-lines-per-function': "off";
                    'eslint/max-nested-callbacks': "off";
                    'eslint/max-params': "off";
                    'eslint/max-statements': "off";
                    'eslint/new-cap': (string | {
                        capIsNew: boolean;
                        capIsNewExceptionPattern: string;
                        capIsNewExceptions: never[];
                        newIsCap: boolean;
                        newIsCapExceptionPattern: string;
                        newIsCapExceptions: string[];
                        properties: boolean;
                    })[];
                    'eslint/no-alert': "error";
                    'eslint/no-array-constructor': "error";
                    'eslint/no-async-promise-executor': "error";
                    'eslint/no-await-in-loop': "error";
                    'eslint/no-bitwise': (string | {
                        allow: never[];
                        int32Hint: boolean;
                    })[];
                    'eslint/no-caller': "error";
                    'eslint/no-case-declarations': "error";
                    'eslint/no-class-assign': "error";
                    'eslint/no-compare-neg-zero': "error";
                    'eslint/no-cond-assign': string[];
                    'eslint/no-console': "off";
                    'eslint/no-const-assign': "error";
                    'eslint/no-constant-binary-expression': "error";
                    'eslint/no-constant-condition': (string | {
                        checkLoops: string;
                    })[];
                    'eslint/no-constructor-return': "error";
                    'eslint/no-continue': "error";
                    'eslint/no-control-regex': "error";
                    'eslint/no-debugger': "error";
                    'eslint/no-delete-var': "error";
                    'eslint/no-div-regex': "error";
                    'eslint/no-dupe-class-members': "error";
                    'eslint/no-dupe-else-if': "error";
                    'eslint/no-dupe-keys': "error";
                    'eslint/no-duplicate-case': "error";
                    'eslint/no-duplicate-imports': (string | {
                        allowSeparateTypeImports: boolean;
                        includeExports: boolean;
                    })[];
                    'eslint/no-else-return': (string | {
                        allowElseIf: boolean;
                    })[];
                    'eslint/no-empty': (string | {
                        allowEmptyCatch: boolean;
                    })[];
                    'eslint/no-empty-character-class': "error";
                    'eslint/no-empty-function': "error";
                    'eslint/no-empty-pattern': "error";
                    'eslint/no-empty-static-block': "error";
                    'eslint/no-eq-null': "error";
                    'eslint/no-eval': (string | {
                        allowIndirect: boolean;
                    })[];
                    'eslint/no-ex-assign': "error";
                    'eslint/no-extend-native': (string | {
                        exceptions: never[];
                    })[];
                    'eslint/no-extra-bind': "error";
                    'eslint/no-extra-boolean-cast': "error";
                    'eslint/no-extra-label': "error";
                    'eslint/no-fallthrough': (string | {
                        allowEmptyCase: boolean;
                        commentPattern: null;
                        reportUnusedFallthroughComment: boolean;
                    })[];
                    'eslint/no-func-assign': "error";
                    'eslint/no-global-assign': (string | {
                        exceptions: never[];
                    })[];
                    'eslint/no-implicit-coercion': (string | {
                        allow: string[];
                        boolean: boolean;
                        disallowTemplateShorthand: boolean;
                        number: boolean;
                        string: boolean;
                    })[];
                    'eslint/no-import-assign': "error";
                    'eslint/no-inline-comments': (string | {
                        ignorePattern: null;
                    })[];
                    'eslint/no-inner-declarations': "off";
                    'eslint/no-invalid-regexp': (string | {
                        allowConstructorFlags: never[];
                    })[];
                    'eslint/no-irregular-whitespace': "error";
                    'eslint/no-iterator': "error";
                    'eslint/no-label-var': "error";
                    'eslint/no-labels': (string | {
                        allowLoop: boolean;
                        allowSwitch: boolean;
                    })[];
                    'eslint/no-lone-blocks': "error";
                    'eslint/no-lonely-if': "error";
                    'eslint/no-loop-func': "error";
                    'eslint/no-loss-of-precision': "error";
                    'eslint/no-magic-numbers': (string | {
                        detectObjects: boolean;
                        enforceConst: boolean;
                        ignore: number[];
                        ignoreArrayIndexes: boolean;
                        ignoreClassFieldInitialValues: boolean;
                        ignoreDefaultValues: boolean;
                        ignoreEnums: boolean;
                        ignoreNumericLiteralTypes: boolean;
                        ignoreReadonlyClassProperties: boolean;
                        ignoreTypeIndexes: boolean;
                    })[];
                    'eslint/no-misleading-character-class': (string | {
                        allowEscape: boolean;
                    })[];
                    'eslint/no-multi-assign': (string | {
                        ignoreNonDeclaration: boolean;
                    })[];
                    'eslint/no-multi-str': "error";
                    'eslint/no-negated-condition': "error";
                    'eslint/no-nested-ternary': "error";
                    'eslint/no-new': "error";
                    'eslint/no-new-func': "error";
                    'eslint/no-new-native-nonconstructor': "error";
                    'eslint/no-new-wrappers': "error";
                    'eslint/no-nonoctal-decimal-escape': "error";
                    'eslint/no-obj-calls': "error";
                    'eslint/no-object-constructor': "error";
                    'eslint/no-param-reassign': (string | {
                        ignorePropertyModificationsFor: never[];
                        ignorePropertyModificationsForRegex: never[];
                        props: boolean;
                    })[];
                    'eslint/no-plusplus': "off";
                    'eslint/no-promise-executor-return': (string | {
                        allowVoid: boolean;
                    })[];
                    'eslint/no-proto': "error";
                    'eslint/no-prototype-builtins': "error";
                    'eslint/no-redeclare': (string | {
                        builtinGlobals: boolean;
                    })[];
                    'eslint/no-regex-spaces': "error";
                    'eslint/no-restricted-globals': (string | {
                        restrictedGlobals: {};
                    })[];
                    'eslint/no-restricted-imports': (string | {
                        paths: never[];
                        patterns: never[];
                    })[];
                    'eslint/no-return-assign': string[];
                    'eslint/no-script-url': "error";
                    'eslint/no-self-assign': (string | {
                        props: boolean;
                    })[];
                    'eslint/no-self-compare': "error";
                    'eslint/no-sequences': (string | {
                        allowInParentheses: boolean;
                    })[];
                    'eslint/no-setter-return': "error";
                    'eslint/no-shadow': "off";
                    'eslint/no-shadow-restricted-names': (string | {
                        reportGlobalThis: boolean;
                    })[];
                    'eslint/no-sparse-arrays': "error";
                    'eslint/no-template-curly-in-string': "error";
                    'eslint/no-ternary': "off";
                    'eslint/no-this-before-super': "error";
                    'eslint/no-unassigned-vars': "error";
                    'eslint/no-undef': (string | {
                        typeof: boolean;
                    })[];
                    'eslint/no-undefined': "error";
                    'eslint/no-unexpected-multiline': "error";
                    'eslint/no-unmodified-loop-condition': "error";
                    'eslint/no-unneeded-ternary': (string | {
                        defaultAssignment: boolean;
                    })[];
                    'eslint/no-unreachable': "error";
                    'eslint/no-unsafe-finally': "error";
                    'eslint/no-unsafe-negation': (string | {
                        enforceForOrderingRelations: boolean;
                    })[];
                    'eslint/no-unsafe-optional-chaining': (string | {
                        disallowArithmeticOperators: boolean;
                    })[];
                    'eslint/no-unused-expressions': (string | {
                        allowShortCircuit: boolean;
                        allowTaggedTemplates: boolean;
                        allowTernary: boolean;
                        enforceForJSX: boolean;
                    })[];
                    'eslint/no-unused-labels': "error";
                    'eslint/no-unused-private-class-members': "error";
                    'eslint/no-unused-vars': (string | {
                        args: string;
                        argsIgnorePattern: string;
                        caughtErrors: string;
                        caughtErrorsIgnorePattern: string;
                        destructuredArrayIgnorePattern: string;
                        fix: {
                            imports: string;
                            variables: string;
                        };
                        ignoreClassWithStaticInitBlock: boolean;
                        ignoreRestSiblings: boolean;
                        ignoreUsingDeclarations: boolean;
                        reportUsedIgnorePattern: boolean;
                        reportVarsOnlyUsedAsTypes: boolean;
                        vars: string;
                        varsIgnorePattern: string;
                    })[];
                    'eslint/no-use-before-define': (string | {
                        allowNamedExports: boolean;
                        classes: boolean;
                        enums: boolean;
                        functions: boolean;
                        ignoreTypeReferences: boolean;
                        typedefs: boolean;
                        variables: boolean;
                    })[];
                    'eslint/no-useless-backreference': "error";
                    'eslint/no-useless-call': "error";
                    'eslint/no-useless-catch': "error";
                    'eslint/no-useless-computed-key': (string | {
                        enforceForClassMembers: boolean;
                    })[];
                    'eslint/no-useless-concat': "error";
                    'eslint/no-useless-constructor': "error";
                    'eslint/no-useless-escape': (string | {
                        allowRegexCharacters: never[];
                    })[];
                    'eslint/no-useless-rename': (string | {
                        ignoreDestructuring: boolean;
                        ignoreExport: boolean;
                        ignoreImport: boolean;
                    })[];
                    'eslint/no-useless-return': "error";
                    'eslint/no-var': "error";
                    'eslint/no-void': (string | {
                        allowAsStatement: boolean;
                    })[];
                    'eslint/no-warning-comments': "off";
                    'eslint/no-with': "error";
                    'eslint/operator-assignment': string[];
                    'eslint/prefer-const': (string | {
                        destructuring: string;
                        ignoreReadBeforeAssign: boolean;
                    })[];
                    'eslint/prefer-destructuring': (string | {
                        AssignmentExpression: {
                            array: boolean;
                            object: boolean;
                        };
                        VariableDeclarator: {
                            array: boolean;
                            object: boolean;
                        };
                        enforceForRenamedProperties: boolean;
                    })[];
                    'eslint/prefer-exponentiation-operator': "error";
                    'eslint/prefer-numeric-literals': "error";
                    'eslint/prefer-object-has-own': "error";
                    'eslint/prefer-object-spread': "error";
                    'eslint/prefer-promise-reject-errors': (string | {
                        allowEmptyReject: boolean;
                    })[];
                    'eslint/prefer-rest-params': "error";
                    'eslint/prefer-spread': "error";
                    'eslint/prefer-template': "error";
                    'eslint/preserve-caught-error': (string | {
                        requireCatchParameter: boolean;
                    })[];
                    'eslint/radix': "error";
                    'eslint/require-await': "off";
                    'eslint/require-yield': "error";
                    'eslint/sort-imports': (string | {
                        allowSeparatedGroups: boolean;
                        ignoreCase: boolean;
                        ignoreDeclarationSort: boolean;
                        ignoreMemberSort: boolean;
                        memberSyntaxSortOrder: string[];
                    })[];
                    'eslint/sort-keys': (string | {
                        allowLineSeparatedGroups: boolean;
                        caseSensitive: boolean;
                        minKeys: number;
                        natural: boolean;
                    })[];
                    'eslint/sort-vars': (string | {
                        ignoreCase: boolean;
                    })[];
                    'eslint/symbol-description': "error";
                    'eslint/unicode-bom': string[];
                    'eslint/use-isnan': (string | {
                        enforceForIndexOf: boolean;
                        enforceForSwitchCase: boolean;
                    })[];
                    'eslint/valid-typeof': (string | {
                        requireStringLiterals: boolean;
                    })[];
                    'eslint/vars-on-top': "error";
                    'eslint/yoda': (string | {
                        exceptRange: boolean;
                        onlyEquality: boolean;
                    })[];
                };
            } | {
                overrides: {
                    files: string[];
                    rules: {
                        'import/no-default-export': "off";
                    };
                }[];
                rules: {
                    'import/consistent-type-specifier-style': string[];
                    'import/default': "error";
                    'import/export': "error";
                    'import/exports-last': "off";
                    'import/extensions': (string | {
                        checkTypeImports: boolean;
                        ignorePackages: boolean;
                        pathGroupOverrides: never[];
                    })[];
                    'import/first': string[];
                    'import/group-exports': "off";
                    'import/max-dependencies': "off";
                    'import/named': "error";
                    'import/namespace': (string | {
                        allowComputed: boolean;
                    })[];
                    'import/no-absolute-path': (string | {
                        amd: boolean;
                        commonjs: boolean;
                        esmodule: boolean;
                    })[];
                    'import/no-amd': "error";
                    'import/no-anonymous-default-export': (string | {
                        allowAnonymousClass: boolean;
                        allowAnonymousFunction: boolean;
                        allowArray: boolean;
                        allowArrowFunction: boolean;
                        allowCallExpression: boolean;
                        allowLiteral: boolean;
                        allowNew: boolean;
                        allowObject: boolean;
                    })[];
                    'import/no-commonjs': "error";
                    'import/no-cycle': (string | {
                        allowUnsafeDynamicCyclicDependency: boolean;
                        ignoreExternal: boolean;
                        ignoreTypes: boolean;
                        maxDepth: number;
                    })[];
                    'import/no-default-export': "error";
                    'import/no-duplicates': (string | {
                        considerQueryString: boolean;
                        preferInline: boolean;
                    })[];
                    'import/no-dynamic-require': (string | {
                        esmodule: boolean;
                    })[];
                    'import/no-empty-named-blocks': "error";
                    'import/no-mutable-exports': "error";
                    'import/no-named-as-default': "error";
                    'import/no-named-as-default-member': "error";
                    'import/no-named-default': "error";
                    'import/no-named-export': "off";
                    'import/no-namespace': (string | {
                        ignore: never[];
                    })[];
                    'import/no-nodejs-modules': "off";
                    'import/no-relative-parent-imports': "error";
                    'import/no-self-import': "error";
                    'import/no-unassigned-import': "off";
                    'import/no-webpack-loader-syntax': "error";
                    'import/prefer-default-export': "off";
                    'import/unambiguous': "error";
                };
            } | {
                rules: {
                    'node/global-require': "error";
                    'node/no-exports-assign': "error";
                    'node/no-new-require': "error";
                    'node/no-path-concat': "error";
                    'node/no-process-env': "off";
                };
            } | {
                rules: {
                    'oxc/approx-constant': "error";
                    'oxc/bad-array-method-on-arguments': "error";
                    'oxc/bad-bitwise-operator': "error";
                    'oxc/bad-char-at-comparison': "error";
                    'oxc/bad-comparison-sequence': "error";
                    'oxc/bad-min-max-func': "error";
                    'oxc/bad-object-literal-comparison': "error";
                    'oxc/bad-replace-all-arg': "error";
                    'oxc/branches-sharing-code': "error";
                    'oxc/const-comparisons': "error";
                    'oxc/double-comparisons': "error";
                    'oxc/erasing-op': "error";
                    'oxc/misrefactored-assign-op': "error";
                    'oxc/missing-throw': "error";
                    'oxc/no-accumulating-spread': "error";
                    'oxc/no-async-await': "off";
                    'oxc/no-async-endpoint-handlers': (string | {
                        allowedNames: never[];
                    })[];
                    'oxc/no-barrel-file': (string | {
                        threshold: number;
                    })[];
                    'oxc/no-const-enum': "error";
                    'oxc/no-map-spread': (string | {
                        ignoreArgs: boolean;
                        ignoreRereads: boolean;
                    })[];
                    'oxc/no-optional-chaining': "off";
                    'oxc/no-rest-spread-properties': "off";
                    'oxc/no-this-in-exported-function': "error";
                    'oxc/number-arg-out-of-range': "error";
                    'oxc/only-used-in-recursion': "error";
                    'oxc/uninvoked-array-callback': "error";
                };
            } | {
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
            } | {
                rules: {
                    'typescript/adjacent-overload-signatures': "error";
                    'typescript/array-type': (string | {
                        default: string;
                        readonly: string;
                    })[];
                    'typescript/await-thenable': "error";
                    'typescript/ban-ts-comment': (string | {
                        minimumDescriptionLength: number;
                        'ts-check': boolean;
                        'ts-expect-error': string;
                        'ts-ignore': boolean;
                        'ts-nocheck': string;
                    })[];
                    'typescript/ban-tslint-comment': "error";
                    'typescript/class-literal-property-style': string[];
                    'typescript/consistent-generic-constructors': (string | {
                        option: string;
                    })[];
                    'typescript/consistent-indexed-object-style': string[];
                    'typescript/consistent-return': (string | {
                        treatUndefinedAsUnspecified: boolean;
                    })[];
                    'typescript/consistent-type-assertions': (string | {
                        assertionStyle: string;
                    })[];
                    'typescript/consistent-type-definitions': string[];
                    'typescript/consistent-type-exports': (string | {
                        fixMixedExportsWithInlineTypeSpecifier: boolean;
                    })[];
                    'typescript/consistent-type-imports': (string | {
                        disallowTypeAnnotations: boolean;
                        fixStyle: string;
                        prefer: string;
                    })[];
                    'typescript/dot-notation': (string | {
                        allowIndexSignaturePropertyAccess: boolean;
                        allowKeywords: boolean;
                        allowPattern: string;
                        allowPrivateClassPropertyAccess: boolean;
                        allowProtectedClassPropertyAccess: boolean;
                    })[];
                    'typescript/explicit-function-return-type': (string | {
                        allowConciseArrowFunctionExpressionsStartingWithVoid: boolean;
                        allowDirectConstAssertionInArrowFunctions: boolean;
                        allowExpressions: boolean;
                        allowFunctionsWithoutTypeParameters: boolean;
                        allowHigherOrderFunctions: boolean;
                        allowIIFEs: boolean;
                        allowTypedFunctionExpressions: boolean;
                        allowedNames: never[];
                    })[];
                    'typescript/explicit-module-boundary-types': (string | {
                        allowArgumentsExplicitlyTypedAsAny: boolean;
                        allowDirectConstAssertionInArrowFunctions: boolean;
                        allowHigherOrderFunctions: boolean;
                        allowOverloadFunctions: boolean;
                        allowTypedFunctionExpressions: boolean;
                        allowedNames: never[];
                    })[];
                    'typescript/no-array-delete': "error";
                    'typescript/no-base-to-string': (string | {
                        checkUnknown: boolean;
                        ignoredTypeNames: string[];
                    })[];
                    'typescript/no-confusing-non-null-assertion': "error";
                    'typescript/no-confusing-void-expression': (string | {
                        ignoreArrowShorthand: boolean;
                        ignoreVoidOperator: boolean;
                        ignoreVoidReturningFunctions: boolean;
                    })[];
                    'typescript/no-deprecated': (string | {
                        allow: never[];
                    })[];
                    'typescript/no-duplicate-enum-values': "error";
                    'typescript/no-duplicate-type-constituents': (string | {
                        ignoreIntersections: boolean;
                        ignoreUnions: boolean;
                    })[];
                    'typescript/no-dynamic-delete': "error";
                    'typescript/no-empty-interface': (string | {
                        allowSingleExtends: boolean;
                    })[];
                    'typescript/no-empty-object-type': (string | {
                        allowInterfaces: string;
                        allowObjectTypes: string;
                        allowWithName: string;
                    })[];
                    'typescript/no-explicit-any': (string | {
                        fixToUnknown: boolean;
                        ignoreRestArgs: boolean;
                    })[];
                    'typescript/no-extra-non-null-assertion': "error";
                    'typescript/no-extraneous-class': (string | {
                        allowConstructorOnly: boolean;
                        allowEmpty: boolean;
                        allowStaticOnly: boolean;
                        allowWithDecorator: boolean;
                    })[];
                    'typescript/no-floating-promises': (string | {
                        allowForKnownSafeCalls: never[];
                        allowForKnownSafePromises: never[];
                        checkThenables: boolean;
                        ignoreIIFE: boolean;
                        ignoreVoid: boolean;
                    })[];
                    'typescript/no-for-in-array': "error";
                    'typescript/no-implied-eval': "error";
                    'typescript/no-import-type-side-effects': "error";
                    'typescript/no-inferrable-types': (string | {
                        ignoreParameters: boolean;
                        ignoreProperties: boolean;
                    })[];
                    'typescript/no-invalid-void-type': (string | {
                        allowAsThisParameter: boolean;
                        allowInGenericTypeArguments: boolean;
                    })[];
                    'typescript/no-meaningless-void-operator': (string | {
                        checkNever: boolean;
                    })[];
                    'typescript/no-misused-new': "error";
                    'typescript/no-misused-promises': (string | {
                        checksConditionals: boolean;
                        checksSpreads: boolean;
                        checksVoidReturn: {
                            arguments: boolean;
                            attributes: boolean;
                            inheritedMethods: boolean;
                            properties: boolean;
                            returns: boolean;
                            variables: boolean;
                        };
                    })[];
                    'typescript/no-misused-spread': (string | {
                        allow: never[];
                    })[];
                    'typescript/no-mixed-enums': "error";
                    'typescript/no-namespace': (string | {
                        allowDeclarations: boolean;
                        allowDefinitionFiles: boolean;
                    })[];
                    'typescript/no-non-null-asserted-nullish-coalescing': "error";
                    'typescript/no-non-null-asserted-optional-chain': "error";
                    'typescript/no-non-null-assertion': "off";
                    'typescript/no-redundant-type-constituents': "error";
                    'typescript/no-require-imports': (string | {
                        allow: never[];
                        allowAsImport: boolean;
                    })[];
                    'typescript/no-restricted-types': (string | {
                        types: {};
                    })[];
                    'typescript/no-this-alias': (string | {
                        allowDestructuring: boolean;
                        allowedNames: never[];
                    })[];
                    'typescript/no-unnecessary-boolean-literal-compare': (string | {
                        allowComparingNullableBooleansToFalse: boolean;
                        allowComparingNullableBooleansToTrue: boolean;
                    })[];
                    'typescript/no-unnecessary-condition': (string | {
                        allowConstantLoopConditions: string;
                        checkTypePredicates: boolean;
                    })[];
                    'typescript/no-unnecessary-parameter-property-assignment': "error";
                    'typescript/no-unnecessary-qualifier': "error";
                    'typescript/no-unnecessary-template-expression': "error";
                    'typescript/no-unnecessary-type-arguments': "error";
                    'typescript/no-unnecessary-type-assertion': (string | {
                        checkLiteralConstAssertions: boolean;
                        typesToIgnore: never[];
                    })[];
                    'typescript/no-unnecessary-type-constraint': "error";
                    'typescript/no-unnecessary-type-convertion': "error";
                    'typescript/no-unnecessary-type-parameters': "error";
                    'typescript/no-unsafe-argument': "error";
                    'typescript/no-unsafe-assignment': "error";
                    'typescript/no-unsafe-call': "error";
                    'typescript/no-unsafe-declaration-merging': "error";
                    'typescript/no-unsafe-enum-comparison': "error";
                    'typescript/no-unsafe-function-type': "error";
                    'typescript/no-unsafe-member-access': (string | {
                        allowOptionalChaining: boolean;
                    })[];
                    'typescript/no-unsafe-return': "error";
                    'typescript/no-unsafe-type-assertion': "error";
                    'typescript/no-unsafe-unary-minus': "error";
                    'typescript/no-useless-default-assignment': "error";
                    'typescript/no-useless-empty-export': "error";
                    'typescript/no-var-requires': "error";
                    'typescript/no-wrapper-object-types': "error";
                    'typescript/non-nullable-type-assertion-style': "error";
                    'typescript/only-throw-error': (string | {
                        allow: {
                            from: string;
                            name: string;
                        }[];
                        allowRethrowing: boolean;
                        allowThrowingAny: boolean;
                        allowThrowingUnknown: boolean;
                    })[];
                    'typescript/parameter-properties': (string | {
                        allow: never[];
                        prefer: string;
                    })[];
                    'typescript/prefer-as-const': "error";
                    'typescript/prefer-enum-initializers': "error";
                    'typescript/prefer-find': "error";
                    'typescript/prefer-for-of': "error";
                    'typescript/prefer-function-type': "error";
                    'typescript/prefer-includes': "error";
                    'typescript/prefer-literal-enum-member': (string | {
                        allowBitwiseExpressions: boolean;
                    })[];
                    'typescript/prefer-nullish-coalescing': (string | {
                        ignoreBooleanCoercion: boolean;
                        ignoreConditionalTests: boolean;
                        ignoreIfStatements: boolean;
                        ignoreMixedLogicalExpressions: boolean;
                        ignorePrimitives: {
                            bigint: boolean;
                            boolean: boolean;
                            number: boolean;
                            string: boolean;
                        };
                        ignoreTernaryTests: boolean;
                    })[];
                    'typescript/prefer-optional-chain': (string | {
                        allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: boolean;
                        checkAny: boolean;
                        checkBigInt: boolean;
                        checkBoolean: boolean;
                        checkNumber: boolean;
                        checkString: boolean;
                        checkUnknown: boolean;
                        requireNullish: boolean;
                    })[];
                    'typescript/prefer-promise-reject-errors': (string | {
                        allowEmptyReject: boolean;
                        allowThrowingAny: boolean;
                        allowThrowingUnknown: boolean;
                    })[];
                    'typescript/prefer-readonly': (string | {
                        onlyInlineLambdas: boolean;
                    })[];
                    'typescript/prefer-readonly-parameter-types': (string | {
                        allow: never[];
                        checkParameterProperties: boolean;
                        ignoreInferredTypes: boolean;
                        treatMethodsAsReadonly: boolean;
                    })[];
                    'typescript/prefer-reduce-type-parameter': "error";
                    'typescript/prefer-regexp-exec': "error";
                    'typescript/prefer-return-this-type': "error";
                    'typescript/prefer-string-starts-ends-with': (string | {
                        allowSingleElementEquality: string;
                    })[];
                    'typescript/prefer-ts-expect-error': "error";
                    'typescript/promise-function-async': (string | {
                        allowAny: boolean;
                        allowedPromiseNames: never[];
                        checkArrowFunctions: boolean;
                        checkFunctionDeclarations: boolean;
                        checkFunctionExpressions: boolean;
                        checkMethodDeclarations: boolean;
                    })[];
                    'typescript/related-getter-setter-pairs': "error";
                    'typescript/require-array-sort-compare': "off";
                    'typescript/require-await': "error";
                    'typescript/restrict-plus-operands': (string | {
                        allowAny: boolean;
                        allowBoolean: boolean;
                        allowNullish: boolean;
                        allowNumberAndString: boolean;
                        allowRegExp: boolean;
                        skipCompoundAssignments: boolean;
                    })[];
                    'typescript/restrict-template-expressions': (string | {
                        allow: {
                            from: string;
                            name: string[];
                        }[];
                        allowAny: boolean;
                        allowArray: boolean;
                        allowBoolean: boolean;
                        allowNever: boolean;
                        allowNullish: boolean;
                        allowNumber: boolean;
                        allowRegExp: boolean;
                    })[];
                    'typescript/return-await': string[];
                    'typescript/strict-boolean-expressions': "off";
                    'typescript/strict-void-return': (string | {
                        allowReturnAny: boolean;
                    })[];
                    'typescript/switch-exhaustiveness-check': (string | {
                        allowDefaultCaseForExhaustiveSwitch: boolean;
                        considerDefaultExhaustiveForUnions: boolean;
                        defaultCaseCommentPattern: string;
                        requireDefaultForNonUnion: boolean;
                    })[];
                    'typescript/triple-slash-reference': (string | {
                        lib: string;
                        path: string;
                        types: string;
                    })[];
                    'typescript/unbound-method': (string | {
                        ignoreStatic: boolean;
                    })[];
                    'typescript/unified-signatures': (string | {
                        ignoreDifferentlyNamedParameters: boolean;
                        ignoreOverloadsWithDifferentJSDoc: boolean;
                    })[];
                    'typescript/use-unknown-in-catch-callback-variable': "error";
                };
            } | {
                rules: {
                    'unicorn/catch-error-name': (string | {
                        ignore: never[];
                        name: string;
                    })[];
                    'unicorn/consistent-assert': "error";
                    'unicorn/consistent-date-clone': "error";
                    'unicorn/consistent-empty-array-spread': "error";
                    'unicorn/consistent-existence-index-check': "error";
                    'unicorn/consistent-function-scoping': (string | {
                        checkArrowFunctions: boolean;
                    })[];
                    'unicorn/empty-brace-spaces': "error";
                    'unicorn/error-message': "error";
                    'unicorn/escape-case': "error";
                    'unicorn/explicit-length-check': (string | {
                        'non-zero': string;
                    })[];
                    'unicorn/filename-case': (string | {
                        case: string;
                        ignore: string;
                        multipleFileExtensions: boolean;
                    })[];
                    'unicorn/new-for-builtins': "error";
                    'unicorn/no-abusive-eslint-disable': "error";
                    'unicorn/no-accessor-recursion': "error";
                    'unicorn/no-anonymous-default-export': "off";
                    'unicorn/no-array-callback-reference': "error";
                    'unicorn/no-array-for-each': "error";
                    'unicorn/no-array-method-this-argument': "error";
                    'unicorn/no-array-reduce': "off";
                    'unicorn/no-array-reverse': "error";
                    'unicorn/no-array-sort': "error";
                    'unicorn/no-await-expression-member': "error";
                    'unicorn/no-await-in-promise-methods': "error";
                    'unicorn/no-console-spaces': "error";
                    'unicorn/no-document-cookie': "error";
                    'unicorn/no-empty-file': "error";
                    'unicorn/no-hex-escape': "error";
                    'unicorn/no-immediate-mutation': "error";
                    'unicorn/no-instanceof-array': "error";
                    'unicorn/no-instanceof-builtins': (string | {
                        exclude: never[];
                        include: never[];
                        strategy: string;
                        useErrorIsError: boolean;
                    })[];
                    'unicorn/no-invalid-fetch-options': "error";
                    'unicorn/no-invalid-remove-event-listener': "error";
                    'unicorn/no-length-as-slice-end': "error";
                    'unicorn/no-lonely-if': "error";
                    'unicorn/no-magic-array-flat-depth': "error";
                    'unicorn/no-negation-in-equality-check': "error";
                    'unicorn/no-nested-ternary': "error";
                    'unicorn/no-new-array': "error";
                    'unicorn/no-new-buffer': "error";
                    'unicorn/no-null': "off";
                    'unicorn/no-object-as-default-parameter': "error";
                    'unicorn/no-process-exit': "error";
                    'unicorn/no-single-promise-in-promise-methods': "error";
                    'unicorn/no-static-only-class': "error";
                    'unicorn/no-thenable': "error";
                    'unicorn/no-this-assignment': "error";
                    'unicorn/no-typeof-undefined': (string | {
                        checkGlobalVariables: boolean;
                    })[];
                    'unicorn/no-unnecessary-array-flat-depth': "error";
                    'unicorn/no-unnecessary-array-splice-count': "error";
                    'unicorn/no-unnecessary-await': "error";
                    'unicorn/no-unnecessary-slice-end': "error";
                    'unicorn/no-unreadable-array-destructuring': "error";
                    'unicorn/no-unreadable-iife': "error";
                    'unicorn/no-useless-collection-argument': "error";
                    'unicorn/no-useless-error-capture-stack-trace': "error";
                    'unicorn/no-useless-fallback-in-spread': "error";
                    'unicorn/no-useless-length-check': "error";
                    'unicorn/no-useless-promise-resolve-reject': (string | {
                        allowReject: boolean;
                    })[];
                    'unicorn/no-useless-spread': "error";
                    'unicorn/no-useless-switch-case': "error";
                    'unicorn/no-useless-undefined': (string | {
                        checkArguments: boolean;
                        checkArrowFunctionBody: boolean;
                    })[];
                    'unicorn/no-zero-fractions': "error";
                    'unicorn/number-literal-case': "off";
                    'unicorn/numeric-separators-style': (string | {
                        binary: {
                            groupLength: number;
                            minimumDigits: number;
                        };
                        hexadecimal: {
                            groupLength: number;
                            minimumDigits: number;
                        };
                        number: {
                            groupLength: number;
                            minimumDigits: number;
                        };
                        octal: {
                            groupLength: number;
                            minimumDigits: number;
                        };
                        onlyIfContainsSeparator: boolean;
                    })[];
                    'unicorn/prefer-add-event-listener': "error";
                    'unicorn/prefer-array-find': "error";
                    'unicorn/prefer-array-flat': "error";
                    'unicorn/prefer-array-flat-map': "error";
                    'unicorn/prefer-array-index-of': "error";
                    'unicorn/prefer-array-some': "error";
                    'unicorn/prefer-at': (string | {
                        checkAllIndexAccess: boolean;
                        getLastElementFunctions: never[];
                    })[];
                    'unicorn/prefer-bigint-literals': "error";
                    'unicorn/prefer-blob-reading-methods': "error";
                    'unicorn/prefer-class-fields': "error";
                    'unicorn/prefer-classlist-toggle': "error";
                    'unicorn/prefer-code-point': "error";
                    'unicorn/prefer-date-now': "error";
                    'unicorn/prefer-default-parameters': "error";
                    'unicorn/prefer-dom-node-append': "error";
                    'unicorn/prefer-dom-node-dataset': "error";
                    'unicorn/prefer-dom-node-remove': "error";
                    'unicorn/prefer-dom-node-text-content': "error";
                    'unicorn/prefer-event-target': "error";
                    'unicorn/prefer-global-this': "error";
                    'unicorn/prefer-includes': "error";
                    'unicorn/prefer-keyboard-event-key': "error";
                    'unicorn/prefer-logical-operator-over-ternary': "error";
                    'unicorn/prefer-math-min-max': "error";
                    'unicorn/prefer-math-trunc': "error";
                    'unicorn/prefer-modern-dom-apis': "error";
                    'unicorn/prefer-modern-math-apis': "error";
                    'unicorn/prefer-module': "error";
                    'unicorn/prefer-native-coercion-functions': "error";
                    'unicorn/prefer-negative-index': "error";
                    'unicorn/prefer-node-protocol': "error";
                    'unicorn/prefer-number-properties': (string | {
                        checkInfinity: boolean;
                        checkNaN: boolean;
                    })[];
                    'unicorn/prefer-object-from-entries': (string | {
                        functions: string[];
                    })[];
                    'unicorn/prefer-optional-catch-binding': "error";
                    'unicorn/prefer-prototype-methods': "error";
                    'unicorn/prefer-query-selector': "error";
                    'unicorn/prefer-reflect-apply': "error";
                    'unicorn/prefer-regexp-test': "error";
                    'unicorn/prefer-response-static-json': "error";
                    'unicorn/prefer-set-has': "error";
                    'unicorn/prefer-set-size': "error";
                    'unicorn/prefer-spread': "error";
                    'unicorn/prefer-string-raw': "error";
                    'unicorn/prefer-string-replace-all': "error";
                    'unicorn/prefer-string-slice': "error";
                    'unicorn/prefer-string-starts-ends-with': "error";
                    'unicorn/prefer-string-trim-start-end': "error";
                    'unicorn/prefer-structured-clone': (string | {
                        functions: string[];
                    })[];
                    'unicorn/prefer-ternary': string[];
                    'unicorn/prefer-top-level-await': "error";
                    'unicorn/prefer-type-error': "error";
                    'unicorn/relative-url-style': string[];
                    'unicorn/require-array-join-separator': "error";
                    'unicorn/require-module-attributes': "error";
                    'unicorn/require-module-specifiers': "error";
                    'unicorn/require-number-to-fixed-digits-argument': "error";
                    'unicorn/require-post-message-target-origin': "error";
                    'unicorn/switch-case-braces': string[];
                    'unicorn/text-encoding-identifier-case': (string | {
                        withDash: boolean;
                    })[];
                    'unicorn/throw-new-error': "error";
                };
            } | {
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
            })[];
        }[];
        plugins: ("eslint" | "import" | "node" | "oxc" | "promise" | "typescript" | "unicorn" | "vitest")[];
    })[];
    plugins: "vue"[];
};
export declare const nextjs: {
    extends: ({
        extends: {
            rules: {
                'nextjs/google-font-display': "error";
                'nextjs/google-font-preconnect': "error";
                'nextjs/inline-script-id': "error";
                'nextjs/next-script-for-ga': "error";
                'nextjs/no-assign-module-variable': "error";
                'nextjs/no-async-client-component': "error";
                'nextjs/no-before-interactive-script-outside-document': "error";
                'nextjs/no-css-tags': "error";
                'nextjs/no-document-import-in-page': "error";
                'nextjs/no-duplicate-head': "error";
                'nextjs/no-head-element': "error";
                'nextjs/no-head-import-in-document': "error";
                'nextjs/no-html-link-for-pages': "error";
                'nextjs/no-img-element': "error";
                'nextjs/no-page-custom-font': "error";
                'nextjs/no-script-component-in-head': "error";
                'nextjs/no-styled-jsx-in-document': "error";
                'nextjs/no-sync-scripts': "error";
                'nextjs/no-title-in-document-head': "error";
                'nextjs/no-typos': "error";
                'nextjs/no-unwanted-polyfillio': "error";
            };
        }[];
    } | {
        extends: ({
            extends: {}[];
            overrides: {
                files: string[];
                rules: {
                    "import/no-default-export": "off";
                };
            }[];
            rules: {
                "react/jsx-filename-extension": (string | {
                    allow: string;
                    extensions: string[];
                    ignoreFilesWithoutCode: boolean;
                })[];
            };
        } | {
            extends: {
                extends: ({
                    rules: {
                        'eslint/accessor-pairs': (string | {
                            enforceForClassMembers: boolean;
                            enforceForTSTypes: boolean;
                            getWithoutSet: boolean;
                            setWithoutGet: boolean;
                        })[];
                        'eslint/array-callback-return': (string | {
                            allowImplicit: boolean;
                            allowVoid: boolean;
                            checkForEach: boolean;
                        })[];
                        'eslint/arrow-body-style': (string | {
                            requireReturnForObjectLiteral: boolean;
                        })[];
                        'eslint/block-scoped-var': "error";
                        'eslint/capitalized-comments': (string | {
                            block: {
                                ignoreConsecutiveComments: boolean;
                                ignoreInlineComments: boolean;
                                ignorePattern: string;
                            };
                            line: {
                                ignoreConsecutiveComments: boolean;
                                ignoreInlineComments: boolean;
                                ignorePattern: string;
                            };
                        })[];
                        'eslint/class-methods-use-this': (string | {
                            enforceForClassFields: boolean;
                            exceptMethods: never[];
                            ignoreClassesWithImplements: null;
                            ignoreOverrideMethods: boolean;
                        })[];
                        'eslint/complexity': "off";
                        'eslint/constructor-super': "error";
                        'eslint/curly': string[];
                        'eslint/default-case': (string | {
                            commentPattern: string;
                        })[];
                        'eslint/default-case-last': "error";
                        'eslint/default-param-last': "error";
                        'eslint/eqeqeq': string[];
                        'eslint/for-direction': "error";
                        'eslint/func-names': (string | {
                            generators: null;
                        })[];
                        'eslint/func-style': (string | {
                            allowArrowFunctions: boolean;
                            allowTypeAnnotation: boolean;
                            overrides: {
                                namedExports: null;
                            };
                        })[];
                        'eslint/getter-return': (string | {
                            allowImplicit: boolean;
                        })[];
                        'eslint/grouped-accessor-pairs': (string | {
                            enforceForTSTypes: boolean;
                        })[];
                        'eslint/guard-for-in': "error";
                        'eslint/id-length': (string | {
                            checkGeneric: boolean;
                            exceptionPatterns: never[];
                            exceptions: never[];
                            max: number;
                            min: number;
                            properties: string;
                        })[];
                        'eslint/init-declarations': string[];
                        'eslint/max-classes-per-file': (string | {
                            ignoreExpressions: boolean;
                            max: number;
                        })[];
                        'eslint/max-depth': "off";
                        'eslint/max-lines': "off";
                        'eslint/max-lines-per-function': "off";
                        'eslint/max-nested-callbacks': "off";
                        'eslint/max-params': "off";
                        'eslint/max-statements': "off";
                        'eslint/new-cap': (string | {
                            capIsNew: boolean;
                            capIsNewExceptionPattern: string;
                            capIsNewExceptions: never[];
                            newIsCap: boolean;
                            newIsCapExceptionPattern: string;
                            newIsCapExceptions: string[];
                            properties: boolean;
                        })[];
                        'eslint/no-alert': "error";
                        'eslint/no-array-constructor': "error";
                        'eslint/no-async-promise-executor': "error";
                        'eslint/no-await-in-loop': "error";
                        'eslint/no-bitwise': (string | {
                            allow: never[];
                            int32Hint: boolean;
                        })[];
                        'eslint/no-caller': "error";
                        'eslint/no-case-declarations': "error";
                        'eslint/no-class-assign': "error";
                        'eslint/no-compare-neg-zero': "error";
                        'eslint/no-cond-assign': string[];
                        'eslint/no-console': "off";
                        'eslint/no-const-assign': "error";
                        'eslint/no-constant-binary-expression': "error";
                        'eslint/no-constant-condition': (string | {
                            checkLoops: string;
                        })[];
                        'eslint/no-constructor-return': "error";
                        'eslint/no-continue': "error";
                        'eslint/no-control-regex': "error";
                        'eslint/no-debugger': "error";
                        'eslint/no-delete-var': "error";
                        'eslint/no-div-regex': "error";
                        'eslint/no-dupe-class-members': "error";
                        'eslint/no-dupe-else-if': "error";
                        'eslint/no-dupe-keys': "error";
                        'eslint/no-duplicate-case': "error";
                        'eslint/no-duplicate-imports': (string | {
                            allowSeparateTypeImports: boolean;
                            includeExports: boolean;
                        })[];
                        'eslint/no-else-return': (string | {
                            allowElseIf: boolean;
                        })[];
                        'eslint/no-empty': (string | {
                            allowEmptyCatch: boolean;
                        })[];
                        'eslint/no-empty-character-class': "error";
                        'eslint/no-empty-function': "error";
                        'eslint/no-empty-pattern': "error";
                        'eslint/no-empty-static-block': "error";
                        'eslint/no-eq-null': "error";
                        'eslint/no-eval': (string | {
                            allowIndirect: boolean;
                        })[];
                        'eslint/no-ex-assign': "error";
                        'eslint/no-extend-native': (string | {
                            exceptions: never[];
                        })[];
                        'eslint/no-extra-bind': "error";
                        'eslint/no-extra-boolean-cast': "error";
                        'eslint/no-extra-label': "error";
                        'eslint/no-fallthrough': (string | {
                            allowEmptyCase: boolean;
                            commentPattern: null;
                            reportUnusedFallthroughComment: boolean;
                        })[];
                        'eslint/no-func-assign': "error";
                        'eslint/no-global-assign': (string | {
                            exceptions: never[];
                        })[];
                        'eslint/no-implicit-coercion': (string | {
                            allow: string[];
                            boolean: boolean;
                            disallowTemplateShorthand: boolean;
                            number: boolean;
                            string: boolean;
                        })[];
                        'eslint/no-import-assign': "error";
                        'eslint/no-inline-comments': (string | {
                            ignorePattern: null;
                        })[];
                        'eslint/no-inner-declarations': "off";
                        'eslint/no-invalid-regexp': (string | {
                            allowConstructorFlags: never[];
                        })[];
                        'eslint/no-irregular-whitespace': "error";
                        'eslint/no-iterator': "error";
                        'eslint/no-label-var': "error";
                        'eslint/no-labels': (string | {
                            allowLoop: boolean;
                            allowSwitch: boolean;
                        })[];
                        'eslint/no-lone-blocks': "error";
                        'eslint/no-lonely-if': "error";
                        'eslint/no-loop-func': "error";
                        'eslint/no-loss-of-precision': "error";
                        'eslint/no-magic-numbers': (string | {
                            detectObjects: boolean;
                            enforceConst: boolean;
                            ignore: number[];
                            ignoreArrayIndexes: boolean;
                            ignoreClassFieldInitialValues: boolean;
                            ignoreDefaultValues: boolean;
                            ignoreEnums: boolean;
                            ignoreNumericLiteralTypes: boolean;
                            ignoreReadonlyClassProperties: boolean;
                            ignoreTypeIndexes: boolean;
                        })[];
                        'eslint/no-misleading-character-class': (string | {
                            allowEscape: boolean;
                        })[];
                        'eslint/no-multi-assign': (string | {
                            ignoreNonDeclaration: boolean;
                        })[];
                        'eslint/no-multi-str': "error";
                        'eslint/no-negated-condition': "error";
                        'eslint/no-nested-ternary': "error";
                        'eslint/no-new': "error";
                        'eslint/no-new-func': "error";
                        'eslint/no-new-native-nonconstructor': "error";
                        'eslint/no-new-wrappers': "error";
                        'eslint/no-nonoctal-decimal-escape': "error";
                        'eslint/no-obj-calls': "error";
                        'eslint/no-object-constructor': "error";
                        'eslint/no-param-reassign': (string | {
                            ignorePropertyModificationsFor: never[];
                            ignorePropertyModificationsForRegex: never[];
                            props: boolean;
                        })[];
                        'eslint/no-plusplus': "off";
                        'eslint/no-promise-executor-return': (string | {
                            allowVoid: boolean;
                        })[];
                        'eslint/no-proto': "error";
                        'eslint/no-prototype-builtins': "error";
                        'eslint/no-redeclare': (string | {
                            builtinGlobals: boolean;
                        })[];
                        'eslint/no-regex-spaces': "error";
                        'eslint/no-restricted-globals': (string | {
                            restrictedGlobals: {};
                        })[];
                        'eslint/no-restricted-imports': (string | {
                            paths: never[];
                            patterns: never[];
                        })[];
                        'eslint/no-return-assign': string[];
                        'eslint/no-script-url': "error";
                        'eslint/no-self-assign': (string | {
                            props: boolean;
                        })[];
                        'eslint/no-self-compare': "error";
                        'eslint/no-sequences': (string | {
                            allowInParentheses: boolean;
                        })[];
                        'eslint/no-setter-return': "error";
                        'eslint/no-shadow': "off";
                        'eslint/no-shadow-restricted-names': (string | {
                            reportGlobalThis: boolean;
                        })[];
                        'eslint/no-sparse-arrays': "error";
                        'eslint/no-template-curly-in-string': "error";
                        'eslint/no-ternary': "off";
                        'eslint/no-this-before-super': "error";
                        'eslint/no-unassigned-vars': "error";
                        'eslint/no-undef': (string | {
                            typeof: boolean;
                        })[];
                        'eslint/no-undefined': "error";
                        'eslint/no-unexpected-multiline': "error";
                        'eslint/no-unmodified-loop-condition': "error";
                        'eslint/no-unneeded-ternary': (string | {
                            defaultAssignment: boolean;
                        })[];
                        'eslint/no-unreachable': "error";
                        'eslint/no-unsafe-finally': "error";
                        'eslint/no-unsafe-negation': (string | {
                            enforceForOrderingRelations: boolean;
                        })[];
                        'eslint/no-unsafe-optional-chaining': (string | {
                            disallowArithmeticOperators: boolean;
                        })[];
                        'eslint/no-unused-expressions': (string | {
                            allowShortCircuit: boolean;
                            allowTaggedTemplates: boolean;
                            allowTernary: boolean;
                            enforceForJSX: boolean;
                        })[];
                        'eslint/no-unused-labels': "error";
                        'eslint/no-unused-private-class-members': "error";
                        'eslint/no-unused-vars': (string | {
                            args: string;
                            argsIgnorePattern: string;
                            caughtErrors: string;
                            caughtErrorsIgnorePattern: string;
                            destructuredArrayIgnorePattern: string;
                            fix: {
                                imports: string;
                                variables: string;
                            };
                            ignoreClassWithStaticInitBlock: boolean;
                            ignoreRestSiblings: boolean;
                            ignoreUsingDeclarations: boolean;
                            reportUsedIgnorePattern: boolean;
                            reportVarsOnlyUsedAsTypes: boolean;
                            vars: string;
                            varsIgnorePattern: string;
                        })[];
                        'eslint/no-use-before-define': (string | {
                            allowNamedExports: boolean;
                            classes: boolean;
                            enums: boolean;
                            functions: boolean;
                            ignoreTypeReferences: boolean;
                            typedefs: boolean;
                            variables: boolean;
                        })[];
                        'eslint/no-useless-backreference': "error";
                        'eslint/no-useless-call': "error";
                        'eslint/no-useless-catch': "error";
                        'eslint/no-useless-computed-key': (string | {
                            enforceForClassMembers: boolean;
                        })[];
                        'eslint/no-useless-concat': "error";
                        'eslint/no-useless-constructor': "error";
                        'eslint/no-useless-escape': (string | {
                            allowRegexCharacters: never[];
                        })[];
                        'eslint/no-useless-rename': (string | {
                            ignoreDestructuring: boolean;
                            ignoreExport: boolean;
                            ignoreImport: boolean;
                        })[];
                        'eslint/no-useless-return': "error";
                        'eslint/no-var': "error";
                        'eslint/no-void': (string | {
                            allowAsStatement: boolean;
                        })[];
                        'eslint/no-warning-comments': "off";
                        'eslint/no-with': "error";
                        'eslint/operator-assignment': string[];
                        'eslint/prefer-const': (string | {
                            destructuring: string;
                            ignoreReadBeforeAssign: boolean;
                        })[];
                        'eslint/prefer-destructuring': (string | {
                            AssignmentExpression: {
                                array: boolean;
                                object: boolean;
                            };
                            VariableDeclarator: {
                                array: boolean;
                                object: boolean;
                            };
                            enforceForRenamedProperties: boolean;
                        })[];
                        'eslint/prefer-exponentiation-operator': "error";
                        'eslint/prefer-numeric-literals': "error";
                        'eslint/prefer-object-has-own': "error";
                        'eslint/prefer-object-spread': "error";
                        'eslint/prefer-promise-reject-errors': (string | {
                            allowEmptyReject: boolean;
                        })[];
                        'eslint/prefer-rest-params': "error";
                        'eslint/prefer-spread': "error";
                        'eslint/prefer-template': "error";
                        'eslint/preserve-caught-error': (string | {
                            requireCatchParameter: boolean;
                        })[];
                        'eslint/radix': "error";
                        'eslint/require-await': "off";
                        'eslint/require-yield': "error";
                        'eslint/sort-imports': (string | {
                            allowSeparatedGroups: boolean;
                            ignoreCase: boolean;
                            ignoreDeclarationSort: boolean;
                            ignoreMemberSort: boolean;
                            memberSyntaxSortOrder: string[];
                        })[];
                        'eslint/sort-keys': (string | {
                            allowLineSeparatedGroups: boolean;
                            caseSensitive: boolean;
                            minKeys: number;
                            natural: boolean;
                        })[];
                        'eslint/sort-vars': (string | {
                            ignoreCase: boolean;
                        })[];
                        'eslint/symbol-description': "error";
                        'eslint/unicode-bom': string[];
                        'eslint/use-isnan': (string | {
                            enforceForIndexOf: boolean;
                            enforceForSwitchCase: boolean;
                        })[];
                        'eslint/valid-typeof': (string | {
                            requireStringLiterals: boolean;
                        })[];
                        'eslint/vars-on-top': "error";
                        'eslint/yoda': (string | {
                            exceptRange: boolean;
                            onlyEquality: boolean;
                        })[];
                    };
                } | {
                    overrides: {
                        files: string[];
                        rules: {
                            'import/no-default-export': "off";
                        };
                    }[];
                    rules: {
                        'import/consistent-type-specifier-style': string[];
                        'import/default': "error";
                        'import/export': "error";
                        'import/exports-last': "off";
                        'import/extensions': (string | {
                            checkTypeImports: boolean;
                            ignorePackages: boolean;
                            pathGroupOverrides: never[];
                        })[];
                        'import/first': string[];
                        'import/group-exports': "off";
                        'import/max-dependencies': "off";
                        'import/named': "error";
                        'import/namespace': (string | {
                            allowComputed: boolean;
                        })[];
                        'import/no-absolute-path': (string | {
                            amd: boolean;
                            commonjs: boolean;
                            esmodule: boolean;
                        })[];
                        'import/no-amd': "error";
                        'import/no-anonymous-default-export': (string | {
                            allowAnonymousClass: boolean;
                            allowAnonymousFunction: boolean;
                            allowArray: boolean;
                            allowArrowFunction: boolean;
                            allowCallExpression: boolean;
                            allowLiteral: boolean;
                            allowNew: boolean;
                            allowObject: boolean;
                        })[];
                        'import/no-commonjs': "error";
                        'import/no-cycle': (string | {
                            allowUnsafeDynamicCyclicDependency: boolean;
                            ignoreExternal: boolean;
                            ignoreTypes: boolean;
                            maxDepth: number;
                        })[];
                        'import/no-default-export': "error";
                        'import/no-duplicates': (string | {
                            considerQueryString: boolean;
                            preferInline: boolean;
                        })[];
                        'import/no-dynamic-require': (string | {
                            esmodule: boolean;
                        })[];
                        'import/no-empty-named-blocks': "error";
                        'import/no-mutable-exports': "error";
                        'import/no-named-as-default': "error";
                        'import/no-named-as-default-member': "error";
                        'import/no-named-default': "error";
                        'import/no-named-export': "off";
                        'import/no-namespace': (string | {
                            ignore: never[];
                        })[];
                        'import/no-nodejs-modules': "off";
                        'import/no-relative-parent-imports': "error";
                        'import/no-self-import': "error";
                        'import/no-unassigned-import': "off";
                        'import/no-webpack-loader-syntax': "error";
                        'import/prefer-default-export': "off";
                        'import/unambiguous': "error";
                    };
                } | {
                    rules: {
                        'node/global-require': "error";
                        'node/no-exports-assign': "error";
                        'node/no-new-require': "error";
                        'node/no-path-concat': "error";
                        'node/no-process-env': "off";
                    };
                } | {
                    rules: {
                        'oxc/approx-constant': "error";
                        'oxc/bad-array-method-on-arguments': "error";
                        'oxc/bad-bitwise-operator': "error";
                        'oxc/bad-char-at-comparison': "error";
                        'oxc/bad-comparison-sequence': "error";
                        'oxc/bad-min-max-func': "error";
                        'oxc/bad-object-literal-comparison': "error";
                        'oxc/bad-replace-all-arg': "error";
                        'oxc/branches-sharing-code': "error";
                        'oxc/const-comparisons': "error";
                        'oxc/double-comparisons': "error";
                        'oxc/erasing-op': "error";
                        'oxc/misrefactored-assign-op': "error";
                        'oxc/missing-throw': "error";
                        'oxc/no-accumulating-spread': "error";
                        'oxc/no-async-await': "off";
                        'oxc/no-async-endpoint-handlers': (string | {
                            allowedNames: never[];
                        })[];
                        'oxc/no-barrel-file': (string | {
                            threshold: number;
                        })[];
                        'oxc/no-const-enum': "error";
                        'oxc/no-map-spread': (string | {
                            ignoreArgs: boolean;
                            ignoreRereads: boolean;
                        })[];
                        'oxc/no-optional-chaining': "off";
                        'oxc/no-rest-spread-properties': "off";
                        'oxc/no-this-in-exported-function': "error";
                        'oxc/number-arg-out-of-range': "error";
                        'oxc/only-used-in-recursion': "error";
                        'oxc/uninvoked-array-callback': "error";
                    };
                } | {
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
                } | {
                    rules: {
                        'typescript/adjacent-overload-signatures': "error";
                        'typescript/array-type': (string | {
                            default: string;
                            readonly: string;
                        })[];
                        'typescript/await-thenable': "error";
                        'typescript/ban-ts-comment': (string | {
                            minimumDescriptionLength: number;
                            'ts-check': boolean;
                            'ts-expect-error': string;
                            'ts-ignore': boolean;
                            'ts-nocheck': string;
                        })[];
                        'typescript/ban-tslint-comment': "error";
                        'typescript/class-literal-property-style': string[];
                        'typescript/consistent-generic-constructors': (string | {
                            option: string;
                        })[];
                        'typescript/consistent-indexed-object-style': string[];
                        'typescript/consistent-return': (string | {
                            treatUndefinedAsUnspecified: boolean;
                        })[];
                        'typescript/consistent-type-assertions': (string | {
                            assertionStyle: string;
                        })[];
                        'typescript/consistent-type-definitions': string[];
                        'typescript/consistent-type-exports': (string | {
                            fixMixedExportsWithInlineTypeSpecifier: boolean;
                        })[];
                        'typescript/consistent-type-imports': (string | {
                            disallowTypeAnnotations: boolean;
                            fixStyle: string;
                            prefer: string;
                        })[];
                        'typescript/dot-notation': (string | {
                            allowIndexSignaturePropertyAccess: boolean;
                            allowKeywords: boolean;
                            allowPattern: string;
                            allowPrivateClassPropertyAccess: boolean;
                            allowProtectedClassPropertyAccess: boolean;
                        })[];
                        'typescript/explicit-function-return-type': (string | {
                            allowConciseArrowFunctionExpressionsStartingWithVoid: boolean;
                            allowDirectConstAssertionInArrowFunctions: boolean;
                            allowExpressions: boolean;
                            allowFunctionsWithoutTypeParameters: boolean;
                            allowHigherOrderFunctions: boolean;
                            allowIIFEs: boolean;
                            allowTypedFunctionExpressions: boolean;
                            allowedNames: never[];
                        })[];
                        'typescript/explicit-module-boundary-types': (string | {
                            allowArgumentsExplicitlyTypedAsAny: boolean;
                            allowDirectConstAssertionInArrowFunctions: boolean;
                            allowHigherOrderFunctions: boolean;
                            allowOverloadFunctions: boolean;
                            allowTypedFunctionExpressions: boolean;
                            allowedNames: never[];
                        })[];
                        'typescript/no-array-delete': "error";
                        'typescript/no-base-to-string': (string | {
                            checkUnknown: boolean;
                            ignoredTypeNames: string[];
                        })[];
                        'typescript/no-confusing-non-null-assertion': "error";
                        'typescript/no-confusing-void-expression': (string | {
                            ignoreArrowShorthand: boolean;
                            ignoreVoidOperator: boolean;
                            ignoreVoidReturningFunctions: boolean;
                        })[];
                        'typescript/no-deprecated': (string | {
                            allow: never[];
                        })[];
                        'typescript/no-duplicate-enum-values': "error";
                        'typescript/no-duplicate-type-constituents': (string | {
                            ignoreIntersections: boolean;
                            ignoreUnions: boolean;
                        })[];
                        'typescript/no-dynamic-delete': "error";
                        'typescript/no-empty-interface': (string | {
                            allowSingleExtends: boolean;
                        })[];
                        'typescript/no-empty-object-type': (string | {
                            allowInterfaces: string;
                            allowObjectTypes: string;
                            allowWithName: string;
                        })[];
                        'typescript/no-explicit-any': (string | {
                            fixToUnknown: boolean;
                            ignoreRestArgs: boolean;
                        })[];
                        'typescript/no-extra-non-null-assertion': "error";
                        'typescript/no-extraneous-class': (string | {
                            allowConstructorOnly: boolean;
                            allowEmpty: boolean;
                            allowStaticOnly: boolean;
                            allowWithDecorator: boolean;
                        })[];
                        'typescript/no-floating-promises': (string | {
                            allowForKnownSafeCalls: never[];
                            allowForKnownSafePromises: never[];
                            checkThenables: boolean;
                            ignoreIIFE: boolean;
                            ignoreVoid: boolean;
                        })[];
                        'typescript/no-for-in-array': "error";
                        'typescript/no-implied-eval': "error";
                        'typescript/no-import-type-side-effects': "error";
                        'typescript/no-inferrable-types': (string | {
                            ignoreParameters: boolean;
                            ignoreProperties: boolean;
                        })[];
                        'typescript/no-invalid-void-type': (string | {
                            allowAsThisParameter: boolean;
                            allowInGenericTypeArguments: boolean;
                        })[];
                        'typescript/no-meaningless-void-operator': (string | {
                            checkNever: boolean;
                        })[];
                        'typescript/no-misused-new': "error";
                        'typescript/no-misused-promises': (string | {
                            checksConditionals: boolean;
                            checksSpreads: boolean;
                            checksVoidReturn: {
                                arguments: boolean;
                                attributes: boolean;
                                inheritedMethods: boolean;
                                properties: boolean;
                                returns: boolean;
                                variables: boolean;
                            };
                        })[];
                        'typescript/no-misused-spread': (string | {
                            allow: never[];
                        })[];
                        'typescript/no-mixed-enums': "error";
                        'typescript/no-namespace': (string | {
                            allowDeclarations: boolean;
                            allowDefinitionFiles: boolean;
                        })[];
                        'typescript/no-non-null-asserted-nullish-coalescing': "error";
                        'typescript/no-non-null-asserted-optional-chain': "error";
                        'typescript/no-non-null-assertion': "off";
                        'typescript/no-redundant-type-constituents': "error";
                        'typescript/no-require-imports': (string | {
                            allow: never[];
                            allowAsImport: boolean;
                        })[];
                        'typescript/no-restricted-types': (string | {
                            types: {};
                        })[];
                        'typescript/no-this-alias': (string | {
                            allowDestructuring: boolean;
                            allowedNames: never[];
                        })[];
                        'typescript/no-unnecessary-boolean-literal-compare': (string | {
                            allowComparingNullableBooleansToFalse: boolean;
                            allowComparingNullableBooleansToTrue: boolean;
                        })[];
                        'typescript/no-unnecessary-condition': (string | {
                            allowConstantLoopConditions: string;
                            checkTypePredicates: boolean;
                        })[];
                        'typescript/no-unnecessary-parameter-property-assignment': "error";
                        'typescript/no-unnecessary-qualifier': "error";
                        'typescript/no-unnecessary-template-expression': "error";
                        'typescript/no-unnecessary-type-arguments': "error";
                        'typescript/no-unnecessary-type-assertion': (string | {
                            checkLiteralConstAssertions: boolean;
                            typesToIgnore: never[];
                        })[];
                        'typescript/no-unnecessary-type-constraint': "error";
                        'typescript/no-unnecessary-type-convertion': "error";
                        'typescript/no-unnecessary-type-parameters': "error";
                        'typescript/no-unsafe-argument': "error";
                        'typescript/no-unsafe-assignment': "error";
                        'typescript/no-unsafe-call': "error";
                        'typescript/no-unsafe-declaration-merging': "error";
                        'typescript/no-unsafe-enum-comparison': "error";
                        'typescript/no-unsafe-function-type': "error";
                        'typescript/no-unsafe-member-access': (string | {
                            allowOptionalChaining: boolean;
                        })[];
                        'typescript/no-unsafe-return': "error";
                        'typescript/no-unsafe-type-assertion': "error";
                        'typescript/no-unsafe-unary-minus': "error";
                        'typescript/no-useless-default-assignment': "error";
                        'typescript/no-useless-empty-export': "error";
                        'typescript/no-var-requires': "error";
                        'typescript/no-wrapper-object-types': "error";
                        'typescript/non-nullable-type-assertion-style': "error";
                        'typescript/only-throw-error': (string | {
                            allow: {
                                from: string;
                                name: string;
                            }[];
                            allowRethrowing: boolean;
                            allowThrowingAny: boolean;
                            allowThrowingUnknown: boolean;
                        })[];
                        'typescript/parameter-properties': (string | {
                            allow: never[];
                            prefer: string;
                        })[];
                        'typescript/prefer-as-const': "error";
                        'typescript/prefer-enum-initializers': "error";
                        'typescript/prefer-find': "error";
                        'typescript/prefer-for-of': "error";
                        'typescript/prefer-function-type': "error";
                        'typescript/prefer-includes': "error";
                        'typescript/prefer-literal-enum-member': (string | {
                            allowBitwiseExpressions: boolean;
                        })[];
                        'typescript/prefer-nullish-coalescing': (string | {
                            ignoreBooleanCoercion: boolean;
                            ignoreConditionalTests: boolean;
                            ignoreIfStatements: boolean;
                            ignoreMixedLogicalExpressions: boolean;
                            ignorePrimitives: {
                                bigint: boolean;
                                boolean: boolean;
                                number: boolean;
                                string: boolean;
                            };
                            ignoreTernaryTests: boolean;
                        })[];
                        'typescript/prefer-optional-chain': (string | {
                            allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: boolean;
                            checkAny: boolean;
                            checkBigInt: boolean;
                            checkBoolean: boolean;
                            checkNumber: boolean;
                            checkString: boolean;
                            checkUnknown: boolean;
                            requireNullish: boolean;
                        })[];
                        'typescript/prefer-promise-reject-errors': (string | {
                            allowEmptyReject: boolean;
                            allowThrowingAny: boolean;
                            allowThrowingUnknown: boolean;
                        })[];
                        'typescript/prefer-readonly': (string | {
                            onlyInlineLambdas: boolean;
                        })[];
                        'typescript/prefer-readonly-parameter-types': (string | {
                            allow: never[];
                            checkParameterProperties: boolean;
                            ignoreInferredTypes: boolean;
                            treatMethodsAsReadonly: boolean;
                        })[];
                        'typescript/prefer-reduce-type-parameter': "error";
                        'typescript/prefer-regexp-exec': "error";
                        'typescript/prefer-return-this-type': "error";
                        'typescript/prefer-string-starts-ends-with': (string | {
                            allowSingleElementEquality: string;
                        })[];
                        'typescript/prefer-ts-expect-error': "error";
                        'typescript/promise-function-async': (string | {
                            allowAny: boolean;
                            allowedPromiseNames: never[];
                            checkArrowFunctions: boolean;
                            checkFunctionDeclarations: boolean;
                            checkFunctionExpressions: boolean;
                            checkMethodDeclarations: boolean;
                        })[];
                        'typescript/related-getter-setter-pairs': "error";
                        'typescript/require-array-sort-compare': "off";
                        'typescript/require-await': "error";
                        'typescript/restrict-plus-operands': (string | {
                            allowAny: boolean;
                            allowBoolean: boolean;
                            allowNullish: boolean;
                            allowNumberAndString: boolean;
                            allowRegExp: boolean;
                            skipCompoundAssignments: boolean;
                        })[];
                        'typescript/restrict-template-expressions': (string | {
                            allow: {
                                from: string;
                                name: string[];
                            }[];
                            allowAny: boolean;
                            allowArray: boolean;
                            allowBoolean: boolean;
                            allowNever: boolean;
                            allowNullish: boolean;
                            allowNumber: boolean;
                            allowRegExp: boolean;
                        })[];
                        'typescript/return-await': string[];
                        'typescript/strict-boolean-expressions': "off";
                        'typescript/strict-void-return': (string | {
                            allowReturnAny: boolean;
                        })[];
                        'typescript/switch-exhaustiveness-check': (string | {
                            allowDefaultCaseForExhaustiveSwitch: boolean;
                            considerDefaultExhaustiveForUnions: boolean;
                            defaultCaseCommentPattern: string;
                            requireDefaultForNonUnion: boolean;
                        })[];
                        'typescript/triple-slash-reference': (string | {
                            lib: string;
                            path: string;
                            types: string;
                        })[];
                        'typescript/unbound-method': (string | {
                            ignoreStatic: boolean;
                        })[];
                        'typescript/unified-signatures': (string | {
                            ignoreDifferentlyNamedParameters: boolean;
                            ignoreOverloadsWithDifferentJSDoc: boolean;
                        })[];
                        'typescript/use-unknown-in-catch-callback-variable': "error";
                    };
                } | {
                    rules: {
                        'unicorn/catch-error-name': (string | {
                            ignore: never[];
                            name: string;
                        })[];
                        'unicorn/consistent-assert': "error";
                        'unicorn/consistent-date-clone': "error";
                        'unicorn/consistent-empty-array-spread': "error";
                        'unicorn/consistent-existence-index-check': "error";
                        'unicorn/consistent-function-scoping': (string | {
                            checkArrowFunctions: boolean;
                        })[];
                        'unicorn/empty-brace-spaces': "error";
                        'unicorn/error-message': "error";
                        'unicorn/escape-case': "error";
                        'unicorn/explicit-length-check': (string | {
                            'non-zero': string;
                        })[];
                        'unicorn/filename-case': (string | {
                            case: string;
                            ignore: string;
                            multipleFileExtensions: boolean;
                        })[];
                        'unicorn/new-for-builtins': "error";
                        'unicorn/no-abusive-eslint-disable': "error";
                        'unicorn/no-accessor-recursion': "error";
                        'unicorn/no-anonymous-default-export': "off";
                        'unicorn/no-array-callback-reference': "error";
                        'unicorn/no-array-for-each': "error";
                        'unicorn/no-array-method-this-argument': "error";
                        'unicorn/no-array-reduce': "off";
                        'unicorn/no-array-reverse': "error";
                        'unicorn/no-array-sort': "error";
                        'unicorn/no-await-expression-member': "error";
                        'unicorn/no-await-in-promise-methods': "error";
                        'unicorn/no-console-spaces': "error";
                        'unicorn/no-document-cookie': "error";
                        'unicorn/no-empty-file': "error";
                        'unicorn/no-hex-escape': "error";
                        'unicorn/no-immediate-mutation': "error";
                        'unicorn/no-instanceof-array': "error";
                        'unicorn/no-instanceof-builtins': (string | {
                            exclude: never[];
                            include: never[];
                            strategy: string;
                            useErrorIsError: boolean;
                        })[];
                        'unicorn/no-invalid-fetch-options': "error";
                        'unicorn/no-invalid-remove-event-listener': "error";
                        'unicorn/no-length-as-slice-end': "error";
                        'unicorn/no-lonely-if': "error";
                        'unicorn/no-magic-array-flat-depth': "error";
                        'unicorn/no-negation-in-equality-check': "error";
                        'unicorn/no-nested-ternary': "error";
                        'unicorn/no-new-array': "error";
                        'unicorn/no-new-buffer': "error";
                        'unicorn/no-null': "off";
                        'unicorn/no-object-as-default-parameter': "error";
                        'unicorn/no-process-exit': "error";
                        'unicorn/no-single-promise-in-promise-methods': "error";
                        'unicorn/no-static-only-class': "error";
                        'unicorn/no-thenable': "error";
                        'unicorn/no-this-assignment': "error";
                        'unicorn/no-typeof-undefined': (string | {
                            checkGlobalVariables: boolean;
                        })[];
                        'unicorn/no-unnecessary-array-flat-depth': "error";
                        'unicorn/no-unnecessary-array-splice-count': "error";
                        'unicorn/no-unnecessary-await': "error";
                        'unicorn/no-unnecessary-slice-end': "error";
                        'unicorn/no-unreadable-array-destructuring': "error";
                        'unicorn/no-unreadable-iife': "error";
                        'unicorn/no-useless-collection-argument': "error";
                        'unicorn/no-useless-error-capture-stack-trace': "error";
                        'unicorn/no-useless-fallback-in-spread': "error";
                        'unicorn/no-useless-length-check': "error";
                        'unicorn/no-useless-promise-resolve-reject': (string | {
                            allowReject: boolean;
                        })[];
                        'unicorn/no-useless-spread': "error";
                        'unicorn/no-useless-switch-case': "error";
                        'unicorn/no-useless-undefined': (string | {
                            checkArguments: boolean;
                            checkArrowFunctionBody: boolean;
                        })[];
                        'unicorn/no-zero-fractions': "error";
                        'unicorn/number-literal-case': "off";
                        'unicorn/numeric-separators-style': (string | {
                            binary: {
                                groupLength: number;
                                minimumDigits: number;
                            };
                            hexadecimal: {
                                groupLength: number;
                                minimumDigits: number;
                            };
                            number: {
                                groupLength: number;
                                minimumDigits: number;
                            };
                            octal: {
                                groupLength: number;
                                minimumDigits: number;
                            };
                            onlyIfContainsSeparator: boolean;
                        })[];
                        'unicorn/prefer-add-event-listener': "error";
                        'unicorn/prefer-array-find': "error";
                        'unicorn/prefer-array-flat': "error";
                        'unicorn/prefer-array-flat-map': "error";
                        'unicorn/prefer-array-index-of': "error";
                        'unicorn/prefer-array-some': "error";
                        'unicorn/prefer-at': (string | {
                            checkAllIndexAccess: boolean;
                            getLastElementFunctions: never[];
                        })[];
                        'unicorn/prefer-bigint-literals': "error";
                        'unicorn/prefer-blob-reading-methods': "error";
                        'unicorn/prefer-class-fields': "error";
                        'unicorn/prefer-classlist-toggle': "error";
                        'unicorn/prefer-code-point': "error";
                        'unicorn/prefer-date-now': "error";
                        'unicorn/prefer-default-parameters': "error";
                        'unicorn/prefer-dom-node-append': "error";
                        'unicorn/prefer-dom-node-dataset': "error";
                        'unicorn/prefer-dom-node-remove': "error";
                        'unicorn/prefer-dom-node-text-content': "error";
                        'unicorn/prefer-event-target': "error";
                        'unicorn/prefer-global-this': "error";
                        'unicorn/prefer-includes': "error";
                        'unicorn/prefer-keyboard-event-key': "error";
                        'unicorn/prefer-logical-operator-over-ternary': "error";
                        'unicorn/prefer-math-min-max': "error";
                        'unicorn/prefer-math-trunc': "error";
                        'unicorn/prefer-modern-dom-apis': "error";
                        'unicorn/prefer-modern-math-apis': "error";
                        'unicorn/prefer-module': "error";
                        'unicorn/prefer-native-coercion-functions': "error";
                        'unicorn/prefer-negative-index': "error";
                        'unicorn/prefer-node-protocol': "error";
                        'unicorn/prefer-number-properties': (string | {
                            checkInfinity: boolean;
                            checkNaN: boolean;
                        })[];
                        'unicorn/prefer-object-from-entries': (string | {
                            functions: string[];
                        })[];
                        'unicorn/prefer-optional-catch-binding': "error";
                        'unicorn/prefer-prototype-methods': "error";
                        'unicorn/prefer-query-selector': "error";
                        'unicorn/prefer-reflect-apply': "error";
                        'unicorn/prefer-regexp-test': "error";
                        'unicorn/prefer-response-static-json': "error";
                        'unicorn/prefer-set-has': "error";
                        'unicorn/prefer-set-size': "error";
                        'unicorn/prefer-spread': "error";
                        'unicorn/prefer-string-raw': "error";
                        'unicorn/prefer-string-replace-all': "error";
                        'unicorn/prefer-string-slice': "error";
                        'unicorn/prefer-string-starts-ends-with': "error";
                        'unicorn/prefer-string-trim-start-end': "error";
                        'unicorn/prefer-structured-clone': (string | {
                            functions: string[];
                        })[];
                        'unicorn/prefer-ternary': string[];
                        'unicorn/prefer-top-level-await': "error";
                        'unicorn/prefer-type-error': "error";
                        'unicorn/relative-url-style': string[];
                        'unicorn/require-array-join-separator': "error";
                        'unicorn/require-module-attributes': "error";
                        'unicorn/require-module-specifiers': "error";
                        'unicorn/require-number-to-fixed-digits-argument': "error";
                        'unicorn/require-post-message-target-origin': "error";
                        'unicorn/switch-case-braces': string[];
                        'unicorn/text-encoding-identifier-case': (string | {
                            withDash: boolean;
                        })[];
                        'unicorn/throw-new-error': "error";
                    };
                } | {
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
                })[];
            }[];
            plugins: ("eslint" | "import" | "node" | "oxc" | "promise" | "typescript" | "unicorn" | "vitest")[];
        } | {
            extends: {
                extends: ({
                    rules: {
                        "jsx-a11y/alt-text": (string | {
                            area: never[];
                            img: string[];
                            'input[type="image"]': never[];
                            object: never[];
                        })[];
                        "jsx-a11y/anchor-ambiguous-text": (string | {
                            words: string[];
                        })[];
                        "jsx-a11y/anchor-has-content": "error";
                        "jsx-a11y/anchor-is-valid": (string | {
                            validHrefs: never[];
                        })[];
                        "jsx-a11y/aria-activedescendant-has-tabindex": "error";
                        "jsx-a11y/aria-props": "error";
                        "jsx-a11y/aria-proptypes": "error";
                        "jsx-a11y/aria-role": (string | {
                            allowedInvalidRoles: never[];
                            ignoreNonDOM: boolean;
                        })[];
                        "jsx-a11y/aria-unsupported-elements": "error";
                        "jsx-a11y/autocomplete-valid": (string | {
                            inputComponents: string[];
                        })[];
                        "jsx-a11y/click-events-have-key-events": "error";
                        "jsx-a11y/heading-has-content": (string | {
                            components: never[];
                        })[];
                        "jsx-a11y/html-has-lang": "error";
                        "jsx-a11y/iframe-has-title": "error";
                        "jsx-a11y/img-redundant-alt": (string | {
                            components: string[];
                            words: string[];
                        })[];
                        "jsx-a11y/label-has-associated-control": (string | {
                            assert: string;
                            controlComponents: never[];
                            depth: number;
                            labelAttributes: string[];
                            labelComponents: string[];
                        })[];
                        "jsx-a11y/lang": "error";
                        "jsx-a11y/media-has-caption": (string | {
                            audio: string[];
                            track: string[];
                            video: string[];
                        })[];
                        "jsx-a11y/mouse-events-have-key-events": (string | {
                            hoverInHandlers: string[];
                            hoverOutHandlers: string[];
                        })[];
                        "jsx-a11y/no-access-key": "error";
                        "jsx-a11y/no-aria-hidden-on-focusable": "error";
                        "jsx-a11y/no-autofocus": (string | {
                            ignoreNonDOM: boolean;
                        })[];
                        "jsx-a11y/no-distracting-elements": (string | {
                            elements: string[];
                        })[];
                        "jsx-a11y/no-noninteractive-tabindex": (string | {
                            allowExpressionValues: boolean;
                            roles: string[];
                            tags: never[];
                        })[];
                        "jsx-a11y/no-redundant-roles": "error";
                        "jsx-a11y/no-static-element-interactions": "error";
                        "jsx-a11y/prefer-tag-over-role": "error";
                        "jsx-a11y/role-has-required-aria-props": "error";
                        "jsx-a11y/role-supports-aria-props": "error";
                        "jsx-a11y/scope": "error";
                        "jsx-a11y/tabindex-no-positive": "error";
                    };
                } | {
                    rules: {
                        "react/jsx-boolean-value": (string | {
                            always: never[];
                            assumeUndefinedIsFalse: boolean;
                        })[];
                        "react/jsx-curly-brace-presence": (string | {
                            children: string;
                            propElementValues: string;
                            props: string;
                        })[];
                        "react/jsx-filename-extension": "off";
                        "react/jsx-fragments": string[];
                        "react/jsx-handler-names": (string | {
                            checkInlineFunctions: boolean;
                            checkLocalVariables: boolean;
                            eventHandlerPrefixes: string;
                            eventHandlerPropPrefixes: string;
                            eventHandlerPropRegex: string;
                            eventHandlerRegex: string;
                            ignoreComponentNames: never[];
                        })[];
                        "react/jsx-key": (string | {
                            checkFragmentShorthand: boolean;
                            checkKeyMustBeforeSpread: boolean;
                            warnOnDuplicates: boolean;
                        })[];
                        "react/jsx-max-depth": (string | {
                            max: number;
                        })[];
                        "react/jsx-no-comment-textnodes": "error";
                        "react/jsx-no-constructed-context-values": "error";
                        "react/jsx-no-duplicate-props": "error";
                        "react/jsx-no-script-url": (string | {
                            components: {};
                            includeFromSettings: boolean;
                        })[];
                        "react/jsx-no-target-blank": (string | {
                            allowReferrer: boolean;
                            enforceDynamicLinks: string;
                            forms: boolean;
                            links: boolean;
                            warnOnSpreadAttributes: boolean;
                        })[];
                        "react/jsx-no-undef": "error";
                        "react/jsx-no-useless-fragment": (string | {
                            allowExpressions: boolean;
                        })[];
                        "react/jsx-pascal-case": (string | {
                            allowAllCaps: boolean;
                            allowLeadingUnderscore: boolean;
                            allowNamespace: boolean;
                            ignore: never[];
                        })[];
                        "react/jsx-props-no-spread-multi": "error";
                        "react/jsx-props-no-spreading": "off";
                    };
                } | {
                    rules: {
                        'react-perf/jsx-no-jsx-as-prop': "error";
                        'react-perf/jsx-no-new-array-as-prop': "error";
                        'react-perf/jsx-no-new-function-as-prop': "error";
                        'react-perf/jsx-no-new-object-as-prop': "error";
                    };
                })[];
            }[];
            plugins: ("jsx-a11y" | "react" | "react-perf")[];
        })[];
    })[];
    plugins: "nextjs"[];
};
