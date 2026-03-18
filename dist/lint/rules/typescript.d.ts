export declare const typescriptRules: {
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
};
