import { defineConfig } from 'oxlint';

export const typescriptRules = defineConfig({
    rules: {
        'typescript/adjacent-overload-signatures': 'error',
        'typescript/array-type': [
            'error',
            { default: 'generic', readonly: 'generic' }
        ],
        'typescript/await-thenable': 'error',
        'typescript/ban-ts-comment': [
            'error',
            {
                minimumDescriptionLength: 1,
                'ts-check': false,
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': true,
                'ts-nocheck': 'allow-with-description'
            }
        ],
        'typescript/ban-tslint-comment': 'error',
        'typescript/class-literal-property-style': ['error', 'fields'],
        'typescript/consistent-generic-constructors': [
            'error',
            { option: 'constructor' }
        ],
        'typescript/consistent-indexed-object-style': ['error', 'record'],
        'typescript/consistent-return': [
            'error',
            { treatUndefinedAsUnspecified: false }
        ],
        'typescript/consistent-type-assertions': [
            'error',
            { assertionStyle: 'never' }
        ],
        'typescript/consistent-type-definitions': ['error', 'interface'],
        'typescript/consistent-type-exports': [
            'error',
            { fixMixedExportsWithInlineTypeSpecifier: false }
        ],
        'typescript/consistent-type-imports': [
            'error',
            {
                disallowTypeAnnotations: true,
                fixStyle: 'separate-type-imports',
                prefer: 'type-imports'
            }
        ],
        'typescript/dot-notation': [
            'error',
            {
                allowIndexSignaturePropertyAccess: false,
                allowKeywords: true,
                allowPattern: '',
                allowPrivateClassPropertyAccess: false,
                allowProtectedClassPropertyAccess: false
            }
        ],
        'typescript/explicit-function-return-type': [
            'error',
            {
                allowConciseArrowFunctionExpressionsStartingWithVoid: false,
                allowDirectConstAssertionInArrowFunctions: true,
                allowExpressions: false,
                allowFunctionsWithoutTypeParameters: false,
                allowHigherOrderFunctions: true,
                allowIIFEs: false,
                allowTypedFunctionExpressions: true,
                allowedNames: []
            }
        ],
        'typescript/explicit-module-boundary-types': [
            'error',
            {
                allowArgumentsExplicitlyTypedAsAny: false,
                allowDirectConstAssertionInArrowFunctions: true,
                allowHigherOrderFunctions: true,
                allowOverloadFunctions: false,
                allowTypedFunctionExpressions: true,
                allowedNames: []
            }
        ],
        'typescript/no-array-delete': 'error',
        'typescript/no-base-to-string': [
            'error',
            {
                checkUnknown: false,
                ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams']
            }
        ],
        'typescript/no-confusing-non-null-assertion': 'error',
        'typescript/no-confusing-void-expression': [
            'error',
            {
                ignoreArrowShorthand: false,
                ignoreVoidOperator: false,
                ignoreVoidReturningFunctions: false
            }
        ],
        'typescript/no-deprecated': ['error', { allow: [] }],
        'typescript/no-duplicate-enum-values': 'error',
        'typescript/no-duplicate-type-constituents': [
            'error',
            { ignoreIntersections: false, ignoreUnions: false }
        ],
        'typescript/no-dynamic-delete': 'error',
        'typescript/no-empty-interface': [
            'error',
            { allowSingleExtends: true }
        ],
        'typescript/no-empty-object-type': [
            'error',
            {
                allowInterfaces: 'with-single-extends',
                allowObjectTypes: 'never',
                allowWithName: 'Props$'
            }
        ],
        'typescript/no-explicit-any': [
            'error',
            { fixToUnknown: true, ignoreRestArgs: false }
        ],
        'typescript/no-extra-non-null-assertion': 'error',
        'typescript/no-extraneous-class': [
            'error',
            {
                allowConstructorOnly: false,
                allowEmpty: false,
                allowStaticOnly: false,
                allowWithDecorator: false
            }
        ],
        'typescript/no-floating-promises': [
            'error',
            {
                allowForKnownSafeCalls: [],
                allowForKnownSafePromises: [],
                checkThenables: true,
                ignoreIIFE: false,
                ignoreVoid: false
            }
        ],
        'typescript/no-for-in-array': 'error',
        'typescript/no-implied-eval': 'error',
        'typescript/no-import-type-side-effects': 'error',
        'typescript/no-inferrable-types': [
            'error',
            { ignoreParameters: false, ignoreProperties: false }
        ],
        'typescript/no-invalid-void-type': [
            'error',
            { allowAsThisParameter: false, allowInGenericTypeArguments: true }
        ],
        'typescript/no-meaningless-void-operator': [
            'error',
            { checkNever: true }
        ],
        'typescript/no-misused-new': 'error',
        'typescript/no-misused-promises': [
            'error',
            {
                checksConditionals: true,
                checksSpreads: true,
                checksVoidReturn: {
                    arguments: true,
                    attributes: true,
                    inheritedMethods: true,
                    properties: true,
                    returns: true,
                    variables: true
                }
            }
        ],
        'typescript/no-misused-spread': ['error', { allow: [] }],
        'typescript/no-mixed-enums': 'error',
        'typescript/no-namespace': [
            'error',
            { allowDeclarations: false, allowDefinitionFiles: false }
        ],
        'typescript/no-non-null-asserted-nullish-coalescing': 'error',
        'typescript/no-non-null-asserted-optional-chain': 'error',
        'typescript/no-non-null-assertion': 'off',
        'typescript/no-redundant-type-constituents': 'error',
        'typescript/no-require-imports': [
            'error',
            { allow: [], allowAsImport: false }
        ],
        'typescript/no-restricted-types': ['error', { types: {} }],
        'typescript/no-this-alias': [
            'error',
            { allowDestructuring: false, allowedNames: [] }
        ],
        'typescript/no-unnecessary-boolean-literal-compare': [
            'error',
            {
                allowComparingNullableBooleansToFalse: true,
                allowComparingNullableBooleansToTrue: true
            }
        ],
        'typescript/no-unnecessary-condition': [
            'error',
            {
                allowConstantLoopConditions: 'only-allowed-literals',
                checkTypePredicates: true
            }
        ],
        'typescript/no-unnecessary-parameter-property-assignment': 'error',
        'typescript/no-unnecessary-qualifier': 'error',
        'typescript/no-unnecessary-template-expression': 'error',
        'typescript/no-unnecessary-type-arguments': 'error',
        'typescript/no-unnecessary-type-assertion': [
            'error',
            { checkLiteralConstAssertions: true, typesToIgnore: [] }
        ],
        'typescript/no-unnecessary-type-constraint': 'error',
        'typescript/no-unnecessary-type-convertion': 'error',
        'typescript/no-unnecessary-type-parameters': 'error',
        'typescript/no-unsafe-argument': 'error',
        'typescript/no-unsafe-assignment': 'error',
        'typescript/no-unsafe-call': 'error',
        'typescript/no-unsafe-declaration-merging': 'error',
        'typescript/no-unsafe-enum-comparison': 'error',
        'typescript/no-unsafe-function-type': 'error',
        'typescript/no-unsafe-member-access': [
            'error',
            { allowOptionalChaining: false }
        ],
        'typescript/no-unsafe-return': 'error',
        'typescript/no-unsafe-type-assertion': 'error',
        'typescript/no-unsafe-unary-minus': 'error',
        'typescript/no-useless-default-assignment': 'error',
        'typescript/no-useless-empty-export': 'error',
        'typescript/no-var-requires': 'error',
        'typescript/no-wrapper-object-types': 'error',
        'typescript/non-nullable-type-assertion-style': 'error',
        'typescript/only-throw-error': [
            'error',
            {
                allow: [{ from: 'lib', name: 'Response' }],
                allowRethrowing: true,
                allowThrowingAny: true,
                allowThrowingUnknown: true
            }
        ],
        'typescript/parameter-properties': [
            'error',
            { allow: [], prefer: 'class-property' }
        ],
        'typescript/prefer-as-const': 'error',
        'typescript/prefer-enum-initializers': 'error',
        'typescript/prefer-find': 'error',
        'typescript/prefer-for-of': 'error',
        'typescript/prefer-function-type': 'error',
        'typescript/prefer-includes': 'error',
        'typescript/prefer-literal-enum-member': [
            'error',
            { allowBitwiseExpressions: true }
        ],
        'typescript/prefer-nullish-coalescing': [
            'error',
            {
                ignoreBooleanCoercion: false,
                ignoreConditionalTests: false,
                ignoreIfStatements: false,
                ignoreMixedLogicalExpressions: false,
                ignorePrimitives: {
                    bigint: false,
                    boolean: false,
                    number: false,
                    string: false
                },
                ignoreTernaryTests: false
            }
        ],
        'typescript/prefer-optional-chain': [
            'error',
            {
                allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: true,
                checkAny: true,
                checkBigInt: true,
                checkBoolean: true,
                checkNumber: true,
                checkString: true,
                checkUnknown: true,
                requireNullish: true
            }
        ],
        'typescript/prefer-promise-reject-errors': [
            'error',
            {
                allowEmptyReject: false,
                allowThrowingAny: false,
                allowThrowingUnknown: false
            }
        ],
        'typescript/prefer-readonly': ['error', { onlyInlineLambdas: false }],
        'typescript/prefer-readonly-parameter-types': [
            'error',
            {
                allow: [],
                checkParameterProperties: true,
                ignoreInferredTypes: false,
                treatMethodsAsReadonly: true
            }
        ],
        'typescript/prefer-reduce-type-parameter': 'error',
        'typescript/prefer-regexp-exec': 'error',
        'typescript/prefer-return-this-type': 'error',
        'typescript/prefer-string-starts-ends-with': [
            'error',
            { allowSingleElementEquality: 'never' }
        ],
        'typescript/prefer-ts-expect-error': 'error',
        'typescript/promise-function-async': [
            'error',
            {
                allowAny: false,
                allowedPromiseNames: [],
                checkArrowFunctions: true,
                checkFunctionDeclarations: true,
                checkFunctionExpressions: true,
                checkMethodDeclarations: true
            }
        ],
        'typescript/related-getter-setter-pairs': 'error',
        'typescript/require-array-sort-compare': 'off',
        'typescript/require-await': 'error',
        'typescript/restrict-plus-operands': [
            'error',
            {
                allowAny: false,
                allowBoolean: false,
                allowNullish: false,
                allowNumberAndString: false,
                allowRegExp: false,
                skipCompoundAssignments: false
            }
        ],
        'typescript/restrict-template-expressions': [
            'error',
            {
                allow: [
                    { from: 'lib', name: ['Error', 'URL', 'URLSearchParams'] }
                ],
                allowAny: false,
                allowArray: false,
                allowBoolean: true,
                allowNever: false,
                allowNullish: true,
                allowNumber: true,
                allowRegExp: true
            }
        ],
        'typescript/return-await': ['error', 'never'],
        'typescript/strict-boolean-expressions': 'off',
        'typescript/strict-void-return': ['error', { allowReturnAny: false }],
        'typescript/switch-exhaustiveness-check': [
            'error',
            {
                allowDefaultCaseForExhaustiveSwitch: true,
                considerDefaultExhaustiveForUnions: true,
                defaultCaseCommentPattern: '^$',
                requireDefaultForNonUnion: true
            }
        ],
        'typescript/triple-slash-reference': [
            'error',
            { lib: 'never', path: 'never', types: 'prefer-import' }
        ],
        'typescript/unbound-method': ['error', { ignoreStatic: false }],
        'typescript/unified-signatures': [
            'error',
            {
                ignoreDifferentlyNamedParameters: false,
                ignoreOverloadsWithDifferentJSDoc: false
            }
        ],
        'typescript/use-unknown-in-catch-callback-variable': 'error'
    }
} as const);
