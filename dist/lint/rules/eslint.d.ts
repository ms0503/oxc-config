export declare const eslintRules: {
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
};
