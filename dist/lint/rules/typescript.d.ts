export declare const typescriptRules: {
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
};
